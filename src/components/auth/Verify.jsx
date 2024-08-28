import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from 'react-router-dom';

const Verify = () => {
  const { verified, setVerified } = useContext(AuthContext);
  const navigate = useNavigate();
  const { token } = useParams();
  const [ verificationMsg, setVerificationMsg ] = useState('Verifying...')

  console.log(verified);

  useEffect(() => {
    const controller = new AbortController();
    const redirect = () => {
      setTimeout(() => {
        navigate('/Villa_Crisanta/');
      }, 5000);
    }

    const verifyToken = async () => {
      if(token) {
        try {
          const response = await fetch(`http://localhost:3500/verifyGmail/${token}`, { signal: controller.signal });
          
          if(!response.ok) {
            const errData = await response.json();
            const errMsg = errData.message || errData.statusText;
            throw new Error(errMsg);
           }

           const data = await response.json();
           const { verified } = data;
           if(verified) {
            setVerified(true);
            setVerificationMsg('Verification Successful! Redirecting...');
            redirect()
           } else {
            setVerified(false);
            setVerificationMsg('Verification Failed. Redirecting...');
            redirect()
           }
          
        } catch (error) {
          setVerified(false);
          setVerificationMsg('Verification Token Expires. Redirecting...');
          redirect();
        }
      } else {
        setVerified(false);
        setVerificationMsg('Verification Failed. Redirecting...');
        redirect();
      }

    };

    verifyToken();
    return () => {
      controller.abort();
    }
  }, [ token, navigate, setVerified])
  

  return (
    <div className="flex items-center justify-center text-center text-2xl font-semibold" style={{ height: 'calc(100svh - 48px)'}}>
      {verificationMsg}
    </div>
  )
};

export default Verify;
