"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "developers",
      [
        {
          name: "Matias",
          email: "matias@codaisseur.com",
          password: "bf28dada5cbc7b3a3b8ec0bb45d63a891799ab42",
          github: "Matiasigarcia19991",
          website: "https://matias.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rein",
          email: "rein@codaisseur.com",
          password: "bf28dada5cbc7b3a3b8ec0bb45d63a891799ab42",
          github: "Reinoptland",
          website: "https://rein.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kelley",
          email: "kelley@codaisseur.com",
          password: "bf28dada5cbc7b3a3b8ec0bb45d63a891799ab42",
          github: "kelleyvanevert",
          website: "https://kelley.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("developers", null, {});
  }
};
