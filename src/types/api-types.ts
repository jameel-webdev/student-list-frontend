import { StudentData } from "./types";

export type FetchAllStudentData = {
  success: boolean;
  allUsers: StudentData[];
};
