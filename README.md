## Maldives Atoll/Island Directory
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) 
![npm](https://img.shields.io/npm/v/mv-directory?style=plastic)
Using this client, user can fetch and filter Atolls and Islands.

### Installation
```sh
$ npm i mv-directory
```
### Usage
Import `MvDirectory` in your JavaScript or TypeScript application.
```javascript
import {MvDirectory} from 'mv-directory';
```
#### Example
```typescript
private mvdirectory = new MvDirectory();
```
```typescript
/**
* Fetch Atolls
* @param {boolean} withIslands - default false
* @param {boolean} withUninhabitedIslands - default false
*/
const atolls_with_islands = mvdirectory.getAtolls(true);
```
```typescript
/**
* Fetch Atoll Islands
* @param {string} atollCode
* @param {boolean} islandName - default undefined
*/
const atolls_with_islands = mvdirectory.getAtollIslands("HA");
```
```typescript
/**
* Fetch All Islands
*/
const atolls_with_islands = mvdirectory.getAllIslands();
```

Feel free to contribue.
