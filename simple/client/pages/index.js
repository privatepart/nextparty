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
      />
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
}
