const Header = () => {
  return (
    <div className="px-5 py-4 md:p-5 bg-gradient-to-r from-lime-300 to-blue-400 md:block flex justify-between items-center">
      <strong className="text-xl text-white">Student</strong>
      <div className="flex gap-x-4 md:hidden">
        <div className="text-xl text-white">
          <h3>
            <strong>Yellow Owl</strong>
          </h3>
          <h6 className="text-right">Admin</h6>
        </div>
        <img
          src="https://via.placeholder.com/100"
          alt="profilepic"
          className="w-14 border rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
