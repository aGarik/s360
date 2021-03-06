Ext.define('smiley360.view.Login', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.Img',
        'Ext.Label',
        'Ext.form.FieldSet',
        'Ext.form.Password',
        'Ext.field.Text',
    ],
    alias: 'widget.loginview',
    config: {
        cls: 'page-bg',
        title: 'Login',
        padding: '15px',
        scrollable: 'none',
        items: [{
            xtype: 'image',
            src: 'resources/images/logo.png',
            cls: 'logo'
        }, {
            xtype: 'spacer',
            height: '14px'
        }, {
            xtype: 'panel',
            cls: 'login-box',
            height: '254px',
            items: [{
                xtype: 'textfield',
                placeHolder: 'Username',
                itemId: 'txtUserName',
                id: 'txtLogin',
                name: 'txtUserName',
                cls: 'cust-input cust-input-user',
                clearIcon: false,
                required: true
            }, {
                xtype: 'passwordfield',
                maxHeight: '20px',
                placeHolder: '******',
                id: 'txtPassword',
                itemId: 'txtPassword',
                name: 'txtPassword',
                cls: 'cust-input cust-input-pwd',
                clearIcon: false,
                required: true
            }, {
                xtype: 'spacer',
                height: '12px'
            }, {
                xtype: 'button',
                itemId: 'xLogin',
                cls: 'cust-btn login-btn',
                text: 'LOG IN'
            }, {
                xtype: 'label',
                id: 'xForgetPassword',
                html: 'Lost your password?',
                cls: 'left cust-label'
            }, {
                xtype: 'label',
                id: 'xSignup',
                html: 'Need to set up a New Account?',
                cls: 'right cust-label'
            }, {
                xtype: 'spacer',
                cls: 'clear',
                height: '27px'
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    text: 'T',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('sharetotwitterview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'F',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('sharetofacebookview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'Y',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('sharetoyoutubeview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'L',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('sharelinkview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'B',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('sharetoblogview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'P',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('uploadphotoview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: '2',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('sharetoface2faceview').show();
                        }
                    }
                }],
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    text: 'R',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('reviewforfenderview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'OR',
                    width: '55px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('offerremoveview').show();
                        }
                    }
                }]
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    style: 'background-color: #3f4b4e !important;',
                    itemId: 'xEditProfile',
                    text: 'E',
                    width: '50px',
                    ui: 'action',
                    tap: 'onEditProfileTap'
                }, {
                    xtype: 'button',
                    style: 'background-color: #3f4b4e !important;',
                    itemId: 'xSurvey',
                    text: 'S',
                    width: '50px',
                    ui: 'action',
                    tap: 'onSurveyTap'
                }],
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    style: 'background-color: #3f4b4e !important;',
                    itemId: 'xMission',
                    text: 'M',
                    width: '50px',
                    ui: 'action',
                    tap: 'onMission'
                }, {
                    xtype: 'button',
                    style: 'background-color: #3f4b4e !important;',
                    itemId: 'xMissionDetails',
                    text: 'M_D',
                    width: '70px',
                    ui: 'action',
                    tap: 'onMission_List'
                }, {
                    xtype: 'button',
                    style: 'background-color: #3f4b4e !important;',
                    itemId: 'xOffers',
                    text: 'O',
                    width: '50px',
                    ui: 'action',
                    tap: 'onOffers'
                }, {
                    xtype: 'button',
                    style: 'background-color: #3f4b4e !important;',
                    itemId: 'xOffersDetails',
                    text: 'O_D',
                    width: '70px',
                    ui: 'action',
                    tap: 'onOffersDetails'
                }],
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    //style: 'background-color: #3f4b4e !important;',
                    itemId: 'xBrowse',
                    hidden: 'true',
                    text: 'B',
                    width: '50px',
                    ui: 'confirm',
                    tap: 'onxBrowse'
                }],
            }],
        }],
        listeners: [{
            delegate: "#xBrowse",
            fn: "onBrowseTap",
            event: "tap",
        }, {
            delegate: "#xOffersDetails",
            fn: "onOffersDetailsTap",
            event: "tap",
        }, {
            delegate: "#xOffers",
            fn: "onOffersTap",
            event: "tap",
        }, {
            delegate: "#xMission",
            fn: "onMissionTap",
            event: "tap",
        }, {
            delegate: "#xMissionDetails",
            fn: "onMissionDetailsTap",
            event: "tap",
        }, {
            delegate: "#xLogin",
            fn: "onLoginTap",
            event: "tap",
        }, {
            delegate: 'div#xSignup',
            fn: 'onSignupTap',
            element: 'element',
            event: 'tap',
        }, {
            delegate: 'div#xForgetPassword',
            fn: 'onForgetPasswordTap',
            event: 'tap',
            element: 'element',
        }, {
            delegate: "#xEditProfile",
            fn: "onEditProfileTap",
            event: "tap",
        }, {
            delegate: "#xSurvey",
            fn: "onSurveyTap",
            event: "tap",
        }]
    },

    onBrowseTap: function () {
        //================================
        console.log("onBrowseTap");
        //================================
        this.fireEvent('onBrowseTapCommand', this);
    },

    onLocalstoragetestTap: function () {
        //================================
        console.log("onLocalstoragetestTap");
        //================================
        this.fireEvent('onLocalstoragetestTapCommand', this);
    },

    onOffersDetailsTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onOffersDetailsTapCommand', this);
    },

    onOffersTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onOffersTapCommand', this);
    },

    onMissionDetailsTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onMissionDetailsTapCommand', this);
    },

    onMissionTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onMissionTapCommand', this);
    },

    onLoginTap: function () {
        this.fireEvent('Authentificate', this, this.down("#txtLogin").getValue(), this.down("#txtPassword").getValue());
    },

    onSignupTap: function () {
        //================================
        console.log("onSignupTap");
        //================================
        this.fireEvent('ShowSignupViewCommand', this);
    },

    onForgetPasswordTap: function () {
        Ext.widget('forgetpasswordview').show();
    },

    onEditProfileTap: function () {
        this.fireEvent('getProfileCommand', this);
    },

    onSurveyTap: function () {
        //================================
        console.log("onSurveyTap");
        //================================
        this.fireEvent('ShowSurveyViewCommand', this);
    },

    getAuthData: function () {
        var getView = this;
        var getData = {
            loginData: Ext.getCmp('txtLogin').getValue(),
            passwordData: Ext.getCmp('txtPassword').getValue()
        };
        //smiley360.authenticate(getView, getData.loginData, getData.passwordData);
    }
});
