import React from "react";
import "../index.css";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

function DropdownProfile() {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="flex flex-col text-white-200 dropdownprofile">
      <ul className="flex flex-col gap-4 cursor-pointer">
        <li>Manage Profile</li>
        <li>Account</li>
        <li>Help Center</li>
        <li onClick={handleSignOut}>Sign out</li>
      </ul>
    </div>
  );
}

export default DropdownProfile;
