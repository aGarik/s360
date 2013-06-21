Ext.define('smiley360.controller.Index', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			loginView: 'loginview',
			signupView: 'signupview',
			homeView: 'homeview'
		},
		control: {
			loginView: {
				loginCommand: 'loginCommand',
				fbCommand: 'fbCommand',
				signupPageCommand: 'signupPageCommand'
			},
			signupView: {
				// The commands fired by the signup view.
				signupCommand: 'signupCommand',
				backButtonCommandSignup: 'backButtonCommandSignup'
			},
			homeView: {
				backButtonCommandHome: 'backButtonCommandHome'
			}
		}
	},

	// Tansitions
	slideLeftTransition: {type: 'slide', direction: 'left'},
	slideRightTransition: {type: 'slide', direction: 'right'},


	//	Commands
	signupCommand: function(){
		console.log("signupCommand");
		//Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);
		
	},
	signupPageCommand: function(){
		console.log('Signup Page Command');
		Ext.Viewport.animateActiveItem(this.getSignupView(), this.slideLeftTransition);
	},
	backButtonCommandHome: function(){
		console.log('Back button command signup');
		Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideRightTransition);
	},
	backButtonCommandSignup: function(){
		console.log('Back button command signup');
		Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideRightTransition);
	},
	loginCommand: function(){
		console.log("LoginCommand");
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);
		//this.activateForgetPassword();
	},
	fbCommand: function(){
		console.log("fbCommand");
		//this.activateForgetPassword();
	},

	//	Base Class functions.
	init: function(){
		this.callParent(arguments);
		console.log("init");
	},
	launch: function(){
		this.callParent(arguments);
       // Ext.getStore('Notes').load();
        console.log('launch');
	}
});