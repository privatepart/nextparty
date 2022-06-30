require('dotenv').config()
const Privateparty = require('privateparty')
const fetch = require('cross-fetch')
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(process.env.RPC)
const party = new Privateparty({
  cors: {
    credentials: true,
    origin: ["http://localhost:3000"]
  }
})
party.add("user", {
  authorize: async (req, account) => {
    console.log("req.body", req.body)
    let owner = await party.contract(web3, party.abi.erc721, req.body.payload.contract).ownerOf(req.body.payload.tokenId).call()
    if (owner.toLowerCase() === account.toLowerCase()) {
      let tokenURI = await party.contract(web3, party.abi.erc721, req.body.payload.contract).tokenURI(req.body.payload.tokenId).call()
      // Get the image URL and turn it into IPFS gateway URL.
      let image
      if (tokenURI.startsWith("http")) {
        image = await fetch(tokenURI).then(r => r.json()).then(r => r.image)
      } else {
        image = await fetch("https://ipfs.io/ipfs/" + tokenURI.replace("ipfs://", "")).then(r => r.json()).then(r => r.image)
      }
      return {
        tokenURI,
        image: (image.startsWith("http") ? image : "https://ipfs.io/ipfs/" + image.replace("ipfs://", "")),
        owner: {
          contract: req.body.payload.contract,
          tokenId: req.body.payload.tokenId
        }
      }
    } else {
      // If the balance is 0, don't allow login
      throw new Error("not the owner of the NFT")
    }

  }
})
party.app.listen(4200)
