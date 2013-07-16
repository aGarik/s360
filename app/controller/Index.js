var Debug_ = true, isLogined = false;
Ext.define('smiley360.controller.Index', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            //newList   : '#newList',
            homeView: 'homeview',
            loginView: 'loginview',
            signupView: 'signupview',
            editProfileView: 'editprofileview',
            forgetPasswordView: 'forgetpasswordview',
            shareToFacebookView: 'sharetofacebookview',
            shareToTwitterView: 'sharetotwitterview',
            surveyView: 'surveyview',
            missionsView: 'missionsview',
            detailsView: 'detailsview',
            offersView: 'offersview',
            offerDetailsView: 'offerdetailsview',
            browseView: 'browseview',
        },
        control: {
            loginView: {
                Authentificate: 'Authentificate',
                ShowSignupViewCommand: 'ShowSignupViewCommand',
                getProfileCommand: 'getProfileHomeCommand',
                ShowSurveyViewCommand: 'ShowSurveyViewCommand',
                onMissionTapCommand: 'onMissionTapCommand',
                onMissionDetailsTapCommand: 'onMissionDetailsTapCommand',
                onOffersTapCommand: 'onOffersTapCommand',
                onOffersDetailsTapCommand: 'onOffersDetailsTapCommand',
                onBrowseTapCommand: 'onBrowseTapCommand',
            },
            signupView: {
                // The commands fired by the signup view.
                signupCommand: 'signupCommand',
                backButtonCommandSignup: 'backButtonCommandSignup',
            },
            homeView: {
                backButtonCommandHome: 'backButtonCommandHome',
                oneditLabelCommand: 'oneditLabelCommand',
                //GoToProfileCommand: 'GoToProfileCommand',
                getProfileHomeCommand: 'getProfileHomeCommand',
            },
            sharetofacebookview: {
            },
            sharetotwitterview: {
            },
            editProfileView: {
                backButtonCommandProfile: 'backButtonCommandProfile',
                onbtnSavechangesCommandProfile: 'onbtnSavechangesCommandProfile',
            },
            surveyView: {
                SurveyBackButtonCommand: 'SurveyBackButtonCommand'
            },
            missionsView:
            {
                backButtonCommandMissions: 'backButtonCommandMissions'
            },
            detailsView: {
                backButtonCommandDetails: 'backButtonCommandDetails'
            },
            offersView: {
                backButtonCommandOffers: 'backButtonCommandOffers'
            },
            offerDetailsView: {
                backButtonCommandOfferDetails: 'backButtonCommandOfferDetails'
            },
        }
    },

    // Tansitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },
    // Commands
    

    backButtonCommandDetails: function () {
        //================================
        console.log("");
        //================================
        Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideLeftTransition);

        //this.activateForgetPassword();
    },
    onBrowseTapCommand: function () {
        console.log("onBrowseTapCommand");
        if (isLogined) { Ext.Viewport.animateActiveItem(this.getBrowseView(), this.slideLeftTransition); }
    },
    onLocalstoragetestTapCommand: function () {
        Ext.Viewport.animateActiveItem(this.getMyMainView(), this.slideLeftTransition);
    },
    onOffersDetailsTapCommand: function () {
    	if (isLogined) { Ext.Viewport.animateActiveItem(this.getOfferDetailsView(), this.slideLeftTransition); }
    },
    onOffersTapCommand: function () {
    	if (isLogined) { Ext.Viewport.animateActiveItem(this.getOffersView(), this.slideLeftTransition); }
        smiley360.services.getOffers(function (response) {
            if (response.success) {
                //alert('Get an offer: ' + response.userOffers[0].text);//provess/close view
                Ext.getCmp('offers_label_text').setHtml(response.userOffers[0].text.toString());
            }
            else {
                alert('smth wrong');//show error on view
            }
        });
        
        
    },
    backButtonCommandOffers: function () {
        //================================
        console.log("");
        //================================
        Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

        //this.activateForgetPassword();
    },
    backButtonCommandOfferDetails: function () {
        //================================
        console.log("");
        //================================
        Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition); 

        //this.activateForgetPassword();
    },
    backButtonCommandMissions: function () {
        //================================
        console.log("");
        //================================
        Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

        //this.activateForgetPassword();
    },
    //getProfileCommand: function () {
    //    //================================
    //    console.log('getProfileCommand');
    //    //================================
    //    if (isLogined) { Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition); }
    //},
    //GoToProfileCommand: function () {
    //    //================================
    //    console.log('GoToProfileCommand');
    //    //================================
    //    if (isLogined) { Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition); }
    //},
    onMissionDetailsTapCommand: function () {
    	if (isLogined) {Ext.Viewport.animateActiveItem(this.getDetailsView(), this.slideLeftTransition);}
    },
    onMissionTapCommand: function () {
    	if (isLogined) { Ext.Viewport.animateActiveItem(this.getMissionsView(), this.slideLeftTransition); }
    },
    oneditLabelCommand: function () {
        console.log("oneditLabelCommand");
        if (isLogined) { Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition); }

    },
    Authentificate: function (view, login, password)
    {
        smiley360.services.authenticate( login, password,
			function (response)
			{
				if (response.success)
				{					
					isLogined = true;
				}
				else
				{
					alert('Login unsuccessful!');//show error on view
				}
			});
        if (isLogined) { Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition); alert('Login Successful!'); };
        //this.activateForgetPassword();
    },

    ShowSignupViewCommand: function () {
        //================================
        console.log('ShowSignupViewCommand');
        //================================
        if (isLogined) { Ext.Viewport.animateActiveItem(this.getSignupView(), this.slideLeftTransition); }
    },

    getProfileCommand: function () {
        //================================
        console.log('getProfileCommand');
        //================================
        smiley360.services.getProfile(memberID,
			function (response) {
			    if (response.success) {
			        alert('Profile: ' + response);
			    }
			    else {
			        alert('Profile is corrupted!');//show error on view
			    }
			});
        if (isLogined) { Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition); }
    },
    getProfileHomeCommand: function () {
        //================================
        console.log('getProfileHomeCommand');
        //================================
        var command = { data: { memberID: 249 } };
        smiley360.services.getProfile(command.data.memberID,
			function (response) {
			    if (response.success) {
			        alert('Profile: ' + response.userProfile.fName + ' ' + response.userProfile.lName + ' ');
			        var details = "*****************" + "\n";
			        var fieldContents;
			        for (var field in response.userProfile) {
			            fieldContents = response.userProfile[field];
			            if ((field != 'address_status') && (field != 'isComplete'))
			            { Ext.getCmp(field).setValue(fieldContents); }
			            details += "  " + field + ": " + fieldContents + "\n";
			        }
			        alert(details);
			    }
			    else {
			        alert('Profile is corrupted!');//show error on view
			    }
			});
        if (isLogined) { Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition); }
    },
    onbtnSavechangesCommandProfile: function () {
        //================================
        console.log('SavechangesCommand');
        var command = { data: { memberID: 249 } };
        smiley360.services.setProfile(command.data.memberID,
			function (response) {
			    if (response.success) {
			        //alert('Profile: ' + response.userProfile.fName + ' ' + response.userProfile.lName + ' ');
			        var details = "*****************" + "\n";
			        //var fieldContents;
			        for (var field in response.upduserProfile) {
			            if ((field != 'address_status') && (field != 'isComplete'))
			            {			                
			                response.upduserProfile[field] = Ext.getCmp(field).getValue();
			            }
			            details += "  " + field + ": " + response.upduserProfile[field] + "\n";
			        }
			        alert(details);
			        alert('Your changes allpied successfully!');
			    }
			    else {
			        alert('Profile is corrupted!');//show error on view
			    }
			});
        if (isLogined) { Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition); }
        
        //if (isLogined) { Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition); }
    },
    ShowSurveyViewCommand: function () {
        //================================
        console.log('ShowSurveyViewCommand');
        //================================
        if (isLogined) { Ext.Viewport.animateActiveItem(this.getSurveyView(), this.slideLeftTransition); }
    },

    SurveyBackButtonCommand: function () {
        //================================
        console.log('SurveyBackButtonCommand');
        //================================
        Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition); 
    },

    //	Commands
    signupCommand: function () {
        console.log("signupCommand");
        //Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

    },

    backButtonCommandHome: function () {
        console.log('Back button command signup');
        Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideRightTransition); 
    },

    backButtonCommandProfile: function () {
        console.log('Back button command signup');
         Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideRightTransition); 
    },

    backButtonCommandSignup: function () {
        console.log('Back button command signup');
        Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideRightTransition);
    },

    //	Base Class functions.
    init: function () {
        //================================
        console.log("init");
        //================================
        this.callParent(arguments);

        var url = "../app/services/Services.js";
        Debug_ = false;
        //Ext.require('Ext.util.DelayedTask');
        if (Debug_ == true) {
            url = "../app/services/Services.mock.js";

            Ext.require('Ext.util.DelayedTask');
        }

        var onload = function () {
            // do something onload
            //console.log(Ext.Loader.history);
            console.log("Load is done!!!!");
        }
        var onerror = function () {
            // do something onerror
            console.log("Error!!!!");
        }
        var scope = this;
        Ext.Loader.injectScriptElement(url, onload, onerror, scope);

    },

    launch: function () {
        //================================
        console.log('launch');
        //================================
        this.callParent(arguments);
        // Ext.getStore('Notes').load();
    }
});



/* Global models and methods */

smiley360.viewStatus =
{
    initial: 'initial',
    progress: 'progress',
    successful: 'successful',
    unsuccessful: 'unsuccessful',
}

smiley360.setResponseStatus = function (view, response) {
    var status = response.success ?
        smiley360.viewStatus.successful :
        smiley360.viewStatus.unsuccessful;

    smiley360.setViewStatus(view, status);
}

smiley360.setViewStatus = function (view, status) {
    var viewName = Ext.getDisplayName(view);
    var logMessage = Ext.String.format(
        'setViewStatus: { view: {0}, status: {1} }', viewName, status);

    console.log(logMessage);

    view.setStatus(status);
}