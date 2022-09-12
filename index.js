require('dotenv').config()

const { Web3Storage, File } = require('web3.storage');
const axios = require('axios');

const { PUBLIC_GATEWAY } = require('./config')

async function uploadToIPFS({ publicAddress, privateData }) {
    const client = new Web3Storage({ token: process.env.WEB3_STORAGE_TOKEN });

    const files = makeFileObjects(publicAddress, privateData);

    const CID = await client.put(files);
    
    return `${PUBLIC_GATEWAY}/${CID}/${publicAddress}.json`;
}

async function retrieveFromIPFS(CID) {
    const data = await axios.get(CID);

    return data.data;
}

function makeFileObjects (publicAddress, privateData) {
    const obj = { publicAddress: publicAddress, privateData: privateData };

    const buffer = Buffer.from(JSON.stringify(obj))
  
    const files = [ new File([buffer], `${publicAddress}.json`) ]

    return files
}

module.exports = { uploadToIPFS, retrieveFromIPFS };
