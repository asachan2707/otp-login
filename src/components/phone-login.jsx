import React, { useState } from 'react'
import OtpInput from './otp-input';

const PhoneOtpForm = ({onChangeLoginMode = () => {}}) => {

    const [phoneNumber, setphoneNumber] = useState("");
    const [showOtpInput, setshowOtpInput] = useState(false);

    const handlePhoneNumber = (event) => {
        setphoneNumber(event.target.value);
    }

    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        // Phone Validation - format
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Invalid Phone Number format");
            return;
        }

        // Backend Call - For OTP trigger

        // Show OTP field
        setshowOtpInput(true);
    }

    const onOtpSubmit = (otp) => {
        console.log('Login Successful with ', otp);
    }

    return (
        <div>
            {!showOtpInput ? <form onSubmit={handlePhoneSubmit}>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    placeholder="Enter Phone number (10-digit)"
                    required
                />
                <button type="submit">Submit</button>
            <button className="mode" onClick={onChangeLoginMode}>Email Login</button>
            </form>: <div>
                <p>OTP Sent to {phoneNumber}</p>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
            </div>}
    </div>
    )
}

export default PhoneOtpForm