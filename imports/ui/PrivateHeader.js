 import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class PrivateHeader extends React.Component {
	onLogout = ()  => {
			    Accounts.logout();
			    
			  }
	render() {

		return (
			<div className='header'>
			   <div className="header__content">
			    <h1  className="header__title">{this.props.title}</h1>
                <button onClick={this.onLogout} className="button button-link-text">Logout</button>
			  </div>
             </div>
			)
	}
}


// const PrivateHeader = (props) => {
//     return (
//     	<div>
// 			    <h1>{props.title}</h1>
//                 <button onClick={() => Accounts.Logout()}>Logout</button>
// 		</div>
//     	)

// }

PrivateHeader.propTypes = {
	title: React.PropTypes.string.isRequired
}

// export default PrivateHeader;