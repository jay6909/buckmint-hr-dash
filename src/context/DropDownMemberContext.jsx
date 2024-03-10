

import { createContext, useContext, useState } from "react";
import data from "../data";
const DropDownMemberContext = createContext({
  data: null,
  setValue: (value) => {},
});
export const useDropDown = () => useContext(DropDownMemberContext);

function DropDown({ children }) {
    const [addedDropDown, setAddedDropDownMember] = useState(data.teamMembers);
    const setAddedDropDown=(data)=>{
      setAddedDropDownMember(data)
    }
  const value = [ addedDropDown, setAddedDropDown ];
  return (
    <DropDownMemberContext.Provider value={value}>{children}</DropDownMemberContext.Provider>
  );
}

export default DropDown;


