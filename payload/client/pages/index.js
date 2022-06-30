import { useState } from 'react'
import Partybutton from 'partybutton-react';
export default function Payload() {
  const [session, setSession] = useState(null)
  const [payload, setPayload] = useState({})
  const onSession = (val) => {
    setSession(val)
  }
  const updated = (e) => {
    let p = payload
    p[e.target.id] = e.target.value
    setPayload(p)
  }
  return (
    <div className="App">
      <h1>Login with NFT</h1>
      <div>Enter the contract address and tokenId of an NFT you own</div>
      <br />
      { !session &&
        <>
          <div>
            <input id='contract' style={{display:"block", width: "300px", padding: "10px"}} type='text' placeholder="contract" onChange={updated} />
            <input id='tokenId' style={{display:"block", width: "300px", padding: "10px"}} type='text' placeholder="tokenId" onChange={updated} />
          </div>
          <br />
        </>
      }
      { session &&
        <>
          <img
            src={session.auth.image}
            width={100}
            height={100}
          />
          <br />
        </>
      }
      <Partybutton
        role="user"
        payload={payload}
        onSession={onSession}
        login={{
          message: "Connect with Wallet",
          style: {
            backgroundColor: "#6271A0",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "15px",
            cursor: "pointer"
          }
        }}
        logout={{
          message: "Disconnect",
          style: {
            backgroundColor: "silver",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "15px",
            cursor: "pointer"
          }
        }}
      />
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
