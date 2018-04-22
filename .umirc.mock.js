const mock = {
  "GET /api/v1/user": { users: [1, 2] }
};
require("fs")
  .readdirSync(require("path").join(__dirname + "/src/mock"))
  .forEach(function(file) {
    console.log(file)
    Object.assign(mock, require("./src/mock/" + file));
  });
module.exports = mock;
