
function Sidebar() {
    return (
      <div className="flex flex-col w-[350px] m-2 border-2">
        {/* Profile/Editting Section */}
        <div className="flex p-2 border-b w-full min-h-20 h-[12%] m-2">
        </div>
  
        {/* Button Section */}
        <div className="flex border-b w-full h-16 gap-2 m-2">
        </div>
  
        {/* Matching/Message Section */}
        <div className="relative overflow-hidden border-b w-full h-full m-2">
          {/* Matching Section */}
          <div className="absolute flex flex-col w-full h-full justify-center items-center cursor-default m-2">
          </div>
  
          {/* Message Section */}
          <div className="flex relative bg-white w-full h-full z-5 m-2">
            {/* Content of the sliding div */}
            <div className="relative w-full h-600 bg-shiro shadow-inner shadow-lg overflow-x-hidden overflow-y-scroll no-scrollbar m-2">
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;