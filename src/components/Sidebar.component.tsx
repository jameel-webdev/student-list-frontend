const Sidebar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-full">
      <div className="flex gap-x-3 pt-10 px-4">
        <img
          src="https://via.placeholder.com/100"
          alt="profilepic"
          className="w-14 border rounded-full"
        />
        <div className="text-xl text-white">
          <h3>
            <strong>Yellow Owl</strong>
          </h3>
          <h6>Admin</h6>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
