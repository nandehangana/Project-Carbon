# Project-Carbon

A carbon-credit marketplace

## Tech Stack 

## Installation

Install Ganache for local blockchain
```
Visit https://www.trufflesuite.com/ganache
``` 

Start Ganache and create an application workspace
```
Visit https://www.trufflesuite.com/tutorial
``` 
Install project dependencies
```
npm install
```


## API

Create a `dbconfig.json` file in the root folder and add the following 

- Using SQLITE for the moment

``` 

{
  "development": {
    "username": "root",
    "password": "password",
    "database": "project",
    "host": "database.db",
    "dialect": "sqlite",
    "logging": false
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "project",
    "host": "database.db",
    "dialect": "sqlite",
    "logging": false
  },
  "production": {
    "username": "root",
    "password": "password",
    "database": "project",
    "host": "database.db",
    "dialect": "sqlite",
    "logging": false
  }
}
```

## Compile contract

Compile and Deploy smart contract (located in contracts/) to Ganache
```
truffle compile

truffle migrate
```




## Other  Truffle commands 

Scaffolding contracts 

``` 
truffle create contract YourContractName # scaffold a contract

truffle create test YourTestName 

truffle compile
```


