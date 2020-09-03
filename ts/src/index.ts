import atolls from "../data/atolls.json";
import islands from "../data/islands.json";
import countries from "../data/countries.json";
import banks from "../data/banks.json";
// Types
import Island from "../types/Island";
import Atoll from "../types/Atoll";
import Bank from "../types/Bank";
import Country from "../types/Country";

export default class MvDirectory {
  private _filterIslands(array: Island[], field: string, code: string) {
    const data: Island[] = array.filter((item) => item[field] === code);
    return data;
  }

  private _filterAtolls(array: Atoll[], field: string, code: string) {
    const data: Atoll[] = array.filter((item) => item[field] === code);
    return data;
  }

  getAtolls(withIslands = false, inhabitedIslandsOnly = false): Atoll[] {
    const atolllist: Atoll[] = atolls;

    if (withIslands) {
      atolllist.forEach((atoll) =>
        atoll.islands = this.getAtollIslands(atoll.code)
      );
    }

    if (inhabitedIslandsOnly) {
      atolllist.forEach((atoll) =>
        atoll.islands = this.getAtollIslands(atoll.code, true)
      );
    }

    return atolllist;
  }

  getAtoll(
    atollCode: string,
    withIslands = false,
    inhabitedIslandsOnly = false,
  ): Atoll {
    if (withIslands) {
      const atoll = this.getAtollwithIslands(atollCode, inhabitedIslandsOnly);
      return atoll;
    }

    const atoll = atolls.find((atoll) => atoll.code === atollCode);

    return atoll;
  }

  getAtollIslands(
    atollCode: string,
    inhabitedOnly = false,
  ): Island[] {
    let data: Island[] = this._filterIslands(islands, "atoll", atollCode);

    if (inhabitedOnly) {
      data = this._filterIslands(data, "flag_1", "I");
    }

    return data;
  }

  getAtollwithIslands(atollCode: string, inhabitedOnly = false): Atoll {
    const atolllist: Atoll[] = atolls;

    const filtered = atolllist.find((atoll) => atoll.code === atollCode);
    const islands = this.getAtollIslands(atollCode, inhabitedOnly);
    if (filtered) {
      filtered.islands = islands;
    }
    return filtered;
  }

  getAllIslands(): Island[] {
    const data: Island[] = islands;
    return data;
  }

  getIsland(name: string): Island {
    const island = islands.find((item) => item.name === name);
    return island;
  }

  getInhabitedIslands(): Island[] {
    const data: Island[] = this._filterIslands(islands, "flag_1", "I");
    return data;
  }

  getCountries(): Country[] {
    const data: Country[] = countries;
    return data;
  }

  getCountryByCode(countryCode: string): Country {
    const country = countries.find((country) => country.code === countryCode);
    return country;
  }

  getCountryByName(name: string): Country {
    const country = countries.find((country) => country.name === name);
    return country;
  }

  getBanks(): Bank[] {
    const data: Bank[] = banks;
    return data;
  }

  getBankByCode(bankCode: string): Bank {
    const bank = banks.find((bank) => bank.code === bankCode);
    return bank;
  }

  getBankByName(bankName: string): Bank {
    const bank = banks.find((bank) => bank.name === bankName);
    return bank;
  }
}
