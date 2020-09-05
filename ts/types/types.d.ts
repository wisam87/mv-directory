export type Atoll = {
  code: string;
  name: string;
  alt_name?: string;
  islands?: Island[];
};

export type Island = {
  atoll: string;
  type: string;
  name: string;
  alt_name: string;
  lat?: number | string;
  long?: number | string;
  flag_1?: string | null | undefined;
  flag_2?: string | null | undefined;
};

export type Bank = {
  name: string;
  code: string;
};

export type Country = {
  name: string;
  code: string;
};
