let onSignIn = function (error, state) {
    if (!error) {
        if (state === "signIn") {
        }
        if (state === "signUp") {
        }
    }
};
AccountsTemplates.configureRoute('signIn', {
    layoutTemplate: 'publicLayout',
    redirect: '/dashboard'
});
AccountsTemplates.configureRoute('signUp', {
    layoutTemplate: 'publicLayout',
    redirect: '/dashboard'
});
AccountsTemplates.configureRoute('ensureSignedIn', {
    layoutTemplate: 'publicLayout'
});

AccountsTemplates.configure({
    hideSignUpLink: true,
    onSubmitHook: onSignIn

});

AccountsTemplates.configure({
    texts: {
        title: {
            signIn: "Lucky Star",
        }
    }
});