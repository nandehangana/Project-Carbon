const express = require("express");
const router = express.Router();
const initModels = require("../models/init-models");
const sequelise = require("../config/db");
const models = initModels(sequelise);
const { Sequelize } = require("sequelize");
const statuses = require("../utils/statuses");

router.post("/register", (req, res) => {
  const data = {
    companyname: req.body.companyname,
    walletaddress: req.body.walletaddress,
  };

  models.RegisteredMembers.create(data)
    .then((data) => {
      console.log(data.dataValues.pk);
      res
        .status(200)
        .json({ message: "success", memberid: data.dataValues.pk });
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});

router.post("/requestcredit", (req, res) => {
  const data = {
    memberid: req.body.memberid,
    // address: req.body.address,
    amount: req.body.amount,
    status: statuses.PENDING,
  };

  models.CreditRequests.create(data)
    .then((_) => {
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      res.status(400).json({ message: "error", error: err });
    });
});

router.post("/myrequests", (req, res) => {
  models.CreditRequests.findAll({
    where:{
      memberid: req.body.memberid
    },
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
