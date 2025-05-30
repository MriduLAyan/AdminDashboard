import { motion } from 'framer-motion';
import Header from '../Components/Common/Header';
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react';
import StatCard from '../Components/Common/StatCard';
import DailyOrders from '../Components/Orders/DailyOrders';
import OrderDistribution from '../Components/Orders/OrderDistribution';
import OrdersTable from '../Components/Orders/OrdersTable';

const orderStats = {
  totalOrders: '1,234',
  pendingOrders: '56',
  completedOrders: '1,178',
  totalRevenue: '$98,765',
};

const ordersPage = () => {
  return (
    <div className="flex-1 relative z-10 overflow-auto">
      <Header title={'Oders'} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Orders"
            icon={ShoppingBag}
            value={orderStats.totalOrders}
            color="#6366F1"
          />
          <StatCard
            name="Pending Orders"
            icon={Clock}
            value={orderStats.pendingOrders}
            color="#10B981"
          />
          <StatCard
            name="Completed Orders"
            icon={CheckCircle}
            value={orderStats.completedOrders}
            color="#F59E0B"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={orderStats.totalRevenue}
            color="#EF4444"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrders />
          <OrderDistribution />
        </div>

        <OrdersTable/>
      </main>
    </div>
  );
};

export default ordersPage;
