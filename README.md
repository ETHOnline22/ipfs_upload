# IPFS Upload

This is a PoC consisting of functions to upload a json data to the IPFS using [web3.storage](https://web3.storage).

To run this PoC,

1. Create a file `.env` and add a web3.storage token like below,

```js
WEB3_STORAGE_TOKEN={YOUR_TOKEN}
```

2. To upload a public address and private data to ipfs, use the below function

```js
const contentURI = await uploadToIPFS({ publicAddress, privateData });
```

This function will return an IPFS link pointing to a JSON.

3. To fetch the data from IPFS, use the below function

```js
const data = await retrieveFromIPFS(contentURI);
```

This will return the json data back by querying the URI
