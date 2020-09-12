import Island from "./Island";

export default interface Atoll {
  code: string;
  name: string;
  alt_name?: string;
  islands?: Island[];
}
