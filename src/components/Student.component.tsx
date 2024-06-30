import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchStudents } from "../apis/student.api";
import { StudentData } from "../types/types";
import AddStudentModal from "./Modal.component";
import Table from "./Table.component";

const StudentComponent: React.FC = () => {
  const [students, setStudents] = useState<StudentData[]>([]);
  const [showModal, setShowModal] = useState(false);
  // const queryClient = useQueryClient();

  // const mutation = useMutation(newStudentApi, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["studentsData"]);
  //     setShowModal(false);
  //   },
  //   onError: (error: Error) => {
  //     // Handle error
  //     console.error("Mutation error:", error);
  //   },
  // });

  const addStudent = (student: StudentData) => {
    console.log(student);
  };
  const { data, error, isLoading } = useQuery({
    queryFn: fetchStudents,
    queryKey: ["studentsData"],
  });

  useEffect(() => {
    if (data && data.allUsers) {
      setStudents(data?.allUsers);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading students</div>;

  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);
  // console.log(students);
  return (
    <div className="bg-gray-300">
      <div className="flex justify-between items-center flex-wrap py-10 px-6">
        <h3 className="text-2xl text-black mb-4">
          <strong>Students Details</strong>
        </h3>
        <div className="md:flex md:gap-x-4">
          <input
            type="text"
            placeholder="Search here"
            className="px-4 py-3 mb-4 w-full rounded-md outline-none md:mb-0 placeholder:text-xl"
          />
          <button
            className="bg-green-500 rounded-md text-white py-2 w-full"
            onClick={showModalHandler}
          >
            <strong>ADD NEW STUDENT</strong>
          </button>
        </div>
      </div>
      <div className="mx-6">
        {students && <Table students={students} />}
        {showModal && (
          <AddStudentModal
            closeModal={closeModalHandler}
            addStudent={addStudent}
          />
        )}
      </div>
    </div>
  );
};

export default StudentComponent;
