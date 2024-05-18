"use client";
import React, { useState, useEffect, ReactNode } from "react";

interface TeamMember {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface TeamMemberDataFetcherProps {
  fetchFunction: () => Promise<{ data: TeamMember[] }>;
  processFunction: (data: TeamMember[]) => any[];
  children: (processedData: any[]) => ReactNode;
}

function TeamMemberDataFetcher({
  fetchFunction,
  processFunction,
  children,
}: TeamMemberDataFetcherProps) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchFunction()
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const processedData = processFunction(data.data);
        setData(processedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [fetchFunction, processFunction]);

  return <>{children(data)}</>;
}

export default TeamMemberDataFetcher;
