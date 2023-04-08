import React, { useEffect, useState } from "react";
import MyTable from "../components/MyTable";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firebase";
import SideBar from "../components/SideBar";

const ActiveUsers = () => {
  //getting users (Firestore) documents
  const query = collection(db, "users");
  const [docs, loading, error] = useCollectionData(query);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (docs) {
      setUsers(docs);
      console.log(docs);
    }
  }, [docs]);
  return (
    <div>
      <SideBar />
      <MyTable users={users} />
    </div>
  );
};

export default ActiveUsers;
