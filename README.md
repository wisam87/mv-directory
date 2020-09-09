# Directory of Maldives Atolls, Islands etc.

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) 
![npm](https://img.shields.io/npm/v/mv-directory?style=plastic)

Currenty supports:
- All Maldivian Atolls and Islands
- Full Country List.
- All Maldivian Registered Banks.

### Installation
```sh
$ npm install mv-directory
```
## Usage
Import `MvDirectory` in your JavaScript or TypeScript application.
```javascript
import MvDirectory from "mv-directory";
const directory = new MvDirectory();
```
#### Methods
```javascript

// Get All Atolls
directory.getAtolls(withIslands?: boolean, inhabitedIslandsOnly?: boolean);

// Get Specific Atoll
directory.getAtoll(atollCode: string, withIslands?: boolean, inhabitedIslandsOnly?: boolean);

// Islands of a specific Atoll
directory.getAtollIslands(atollCode: string, inhabitedOnly?: boolean);

// Specific Atoll with Islands
directory.getAtollwithIslands(atollCode: string, inhabitedOnly?: boolean);

// Get All Islands
directory.getAllIslands();

// Get specific Island by Name
directory.getIsland(name: string);

// Get list of inhabited Islands
directory.getInhabitedIslands();

// Get list of Countries
directory.getCountries();

// Get country by Code
directory.getCountryByCode(countryCode: string);

// Get country by Name
directory.getCountryByName(name: string);

// Get list of Banks
directory.getBanks();

// Get bank by Code
directory.getBankByCode(bankCode: string);

// Get bank by Name
directory.getBankByName(bankName: string);

```
> Data is up to date as of September 2020.

> Feel free to contribute.
> Whats next? Add Tests