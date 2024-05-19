import { teams } from "@/utils/Teams";
import { useEffect, useState } from "react";

interface TeamMember {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  occupation: string;
  description: string;
}

const LIST_LOCAL_STORAGE_USER = "LIST_USER";

export default function TeamMemberDataFetcher() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const storeUserList = localStorage.getItem(LIST_LOCAL_STORAGE_USER);

        let result: TeamMember[];
        if (storeUserList && storeUserList.length > 0) {
          const parsedData: TeamMember[] = JSON.parse(storeUserList);
          result = parsedData;
        } else {
          const response = await fetch("https://reqres.in/api/users?page=1");

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = (await response.json()) as { data: TeamMember[] };
          const arr1 = data.data;
          const arr2 = teams;
          let arr3: any = [];

          for (let i = 0; i < arr1.length && i < arr2.length; i++) {
            const mergedObj = { ...arr1[i], ...arr2[i] };
            arr3.push(mergedObj);
          }

          console.log(arr3);
          setTeamMembers(arr3);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFunction();
  }, []);

  return teamMembers;
}
