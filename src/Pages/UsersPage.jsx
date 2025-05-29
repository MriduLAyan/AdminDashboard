import React from 'react';
import { UserCheck, UserIcon, UserPlus, UserX } from 'lucide-react';
import { motion } from 'framer-motion';

import Header from '../Components/Common/Header';
import StatCard from '../Components/Common/StatCard';
import UserTable from '../Components/Users/UserTable';
import UserGrothChart from '../Components/Users/UserGrothChart';
import UserActivityHeatmap from '../Components/Users/UserActivityHeatmap';
import UserDemoGraphicsChart from '../Components/Users/UserDemoGraphicsChart';

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* States */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={UserIcon}
            value="152,845"
            color="#6366F1"
          />
          <StatCard
            name="New users"
            icon={UserPlus}
            value="243"
            color="#8B5CF6"
          />
          <StatCard
            name="Total Products"
            icon={UserCheck}
            value="98,520"
            color="#EC4899"
          />
          <StatCard
            name="Conversion Rate"
            icon={UserX}
            value="2.4%"
            color="#10B981"
          />
        </motion.div>
        <UserTable />

        {/* Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrothChart />
          <UserActivityHeatmap />
          <UserDemoGraphicsChart />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
