export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
  const data = res.json();
  if (res.ok) {
    return data;
  }
  return [];
}

export default async function Home() {
  const usersData = await getData();

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
