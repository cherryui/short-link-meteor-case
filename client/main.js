import { Meteor } from 'meteor/meteor';
import ReactDom from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session'

import { routes, onAuthChange } from '../imports/routes/routes';
import { Links } from '../imports/api/links';
import '../imports/startup/simple-schema-configuration'

//这一步变量太难，考虑改变更好理解的命名



Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
  
});





Meteor.startup(() => {
	Session.set('showVisible',true)
	ReactDom.render(routes,document.getElementById('app'))
})