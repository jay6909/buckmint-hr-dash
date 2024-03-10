import { createContext, useContext, useState } from "react";
import data from "../data";
const MemberDataContext = createContext({
  data: null,
  setValue: (value) => {},
});
export const useMember = () => useContext(MemberDataContext);

function Data({ children }) {
  const [memberData, setUseMemberData] = useState(data.teamMembers);
  
  const setMemberData = (data) => {
    setUseMemberData(data);
  };

  const value = [ memberData, setMemberData ];
  return (
    <MemberDataContext.Provider value={value}>{children}</MemberDataContext.Provider>
  );
}

export default Data;
