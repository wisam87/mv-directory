## Maldives Atoll/Island Directory
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) 
![npm](https://img.shields.io/npm/v/mv-directory?style=plastic)

Using this, users can fetch and filter Maldives Atolls and Islands JSON.

### Installation
```sh
$ npm i mv-directory
```
### Usage
Import `MvDirectory` in your JavaScript or TypeScript application.
```javascript
import { MvDirectory } from 'mv-directory';
```
#### Examples
```typescript
private mvdirectory = new MvDirectory();
```
```typescript
/**
* Fetch Atolls
* @param {boolean} withIslands [false] - optional
* @param {boolean} withUninhabitedIslands - [false] - optional
*/

const atolls_with_islands = mvdirectory.getAtolls(true);
```
```typescript
/**
* Fetch Atoll Islands
* @param {string} atollCode
* @param {boolean} islandName - [undefined] - optional
*/

const atolls_with_islands = mvdirectory.getAtollIslands("HA");
```
```typescript
/**
* Fetch All Islands
*/

const islands = mvdirectory.getAllIslands();
```

Feel free to contribue.
