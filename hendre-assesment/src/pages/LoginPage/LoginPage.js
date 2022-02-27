import { useManualQuery} from "graphql-hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QUERY_USER = `query users($name:String){
  users(where:{name:$name}){
    id 
    name
  }
}`

const Login = () => {
  const navigate = useNavigate()
  const [fetchUser, { loading }] = useManualQuery(QUERY_USER);
  const [userName, setUserName] = useState("")

  const handleLogin = () => {
    fetchUser({
      variables: {
        "name": userName
      }
    }).then((result) => {
      if (!result.data) { return 'there have been an error' }
      if (result.data.users.length > 0) {
        window.localStorage.setItem("userId", result.data.users[0].id);
        return navigate('/product');
      }
    })

  }

  if (loading) return 'Loading...'

  return (
    <div className="container">
      <div className="form-box">
        <div className="body-form">

          <h1> {userName}Welcome to my assesment</h1>
          <input type="text"
            className="input-style"
            placeholder="Username"
            value={userName} onChange={(event) => setUserName(event.target.value)} />
          <button type="button" onClick={handleLogin}>LOGIN</button>

        </div>
      </div>
    </div>
  )
}

export default Login;