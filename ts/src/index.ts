import atolls from "../data/atolls.json";
import islands from "../data/islands.json";
import Island from "../types/Island";
import Atoll from "../types/Atoll";

export default class MvDirectory {
  getAtolls(withIslands = false, withUninhabitedIslands = false) {
    const atolllist: Atoll[] = atolls;

    if (withIslands) {
      atolllist.forEach((atoll) =>
        atoll.islands = this.getAtollIslands(atoll.code)
      );
    }

    if (withUninhabitedIslands) {
      atolllist.forEach((atoll) =>
        atoll.islands = this.getAtollIslands(atoll.code, false)
      );
    }

    return atolllist;
  }

  getAtollIslands(
    atollCode: string,
    isInhabited = true,
    islandName: string | null | undefined = null,
  ) {
    let filtered = islands.filter((island) => island.atoll == atollCode);

    if (isInhabited) {
      filtered = filtered.filter((island) => island.flag_1 === "I");
    }

    if (islandName != null) {
      filtered = filtered.filter((island) => island.name === islandName);
    }

    return filtered;
  }

  getAllIslands() {
    const allislands: Island[] = islands;
    return allislands;
  }
}
