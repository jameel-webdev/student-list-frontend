const Sidebar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-violet-500 h-full">
      <div className="flex gap-x-2 pt-10 px-4">
        <img
          src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"
          alt="profilepic"
          className="w-[54px] border rounded-full"
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
