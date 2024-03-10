

import { createContext, useContext, useState } from "react";
import data from "../data";
const AddedMemberContext = createContext({
  data: null,
  setValue: (value) => {},
});
export const useAdd = () => useContext(AddedMemberContext);

function AddedData({ children }) {
    const [addedMemberData, setAddedMember] = useState([]);
    const setAddedMemberData=(data)=>{
      setAddedMember(data)
    }
  const value = [ addedMemberData, setAddedMemberData ];
  return (
    <AddedMemberContext.Provider value={value}>{children}</AddedMemberContext.Provider>
  );
}

export default AddedData;


