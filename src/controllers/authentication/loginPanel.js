// import * as AWS from 'aws-sdk/global';
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

const loginPanel = async (req, res) => {
  const { oldPassword, newPassword, username } = req.body;

  try {
    if (!oldPassword || !newPassword || !username )
      throw new Error("Please complete all the fields");
    else {

        var authenticationData = {
            Username: 'username',
            Password: 'password',
        };
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
            authenticationData
        );
        var poolData = {
            UserPoolId: '...', // Your user pool id here
            ClientId: '...', // Your client id here
        };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        var userData = {
            Username: 'username',
            Pool: userPool,
        };
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.changePassword('oldPassword', 'newPassword', function(err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log('call result: ' + result);
        
          }
        }
      }  
};

module.exports(loginPanel)
