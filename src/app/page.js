"use client";

import { getUsers } from "@/services/getUsers";
import {useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const data = await getUsers();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
}, []);

return (
  <div>
    List of users {users.length}
    {users.map((user) => (
      <div key={user.id} className="text-sm text-sky-400">
        {user.name}
        </div>
    ))}
  </div>
);
}