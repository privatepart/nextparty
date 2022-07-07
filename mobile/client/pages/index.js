import { useState } from 'react'
import Partybutton from 'partybutton-react';
export default function Simple() {
  const [session, setSession] = useState(null)
  const onSession = (val) => {
    setSession(val)
  }
  return (
    <>
      <Partybutton
        role="user"
        onSession={onSession}
        walletconnect="767750972a99441ea5d276ed16d7eef0"
      />
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
}
