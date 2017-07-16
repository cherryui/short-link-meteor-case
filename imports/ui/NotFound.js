import React from 'react';
// export default class NotFound extends React.Component {

// 	render(){
// 		return <p>NotFound Component here</p>
// 	}
// }
import { Link } from 'react-router'

const NotFound = () =>  {
	return(
		  <div className='boxed-view'>
		    <div className="boxed-view__box">
		        <h1>Page Not found</h1>
			    <p >NotFound Component here</p>
			   
			    <Link to='/' className='button button-link'>HEAD HOME</Link>

		    </div>		       
		  </div>
		)
	

}


export default  NotFound;