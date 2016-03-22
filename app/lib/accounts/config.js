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
        },
      errors: {
        accountsCreationDisabled: "Client side accounts creation is disabled!!!",
        cannotRemoveService: "Cannot remove the only active service!",
        captchaVerification: "Captcha verification failed!",
        loginForbidden: "Incorrect Username or password",
        mustBeLoggedIn: "error.accounts.Must be logged in",
        pwdMismatch: "error.pwdsDontMatch",
        validationErrors: "Validation Errors",
        verifyEmailFirst: "Please verify your email first. Check the email and follow the link!",
      }

    }
});