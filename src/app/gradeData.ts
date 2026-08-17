export interface GradeRow {
  japan: string;
  usa: string;
  french: string;
}

export const gradeTable: GradeRow[] = [
  { japan: "8級", usa: "VB", french: "3" },
  { japan: "7級", usa: "V0", french: "4" },
  { japan: "6級", usa: "V0〜V1", french: "4+" },
  { japan: "5級", usa: "V1〜V2", french: "5" },
  { japan: "4級", usa: "V2〜V3", french: "5+" },
  { japan: "3級", usa: "V3〜V4", french: "6a" },
  { japan: "2級", usa: "V4〜V5", french: "6a+" },
  { japan: "1級", usa: "V5〜V6", french: "6b+" },
  { japan: "初段", usa: "V6〜V7", french: "6c+" },
  { japan: "二段", usa: "V7〜V8", french: "7a" },
  { japan: "三段", usa: "V8〜V9", french: "7b" },
  { japan: "四段", usa: "V9〜V10", french: "7c" },
];
