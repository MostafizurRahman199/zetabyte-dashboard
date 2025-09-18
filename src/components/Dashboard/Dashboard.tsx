"use client";

import React from "react";
import { DashboardStatCard } from "./DashboardStatCard";
import { MiniBarChart } from "./MiniBarChart";
import { CityPieChart } from "./CityPieChart";
import { useFetch } from "@/hooks/useFetch";
import { User } from "@/types/user";

export const Dashboard: React.FC = () => {
  const { data: posts, loading: postsLoading, error: postsError } = useFetch<any[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const { data: users, loading: usersLoading, error: usersError } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const stats = [
    {
      title: "Total Users",
      value: usersLoading ? "..." : usersError ? "N/A" : users?.length || 0,
    },
    {
      title: "Total Posts",
      value: postsLoading ? "..." : postsError ? "N/A" : posts?.length || 0,
    },
    {
      title: "Active Sessions",
      value: "42",
    },
  ];

  const chartData = [
    { value: 50, label: "Mon" },
    { value: 80, label: "Tue" },
    { value: 30, label: "Wed" },
    { value: 60, label: "Thu" },
    { value: 90, label: "Fri" },
  ];

  return (
    <div className="w-full md:w-11/12 lg:w-10/12 mx-auto p-4 sm:p-6 min-h-screen bg-gray-900 text-yellow-400">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-400 mb-6 sm:mb-8">
        Welcome to Zettabyte mini dashboard 🎉
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {stats.map((stat, i) => (
          <DashboardStatCard key={i} title={stat.title} value={stat.value} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: MiniBarChart */}
        <MiniBarChart data={chartData} />

        {/* Right: CityPieChart */}
        {users && <CityPieChart users={users} />}
      </div>
    </div>
  );
};
