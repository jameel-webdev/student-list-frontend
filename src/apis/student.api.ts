import axios from "axios";
import { StudentData } from "../types/types";
import { FetchAllStudentData } from "../types/api-types";

const server = "";

export const fetchStudents = async (): Promise<FetchAllStudentData> => {
  try {
    const res = await axios.get<FetchAllStudentData>(
      `${server}/api/student/all`
    );
    return res.data;
  } catch (error) {
    throw new Error(`Error fetching students: ${error.message}`);
  }
};

export const newStudentApi = async (
  studentData: StudentData
): Promise<StudentData> => {
  try {
    const res = await axios.post<StudentData>(
      `${server}/api/student/new`,
      studentData
    );
    return res.data;
  } catch (error) {
    throw new Error(`Error creating new student: ${error.message}`);
  }
};

export const editStudentApi = async (
  studentData: StudentData
): Promise<StudentData> => {
  try {
    const res = await axios.put<StudentData>(
      `${server}/api/student/${studentData.id}`,
      studentData
    );
    return res.data;
  } catch (error) {
    // Handle error
    throw new Error(`Error editing student: ${error.message}`);
  }
};

export const deleteStudentApi = async (id: string): Promise<void> => {
  try {
    const res = await axios.delete<void>(`${server}/api/student/${id}`);
    return res.data;
  } catch (error) {
    // Handle error
    throw new Error(`Error deleting student: ${error.message}`);
  }
};
