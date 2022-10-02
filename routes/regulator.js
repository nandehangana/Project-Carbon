const express = require("express");
const router = express.Router();
const initModels = require("../models/init-models");
const sequelise = require("../config/db");
const models = initModels(sequelise);
const { Sequelize } = require("sequelize");

router.get("/creditrequests", (req, res) => {
  models.CreditRequests.findAll({
    include: [{ model: models.RegisteredMembers }],
  })
    .then((rows) => {
      let result = [];
      rows.forEach((r) => {
        result.push({
          memberid: r.memberid,
          companyname: r.registeredmember.companyname,
          wallet: r.registeredmember.walletaddress,
          amount: r.amount,
          status: r.status,
        });
      });
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json({ message: "error", error: err });
    });
});

module.exports = router;
