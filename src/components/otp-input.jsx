import { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => { } }) => {

    const [otp, setotp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [])
    
    const handleClick = (index) => {
        // Setting the cursor at the end of input field
        inputRefs.current[index].setSelectionRange(1,1);

        // focus on FIRST empty field value in OTP list
        if (index > 0 && otp.map(e => e === "") ) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    }

    const handleChange = (index, event) => {
        const value = event.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setotp(newOtp);

        // submit trigger
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length) {
            onOtpSubmit(combinedOtp);
        }

        // Move to next input if current input is filled
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }

    }
    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {

            // moving focus to previous input
            inputRefs.current[index - 1].focus();
        }
    }

    return <div>
        {
            otp.map((value, index) => {
                return (
                    <input
                        key={index}
                        type="text"
                        ref={(input) => inputRefs.current[index] = input}
                        value={value}
                        onClick={() => handleClick(index)}
                        onChange={(e) => handleChange(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="otpInput"
                    />
                );
            })
    }


    {/* <h2> Once field is dirty and vlue is removed make it red as required</h2>

    <h4 style={{ color: "red" }}>Push to github</h4> */}
    </div>
}

export default OtpInput