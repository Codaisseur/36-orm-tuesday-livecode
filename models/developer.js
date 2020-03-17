"use strict";
module.exports = (sequelize, DataTypes) => {
  const developer = sequelize.define(
    "developer",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      github: DataTypes.STRING,
      website: DataTypes.STRING
    },
    {}
  );
  developer.associate = function(models) {
    // associations can be defined here
  };
  return developer;
};
