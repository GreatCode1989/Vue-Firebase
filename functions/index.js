const { https, logger } = require("firebase-functions");
const { auth } = require("firebase-admin");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole = https.onCall((data, context) => {
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made an admin!!`,
      };
    })
    .catch((err) => {
      console.error(err);
      throw new https.HttpsError('internal', 'Error setting admin role.');
    });
});

