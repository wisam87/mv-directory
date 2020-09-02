interface Atoll {
    code: string;
    name: string;
    alt_name?: string;
    islands?: Island[];
}
interface Island {
    atoll: string;
    type: string;
    name: string;
    alt_name: string;
    lat?: number | string;
    long?: number | string;
    flag_1?: string | null | undefined;
    flag_2?: string | null | undefined;
}
export default class MaldivesLocation {
    getAtolls(withIslands?: boolean, withUninhabitedIslands?: boolean): Atoll[];
    getAtollIslands(atollCode: string, isInhabited?: boolean, islandName?: string | null | undefined): ({
        atoll: string;
        type: string;
        name: string;
        alt_name: string;
        lat: string;
        lon: string;
        flag_1: string;
        flag_2: null;
    } | {
        atoll: string;
        type: string;
        name: string;
        alt_name: string;
        lat: string;
        lon: string;
        flag_1: null;
        flag_2: null;
    } | {
        atoll: string;
        type: string;
        name: string;
        alt_name: string;
        lat: string;
        lon: string;
        flag_1: string;
        flag_2: string;
    })[];
    getAllIslands(): Island[];
}
export {};
