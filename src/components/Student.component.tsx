const Student = () => {
  return (
    <>
      <div className="bg-gray-300">
        <div className="flex justify-between items-center flex-wrap p-10 ">
          <h3 className="text-2xl text-black mb-4">
            <strong>Students List</strong>
          </h3>
          <div className="md:flex md:gap-x-4">
            <input
              type="text"
              placeholder="Search.."
              className="px-4 py-3 mb-4 w-full rounded-md outline-none md:mb-0"
            />
            <button className="bg-green-500 rounded-md text-white py-2 w-full">
              <strong>ADD NEW STUDENT</strong>
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Student;
