Ext.define('smiley360.view.Login', {
	extend: 'Ext.form.Panel',
	requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img'],
	alias: 'widget.loginview',
	cls: 'page-bg',

	config: {
		title: 'Login',
		padding: '15px',
		scrollable: 'none',
		items: [{
			xtype: 'image',
			src: 'resources/images/logo.png',
			cls: 'logo'
		},
		{
			xtype: 'spacer',
			height: '14px'
		},
		{
			xtype: 'panel',
			cls: 'login-box',
			height: '254px',
			items: [
				{
					xtype: 'textfield',
					placeHolder: 'Username',
					itemId: 'txtUserName',
					name: 'txtUserName',
					cls: 'cust-input cust-input-user',
					clearIcon: false,
					required: true
				},
				{
					xtype: 'passwordfield',
					maxHeight: '20px',
					placeHolder: '******',
					itemId: 'txtPassword',
					name: 'txtPassword',
					cls: 'cust-input cust-input-pwd',
					clearIcon: false,
					required: true
				},
				{
					xtype: 'spacer',
					height: '12px'
				},
				{
					xtype: 'button',
					itemId: 'cmdLogin',
					cls: 'cust-btn login-btn',
					text: 'LOG IN'
				},
				{
					xtype: 'label',
					html: 'Lost your password?',
					cls: 'left cust-label'
				},
				{
					xtype: 'label',
					id: 'signup-label',
					html: 'Need to set up a New Account?',
					cls: 'right cust-label'
				},
				{
					xtype: 'spacer',
					cls: 'clear',
					height: '27px'
				},
				{
					xtype: 'button',
					itemId: 'cmdFb',
					cls: 'white cust-btn fb-login-btn',
					text: 'LOG IN WITH FACEBOOK'
				}
			]
		}],
		listeners: [
			{
				delegate: "#cmdLogin",
				event: "tap",
				fn: "onLoginButtonTap"
			},
			{
				delegate: '#cmbFb',
				event: 'tap',
				fn: 'onFbButtonTap'
			},
	  		{
	  			element: 'element',
	            delegate: 'div#signup-label',
	            event: 'tap',
	            fn: 'onSignupTap'

	  		}
		]
	},

	onLoginButtonTap: function(){
		console.log("login button tapped");
			//alert('signup button tapped');
			this.fireEvent('loginCommand', this);
	},
	onFbButtonTap: function(){
		console.log("fb button tapped");
			//alert('signup button tapped');
			this.fireEvent('fbCommand', this);
	},
	onSignupTap: function(){
		console.log('signup label tapped');
		this.fireEvent('signupPageCommand', this);
	}


});