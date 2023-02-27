import React from 'react'

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const onChange = (e) => setEmail(e.target.value);
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email);
        toast.success("Email was successful");
      } catch (error) {
        toast.error("Could not send reset email");
      }
    };
  return (
    <div>ForgotPassword</div>
  )
}

export default ForgotPassword