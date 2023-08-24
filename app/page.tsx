"use client";

import { useEffect, useState } from "react";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

export default function Home() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsersData(data);
    }

    getData();
  }, []);

  console.log(usersData);

  return (
    <div className="container mx-auto p-4">
      <ul>
        {usersData.map((data: User) => (
          <li key={data.ip_address}>
            {data.first_name} {data.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
