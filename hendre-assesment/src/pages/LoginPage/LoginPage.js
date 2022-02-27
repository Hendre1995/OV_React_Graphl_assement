import { useManualQuery, useMutation } from "graphql-hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QUERY_USER = `query users($name:String){
  users(where:{name:$name}){
    id 
    name
  }
}`

const ADD_USER_MUTATION = `mutation createUser($userName:String!){
  createUser(data:{name:$userName}){
    name
    id
  }
}`

const Login = () => {
  const navigate = useNavigate()
  const [fetchUser, { loading }] = useManualQuery(QUERY_USER);
  const [createUser] = useMutation(ADD_USER_MUTATION);
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
      } else {
        //API slow...
        setTimeout(() => {
          createUser({
            variables: {
              "userName": userName
            }
          }).then((newUserResult) => {
            if (!newUserResult.data) { return 'there have been an error' }
            window.localStorage.setItem("userId", newUserResult.data.createUser.id);
            return navigate('/product')
          })
        }, 3000)
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