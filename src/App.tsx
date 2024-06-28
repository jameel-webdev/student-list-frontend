import Header from "./components/Header.component";
import Sidebar from "./components/Sidebar.component";
import Student from "./components/Student.component";

const App = () => {
  return (
    <div className="flex">
      <div className="w-[25%] hidden md:block">
        <Sidebar />
      </div>
      <div className="md:w-[75%] w-full">
        <Header />
        <Student />
      </div>
    </div>
  );
};

export default App;
