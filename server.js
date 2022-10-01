const express = require("express");
const cors = require("cors");
const sequelise = require("./config/db");
const apiRouter = require("./routes/api_v1");

const Web3 = require("web3");
const fs = require("fs");

const artifactJson = "build/contracts/CarbonCreditToken.json";
const artifact = JSON.parse(fs.readFileSync(artifactJson));
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var CarbonCreditToken;
var accounts;
var networkId;
var contractAddress;

const PORT = process.env.PORT || 3001;
const HOST = "0.0.0.0";

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Welcome the API is running");
});

app.get("/api/balance", async (req, res) => {
  const val = await CarbonCreditToken.methods.totalSupply().call();
  res.send({ balance: val });
});

/*app.get("/api/mint", async (req, res) => {
    const proc = await CarbonCreditToken.methods
        .mint( 10000)
        .call();
    const val = await CarbonCreditToken.methods.totalSupply().call();
    res.send({balance: val});
});*/

sequelise
  .authenticate()
  .then(async () => {
    console.log("Database connected...");
    accounts = await web3.eth.getAccounts();
    networkId = await web3.eth.net.getId();
    contractAddress = artifact.networks[networkId].address;

    // console.log(`address ${contractAddress}`);
    CarbonCreditToken = new web3.eth.Contract(artifact.abi, contractAddress, {
      from: accounts[0],
    });
  })
  .catch((err) => {
    console.log("Error connecting to database: " + err);
  });

sequelise
  .sync()
  .then(() => {
    app.listen(PORT, HOST);
    console.log(`App running on http://${HOST}:${PORT}`);
  })
  .catch((err) => console.log("Error synching models: " + err));

module.exports = app;
