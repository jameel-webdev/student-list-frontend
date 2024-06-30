import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header.component";
import Sidebar from "./components/Sidebar.component";
import StudentComponent from "./components/Student.component";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <div className="flex">
      <div className="w-[20%] hidden md:block">
        <Sidebar />
      </div>
      <div className="md:w-[80%] w-full">
        <Header />

        <QueryClientProvider client={queryClient}>
          <StudentComponent />
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default App;
