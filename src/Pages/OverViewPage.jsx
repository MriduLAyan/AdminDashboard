import React from 'react';
import Header from '../Components/Common/Header';
import { motion } from 'framer-motion';
import StatCard from '../Components/Common/StatCard';
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react';
import SalesOverViewChart from '../Components/Overview/SalesOverViewChart';
import CategoryDistributionChart from '../Components/Overview/CategoryDistributionChart';
import SalesChannelChart from '../Components/Overview/SalesChannelChart';

const OverViewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/*Stat*/}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$12,345"
            color="#6366F1"
          />
          <StatCard
            name="New users"
            icon={Users}
            value="$12,345"
            color="#8B5CF6"
          />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="$12,345"
            color="#EC4899"
          />
          <StatCard
            name="Conversion Rate"
            icon={BarChart2}
            value="$12,345"
            color="#10B981"
          />
        </motion.div>

        {/*Chart*/}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverViewChart/>
          <CategoryDistributionChart/>
          <SalesChannelChart/>
        </div>

      </main>
    </div>
  );
};

export default OverViewPage;
