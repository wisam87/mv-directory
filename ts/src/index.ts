import atolls from "../data/atolls.json";
import islands from "../data/islands.json";
// Types
import Island from "../types/Island";
import Atoll from "../types/Atoll";

export default class MvDirectory {
  getAtolls(withIslands = false, withUninhabitedIslands = false) {
    const atolllist: Atoll[] = atolls;

    if (withIslands) {
      atolllist.forEach((atoll) =>
        atoll.islands = this.getAtollIslands(atoll.code)
      );
      return true;
    }

    if (withUninhabitedIslands) {
      atolllist.forEach((atoll) =>
        atoll.islands = this.getAtollIslands(atoll.code, false)
      );
      return true;
    }

    return atolllist;
  }

  getAtoll(atollCode: string) {
    const atoll = atolls.find((atoll) => atoll.code === atollCode);
    return atoll;
  }

  getAtollIslands(
    atollCode: string,
    inhabitedOnly = true,
    islandName: string | null | undefined = null,
  ) {
    let filtered: Island[] = islands.filter((island) =>
      island.atoll == atollCode
    );

    if (inhabitedOnly) {
      filtered = filtered.filter((island) => island.flag_1 === "I");
    }

    if (islandName != null) {
      filtered = filtered.filter((island) => island.name === islandName);
    }

    return filtered;
  }

  getAtollwithIslands(atollCode: string, unInhabited = false) {
    const atolllist: Atoll[] = atolls;

    const filtered = atolllist.find((atoll) => atoll.code === atollCode);
    const islands = this.getAtollIslands(atollCode, unInhabited ? false : true);
    if (filtered) {
      filtered.islands = islands;
    }
    return filtered;
  }

  getAllIslands() {
    const allislands: Island[] = islands;
    return allislands;
  }
}
