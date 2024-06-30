import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { StudentData } from "../types/types";

interface StudentTableProps {
  students: StudentData[];
}

const Table: React.FC<StudentTableProps> = ({ students }) => {
  return (
    <div className="overflow-x-auto">
      <table className="mb-10 min-w-full bg-white border border-gray-300 rounded-md">
        <thead>
          <tr>
            <th className="px-4 py-3 border-b text-center">NAME</th>
            <th className="px-4 py-3 border-b text-center">EMAIL</th>
            <th className="px-4 py-3 border-b text-center">PHONE</th>
            <th className="px-4 py-3 border-b text-center">ENROLL NUMBER</th>
            <th className="px-4 py-3 border-b text-center">
              DATE OF ADMISSION
            </th>
            <th className="px-4 py-2 border-b text-center">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-3 md:flex items-center justify-center hidden">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <span>{student.name}</span>
              </td>
              <td className="px-4 py-3 text-center md:hidden">
                <span>{student.name}</span>
              </td>
              <td className="px-4 py-3 text-center">{student.email}</td>
              <td className="px-4 py-3 text-center">{student.phoneNumber}</td>
              <td className="px-4 py-3 text-center">
                {student.enrollmentNumber}
              </td>
              <td className="px-4 py-3 text-center">
                {convertDateString(student.dateOfAdmission)}
              </td>
              <td className="px-4 py-3 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

function convertDateString(dateString: string) {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // getUTCMonth returns 0-indexed month
  const year = date.getUTCFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}-${formattedMonth}-${year}`;
}
