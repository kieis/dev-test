const { userPermissions } = require("../database");

const canDelete = (req, res, next) => {
  // considering a scenario that we decrypt the authorization and get current loggedIn user
  const { authorization } = req.headers;
  const userId = authorization; // jwt decrypt...

  const userPermissionsConsult = userPermissions.find(
    (userPermission) => userPermission.userId === Number(userId)
  );
  if (!userPermissionsConsult) {
    return res.status(400).send({
      message: "User has no permissions to delete",
    });
  }

  if (!userPermissionsConsult.permissions.includes("delete")) {
    return res.status(400).send({
      message: "User has no permissions to delete",
    });
  }

  next();
};

const canUpdate = (req, res, next) => {
  // considering a scenario that we decrypt the authorization and get current loggedIn user
  const { authorization } = req.headers;
  const userId = authorization; // jwt decrypt...

  const userPermissionsConsult = userPermissions.find(
    (userPermission) => userPermission.userId === Number(userId)
  );
  if (!userPermissionsConsult) {
    return res.status(400).send({
      message: "User has no permissions to update",
    });
  }

  if (!userPermissionsConsult.permissions.includes("update")) {
    return res.status(400).send({
      message: "User has no permissions to update",
    });
  }

  next();
};

module.exports = {
  canDelete,
  canUpdate,
};
