import React from "react";
import SearchBar from "../searchBar/SearchBar";
import UserMenu from "../userMenu/userMenu";

export default function Nav() {
  return (
    <div className="flex items-center justify-end px-10 pt-8 space-x-2 bg-white dark:bg-black">
      <SearchBar />
      <UserMenu />
    </div>
  );
}
