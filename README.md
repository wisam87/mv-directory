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
### Usage
Import `MvDirectory` in your JavaScript or TypeScript application.
```javascript
import MvDirectory from "mv-directory";
const mvdirectory = new MvDirectory();
```
Example: Fetch All Atolls. ( optional with Island )
```typescript
/**
* Fetch Atolls
* @param {boolean} withIslands [false] - optional
* @param {boolean} withUninhabitedIslands - [false] - optional
*/
const atolls_with_islands = mvdirectory.getAtolls(true);
```
Some Other Examples
```typescript
const atoll = mvdirectory.getAtoll("HA");
const bank = mvdirectory.getBankByCode("BML");
```

> Feel free to contribute.