import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-west-2_dFTg6o34G",  // Your user pool id here
    ClientId: "4bdnlrt9gfpgou2asb4fk9vd9q" // Your client id here
};

export default new CognitoUserPool(poolData);