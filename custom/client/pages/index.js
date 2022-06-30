import { useState } from 'react'
import Partybutton from 'partybutton-react';
export default function Custom() {
  const [session, setSession] = useState(null)
  const onSession = (val) => {
    setSession(val)
  }
  return (
    <>
      <Partybutton
        role="user"
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
        host="http://localhost:4200"
      />
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
}
