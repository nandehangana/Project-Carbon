const express = require("express");
const router = express.Router();
const initModels = require("../models/init-models");
const sequelise = require("../config/db");
const models = initModels(sequelise);
const { Sequelize } = require("sequelize");

router.get("/test", (req, res) => {
  models.Test.findAll()
    .then((rows) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      res.status(400).json({ message: "error", error: err });
    });
});

router.post("/create", (req, res) => {
  const data = {
    name: req.body.name,
    meta: req.body.meta,
  };

  models.Test.create(data)
    .then((_) => {
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      res.status(400).json({ message: "error", error: err });
    });
});

module.exports = router;
