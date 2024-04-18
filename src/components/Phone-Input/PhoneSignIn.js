import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase";
import "./PhoneSignIn.css";

const PhoneSignIn = ({ setIsModalOpen }) => {
  const [number, setNumber] = useState("");
  const [verifyOTP, setVerifyOTP] = useState("");
  const [user, setUser] = useState(null);

  const SendOTP = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, number, recaptcha);
      console.log(confirmation);
      setUser(confirmation);
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  const VerifyOTP = async () => {
    try {
      const data = await user.confirm(verifyOTP);
      console.log(data);
    } catch (error) {
      alert(error);
      console.log(error.message);
    }
  };
  return (
    <div className="phoneAuth-container">
      <button className="closeModal" onClick={() => setIsModalOpen(false)}>
        x
      </button>
      <div className="phoneAuth">
        {!user ? (
          <div className="sendOTP">
            <PhoneInput
              country={"in"}
              value={number}
              onChange={(number) => setNumber("+" + number)}
            />
            <div id="recaptcha"></div>
            <button onClick={SendOTP} className="btn">
              Send OTP
            </button>
          </div>
        ) : (
          <div className="verifyOTP">
            <input
              type="text"
              value={verifyOTP}
              onChange={(e) => setVerifyOTP(e.target.value)}
            />
            <button onClick={VerifyOTP} className="btn">
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneSignIn;
