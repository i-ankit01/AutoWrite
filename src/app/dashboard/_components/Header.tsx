import { Crown, Search } from "lucide-react";
import React from "react";

const Header = ({setSearchValue}:any) => {
  return (
    <div className="p-5 shadow-sm border-b">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 border p-2 w-1/2 items-center rounded-lg">
          <Search className="text-primary" />
          <input
            className="text-lg outline-none  w-full "
            type="text"
            placeholder="Search..."
            onChange={(event)=>(setSearchValue(event.target.value))}
          />
        </div>
        <div>
          <h2 className="ml-2 px-3 py-1 bg-primary text-white rounded-full flex items-center gap-3 cursor-pointer">
            <Crown className="w-5"/>
            Upgrade to Premium
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
