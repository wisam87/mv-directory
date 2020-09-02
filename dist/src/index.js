"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const atolls_json_1 = __importDefault(require("../data/atolls.json"));
const islands_json_1 = __importDefault(require("../data/islands.json"));
class MaldivesLocation {
    getAtolls(withIslands = false, withUninhabitedIslands = false) {
        const atolllist = atolls_json_1.default;
        if (withIslands) {
            atolllist.forEach((atoll) => atoll.islands = this.getAtollIslands(atoll.code));
        }
        if (withUninhabitedIslands) {
            atolllist.forEach((atoll) => atoll.islands = this.getAtollIslands(atoll.code, false));
        }
        return atolllist;
    }
    getAtollIslands(atollCode, isInhabited = true, islandName = null) {
        let filtered = islands_json_1.default.filter((island) => island.atoll == atollCode);
        if (isInhabited) {
            filtered = filtered.filter((island) => island.flag_1 === "I");
        }
        if (islandName != null) {
            filtered = filtered.filter((island) => island.name === islandName);
        }
        return filtered;
    }
    getAllIslands() {
        const allislands = islands_json_1.default;
        return allislands;
    }
}
exports.default = MaldivesLocation;
//# sourceMappingURL=index.js.map