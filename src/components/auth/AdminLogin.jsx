import { useState } from "react";


const AdminLogin = ({ setIsAuthorized, setAccessToken }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ modalMsg, setModalMsg ] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if(!username || !password) {
        throw new Error('Username and Password are required!');
      }

      setModalMsg('Loading. Please Wait');
      const response = await fetch('https://vc-backend-72r1.onrender.com/auth-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password
        }),
        credentials: 'include'
      })

      if(!response.ok) {
        const errData = await response.json();
        const errMsg = errData.message || errData.statusText;
        throw new Error(errMsg);
      }

      const data = await response.json();
      setModalMsg('Logged In!');
      setTimeout(() => {
        setAccessToken(data.access_token);
        setIsAuthorized(true);
        setModalMsg('');
      }, 1000);

    } catch (error) {
      setModalMsg(error.message);
      setTimeout(() => {
        setModalMsg('');
      }, 1500);
    }
  }

  return (
    <div className="h-svh w-full grid place-items-center">
      <form onSubmit={handleLogin} className="p-5 bg-yellow-600 flex flex-col items-center gap-3 rounded-lg shadow-md text-light">
        <header className="flex items-center gap-1 md:gap-2 justify-center flex-col text-center sm:flex-row">
          <img src="images/vclogo.png" alt="Villa Crisanta Img" className="h-10"/>
          <h1 className="text-xl font-bold">Welcome To Villa Crisanta</h1>
        </header>

        <label htmlFor="username" className="flex items-center gap-2 w-full">
          <span className="font-medium basis-28">Username: </span>
          <input 
            type="text" 
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            className='w-full outline-none bg-transparent border-b border-light'
          />

        </label>

        <label htmlFor="username" className="flex items-center gap-2 w-full">
          <span className="font-medium basis-28">Password: </span>
          <input 
            type="password" 
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className='w-full outline-none bg-transparent border-b border-light'
          />
        </label>

        <button type="submit" className="bg-light text-yellow-600 px-5 py-1 rounded-md font-semibold hover:bg-dark duration-300">
          Log In
        </button>
      </form>

      {modalMsg &&
        <div className="modal absolute top-1/2 left-1/2 -translate-x-1/2 bg-light px-5 py-3 shadow-lg rounded-md font-semibold" style={{ transform: 'translateY(50% - 12px)'}}>
          {modalMsg}
        </div>
      }
    </div>
  )
};

export default AdminLogin;
