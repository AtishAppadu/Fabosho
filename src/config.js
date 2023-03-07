import * as AWS from 'aws-sdk/global';


var _config = {
    cognito: { 
        userPoolId: 'eu-west-2_dFTg6o34G', // e.g. us-east-2_uXboG5pAb
        region: 'eu-west-2', // e.g. us-east-2
        clientId: '4bdnlrt9gfpgou2asb4fk9vd9q', //is this used anywhere?
        identityPoolId: 'eu-west-2:b2fe2a4d-95a1-4c9c-94a8-d1630f8226a4' //is this used anywhere?
        },
    };

function loginButton() {

    var authenticationData = {
        Username : document.getElementById("emailId").value,
        Password : document.getElementById("passwordId").value,
    };

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
        authenticationData
    );
    
    window.location = "index.html";
    
    var poolData = {
        UserPoolId : 'eu-west-2_dFTg6o34G', 
        ClientId : '4bdnlrt9gfpgou2asb4fk9vd9q'
    }; 

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var userData = {
        Username : document.getElementById("emailId").value,
        Pool : userPool
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            var accessToken = result.getAccessToken().getJwtToken();

            AWS.config.region = _config.cognito.region;

            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId : 'eu-west-2:b2fe2a4d-95a1-4c9c-94a8-d1630f8226a4', 
                Logins : {
                    'cognito-idp.eu-west-2.amazonaws.com/eu-west-2_dFTg6o34G' 
                    : result.getIdToken().getJwtToken(),
                },
            });

            AWS.config.credentials.refresh(error => {
                if (error) {
                    console.error(error);
                } else {
                    console.log('Successfully logged!');
                }
            });
        },

        onFailure: function(err) {
            alert(err.message || JSON.stringify(err));
        },

        
    });
}