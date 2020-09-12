export default interface Island {
  atoll: string;
  type: string;
  name: string;
  alt_name: string;
  lat?: number | string;
  long?: number | string;
  flag_1?: string | null | undefined;
  flag_2?: string | null | undefined;
}
