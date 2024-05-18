import { useEffect, useState } from "react";

type Name = {
  title: string;
  first: string;
  last: string;
};
type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type User = {
  name: Name;
  picture: Picture;
};

export default function useFetchUser() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://randomuser.me/api/?inc=name,picture&results=8"
      );
      const data = (await response.json()) as { results: User[] };
      console.log(data.results);
    };

    fetchUser();
  }, []);
}
