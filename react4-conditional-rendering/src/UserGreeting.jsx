/* it's better if you use ternary operator */
/* this component kinda looking robust so */

import PropTypes from 'prop-types'

function UserGreeting(props) {

    const welcome = <h2 className="welcome" > 
                       welcome {props.username} 
                    </h2> 
    
    const pleaseLogin = <h2 className="please-login"> 
                            please login to continue! 
                        </h2>

 return ( props.isLoggedIn? welcome : pleaseLogin );
}  
/* it's always a better practice to add 
propTypes and defaultProps while using props */
UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting




