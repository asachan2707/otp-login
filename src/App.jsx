import { useState } from 'react';
import './App.css';
import UserNameLogin from './components/login/username-login';
import PhoneOtpForm from './components/phone-login';

function App() {

  const [phoneLogin, setphoneLogin] = useState(true)

  const changeLoginMode = () => {
    setphoneLogin(!phoneLogin)
  }

  return (
    <div className="login-container">
      <div className="background"></div>
      <div className="login-form">
        {phoneLogin
          ? <div className="App">
            <h2 > Login with Phone</h2 >
            <PhoneOtpForm onChangeLoginMode={changeLoginMode} />
          </div >
          : <UserNameLogin onChangeLoginMode={changeLoginMode} />
        }
      </div>
    </div>
  )
}

export default App
