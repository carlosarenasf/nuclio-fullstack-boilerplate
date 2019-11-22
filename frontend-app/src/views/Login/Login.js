import React, { useState } from 'react';

function Login(props) {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div>
      <h3>UserName</h3>
      <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
      <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
    </div>
  );
}

export default Login;