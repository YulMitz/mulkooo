import Sidebar from "./Sidebar";

function Home() {
    return (
      <div className="flex flex-grow min-h-0 m-2">
        <Sidebar />
        <div className="flex flex-col grow justify-center items-center border-l overflow-hidden m-2">
        </div>
      </div>
    );
  }
  
  export default Home;
  