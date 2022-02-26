import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/ClientPage')
  }
  return (
    <div className="container">
      <div className="form-box">
        <div className="body-form">

          <h1> Welcome to my assesment</h1>
          <input type="text"
            className="input-style"
            placeholder="Username" />
          <button type="button" onClick={handleLogin}>LOGIN</button>

        </div>
      </div>
    </div>
  )
}

export default Login;