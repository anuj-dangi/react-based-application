// Conditional rendering = allows you to control what gets rendered 
//                         in your application based on certain conditions 
//                         {Show, hide, or change component}

const Conditional = (props) => {
  if(props.isLoggedIn)
  {
    return(
        <h2>Welcome, {props.username}</h2>
    )
  }
  else
  {
    return(
        <h2>You are logged out</h2>
    )
  }
}

export default Conditional;
