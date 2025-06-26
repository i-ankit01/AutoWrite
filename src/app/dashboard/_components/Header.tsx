import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 border p-2 w-1/2 items-center">
          <Search />
          <input
            className="text-lg outline-none  w-full "
            type="text"
            placeholder="Search..."
          />
        </div>
        <div>
          <h2 className="ml-2 px-3 py-1 bg-primary text-white rounded-full">
            Upgrade to Premium
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
