import { useState } from 'react'
import Partybutton from 'partybutton-react';
export default function Simple() {
  const [session, setSession] = useState(null)
  const [notification, setNotification] = useState(null)
  const onSession = (val) => {
    setNotification("")
    setSession(val)
  }
  return (
    <>
      <nav style={{ backgroundColor: "red", color: "white" }} >{notification}</nav>
      <h2>Click connect but reject the signature, and see what happens! (It will display an error message)</h2>
      <Partybutton
        role="user"
        onSession={onSession}
        onError={(e) => { setNotification(e.message) }}
        walletconnect="767750972a99441ea5d276ed16d7eef0"
      />
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
}
