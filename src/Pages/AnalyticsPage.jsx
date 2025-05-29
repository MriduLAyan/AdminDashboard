import Header from '../Components/Common/Header';

import OverviewCart from '../Components/Analytics/OverviewCart';
import RevenueChart from '../Components/Analytics/RevenueChart';

import ChannelPerformance from '../Components/Analytics/ChannelPerformance';
import ProductPerformance from '../Components/Analytics/ProductPerformance';
import UserRetention from '../Components/Analytics/UserRetention';
import CustomerSegmentation from '../Components/Analytics/CustomerSegmentation';
import AIPoweredInsights from '../Components/Analytics/AIPoweredInsights';

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Analytics Dashboard" />

      <main className='max-w-7xl mx-auto px-6 py-4 lg:px-8'>
        <OverviewCart/>
        <RevenueChart/>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <ChannelPerformance/>
          <ProductPerformance/>
          <UserRetention/>
          <CustomerSegmentation/>
        </div>

        <div>
          <AIPoweredInsights/>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;
