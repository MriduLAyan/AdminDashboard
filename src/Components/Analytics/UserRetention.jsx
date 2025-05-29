import {
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';

const userRetentionData = [
  { name: 'Week1', retention: 100 },
  { name: 'Week2', retention: 75 },
  { name: 'Week3', retention: 60 },
  { name: 'Week4', retention: 50 },
  { name: 'Week5', retention: 45 },
  { name: 'Week6', retention: 40 },
  { name: 'Week7', retention: 38 },
  { name: 'Week8', retention: 35 },
];

const UserRetention = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100 pl-6 mt-2">
        User Groth
      </h2>

      <div className="h-80">
        <ResponsiveContainer height={'100%'} width={'100%'}>
          <LineChart data={userRetentionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={'name'} stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563',
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />

            <Legend />
            <Line
              dataKey={'retention'}
              type="monotone"
              stroke="#6366F1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserRetention;
