import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passRef = useRef("");
  const usernameRef = useRef("");
  const firstnameRef = useRef("");
  const lastnameRef = useRef("");
  const [resend, setResend] = useState(false);
  const [loading, setLoading] = useState(false);

  const { registerUser, user } = useContext(GlobalContext);

  if (user.length > 0) {
    navigate("/dashboard/home");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResend(true);
    setLoading(true);
    const data = {
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    registerUser(data);
  };
  return <div>SignUp</div>;
}
