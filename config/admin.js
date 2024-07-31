module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "yourAdminJWTSecret"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "yourGeneratedSalt"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "yourGeneratedSaltForTransferToken"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
console.log(require("crypto").randomBytes(16).toString("base64"));
