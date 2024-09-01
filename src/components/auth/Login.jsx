import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { verified, setVerified } = useContext(AuthContext);
  const [gmail, setGmail] = useState("");
  const [showSend, setShowSend] = useState(false);

  const handleSendGmail = async (e) => {
      e.preventDefault();
      if (!gmail) {
        alert("Apologies. Gmail is Required.")
      };

      // SET IF VERIFIED
      try {
        const response = await fetch('https://vc-backend-72r1.onrender.com/sendVerification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            gmail
          })
        });
        
        if(!response.ok) {
          throw new Error(response.message);
        }

        const data = await response.json();
        console.log(data);

        setShowSend(true);
        setTimeout(() => {
          setShowSend(false);
        }, 2000);
        setGmail('')
      } catch (error) {
        console.error(error.message)
      }
  }

  return (
    <>
      {!verified && (
        <div className="flex items-center justify-center absolute bg-gray-900 rounded-lg opacity-80 top-0 bottom-0 left-0 right-0 z-20 text-white">
          <form
            className='flex flex-col gap-5 justify-center text-center'
            onSubmit={handleSendGmail}
          >
            <h1 className="text-xl font-semibold">Login With Gmail</h1>
            <div className="gmail-input flex items-stretch justify-between gap-2">
              <div className="bg-secondaryGray px-3 py-2 grow rounded-md relative">
                <input
                  type="email"
                  value={gmail}
                  onChange={(e) => setGmail(e.target.value)}
                  className="bg-transparent outline-none w-full pr-6 font-medium text-dark rounded-md placeholder:text-sm"
                  required
                  placeholder="Enter Your Gmail"
                />

                <img
                  src="images/gmail_logo.png"
                  alt="Gmail Logo"
                  className="h-4 w-5 absolute right-3 top-3"
                />
              </div>

              <button
                type="submit"
                className="bg-yellow-600 text-white hover:bg-yellow-500 duration-200 px-3 rounded-md"
              >
                Submit
              </button>
            </div>
            <h1 className="text-xl font-semibold">
              Log in to continue with your booking.
            </h1>
          </form>

          {/* MODAL FOR LOGIN */}
          {showSend && (
            <div className="bg-light font-semibold text-2xl rounded-md top-50% left-50% absolute z-30 py-5 px-10 text-dark text-center">
              <p>Verification Sent. Please Check your Gmail: <br/> {gmail}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Login;
