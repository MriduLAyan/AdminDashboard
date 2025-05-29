import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

import { motion } from 'framer-motion';

const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 5500 },
];

const SalesTrendChart = () => {
  return (
     <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg font-medium mb-4 text-gray-100 pl-2">Sales Trend</h2>
    
          <div className="h-80">
            <ResponsiveContainer height={'100%'} width={'100%'}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                <XAxis dataKey={'month'} stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(31, 41, 55, 0.8)',
                    borderColor: '#4B5563',
                  }}
                  itemStyle={{ color: '#E5E7EB' }}
                />

                <Legend/>
                <Line
                  dataKey={'sales'}
                  type="monotone"
                  stroke="#6366F1"
                  strokeWidth={3}
                  
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
  )
}

export default SalesTrendChart