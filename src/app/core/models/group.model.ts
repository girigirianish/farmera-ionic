export interface PigsInGroup {
  total: number;
  age: string;
}

export interface Group {
  groupId: string;
  startedDate: string;
  pigs: PigsInGroup;
}
