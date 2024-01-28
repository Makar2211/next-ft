"use client";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
