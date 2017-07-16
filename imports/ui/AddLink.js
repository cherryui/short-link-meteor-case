 import React from 'react';
 import Modal from 'react-modal'
 import { Meteor } from 'meteor/meteor';

export default class AddLink extends React.Component {
	  constructor(props) {
	  	super(props);
	  	this.state = {
	  		url:'',
	  		isOpen:false
	  	}
	  }
	  onSubmit = (e) => {
		  	e.preventDefault();

		  	const url = this.state.url;	
		    
		  	if (url) {
		  		Meteor.call('links.insert',url,(err,res) =>{
		  			if(!err) {
		  				this.handleModalClose()
		  			} else {
		  				this.setState({error:err.reason})
		  			}
		  		});
		  		//Links.insert({url,userId:Meteor.userId()});
		  		this.refs.url.value = '';

		  	}
		    
		  }

		  onChange = (e) => {
		  	this.setState({
		  		url:e.target.value
		  		

		  	})
		  }
   
    handleModalClose = () => {
    	this.setState({isOpen: false, url: '',error:''})
    }
	render() {
		return (
			 <div>
			    <button  onClick={() => this.setState({isOpen: true})} className="button">+ Add Link</button>
             
				<Modal isOpen={this.state.isOpen} contentLabel='Add Link' 
				onAfterOpen={() => this.refs.url.focus()}
				onRequestClose = {this.handleModalClose}
				className='boxed-view__box' 
				overlayClassName='boxed-view boxed-view--modal'>
					<h1>add link</h1>
                     {this.state.error ? <p>{this.state.error}</p> : undefined}
			        <form onSubmit = {this.onSubmit} className='box-view_form'>
			           <input ref='url'  type="text" ref='url' placeholder="URL" value={this.state.url}
			           onChange={this.onChange}/>
			           <button className="button">add link</button>
			           <button className="button button--secondary" type="button"
			           onClick={this.handleModalClose}>Cancel</button>	           

			        </form>
			        

				</Modal>
		        
			 </div>
			)
	}
}