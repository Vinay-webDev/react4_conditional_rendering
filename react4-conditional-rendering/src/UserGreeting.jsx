/* it's better if you use ternary operator */
function UserGreeting(props) {

 return ( props.isLoggedIn? <h2 className="welcome" > welcome {props.username} </h2> : 
                            <h2 className="please-login"> please login to continue! </h2>);
}  

export default UserGreeting




