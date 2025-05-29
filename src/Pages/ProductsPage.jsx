import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Common/Header';
import StatCard from '../Components/Common/StatCard';
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react';
import ProductTable from '../Components/Products/ProductTable';
import SalesTrendChart from '../Components/Products/SalesTrendChart';
import CategoryDistributionChart from '../Components/Overview/CategoryDistributionChart';

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

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
            icon={Package}
            value="$12,34"
            color="#6366F1"
          />
          <StatCard
            name="New users"
            icon={TrendingUp}
            value="$89"
            color="#8B5CF6"
          />
          <StatCard
            name="Total Products"
            icon={AlertTriangle}
            value="$23"
            color="#EC4899"
          />
          <StatCard
            name="Conversion Rate"
            icon={DollarSign}
            value="$543,210"
            color="#10B981"
          />
        </motion.div>
        <ProductTable />

        {/* Charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
