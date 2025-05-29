import { motion } from 'framer-motion';
import { img } from 'framer-motion/client';
import { Edit, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';

const PRODUCTS_DATA = [
  {
    id: 1,
    img: (
      <img
        src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
        alt="prduct img"
        className="size-10 rounded-full"
      />
    ),
    name: 'Wireless Earbuds',
    category: 'Electronics',
    price: 59.99,
    stoke: 143,
    sales: 1200,
  },
  {
    id: 2,
    img: (
      <img
        src="https://images.unsplash.com/photo-1620109176813-e91290f6c795?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGVhdGhlciUyMFdhbGxldHxlbnwwfHwwfHx8MA%3D%3D"
        alt="prduct img"
        className="size-10 rounded-full"
      />
    ),
    name: 'Leather Wallet',
    category: 'Accessories',
    price: 39.99,
    stoke: 89,
    sales: 800,
  },
  {
    id: 3,
    img: (
      <img
        src="https://images.unsplash.com/photo-1696688713460-de12ac76ebc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fFNtYXJ0JTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D"
        alt="prduct img"
        className="size-10 rounded-full"
      />
    ),
    name: 'Smart Watch',
    category: 'Electronics',
    price: 199.99,
    stoke: 56,
    sales: 650,
  },
  {
    id: 4,
    img: (
      <img
        src="https://plus.unsplash.com/premium_photo-1664536968460-738ba488545e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fFlvZ2ElMjBNYXR8ZW58MHx8MHx8fDA%3D"
        alt="prduct img"
        className="size-10 rounded-full"
      />
    ),
    name: 'Yoga Mat',
    category: 'Fitness',
    price: 29.99,
    stoke: 210,
    sales: 950,
  },
  {
    id: 5,
    img: (
      <img
        src="https://images.unsplash.com/photo-1713533856687-663348b3ec8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fENvZmZlZSUyME1ha2VyfGVufDB8fDB8fHww"
        alt="prduct img"
        className="size-10 rounded-full"
      />
    ),
    name: 'Coffee Maker',
    category: 'Home',
    price: 79.99,
    stoke: 78,
    sales: 720,
  },
];

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCTS_DATA.filter(
      (product) =>
        product.name.toLocaleLowerCase().includes(term) ||
        product.category.toLocaleLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>

        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                name
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                category
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                price
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                stock
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                sales
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  {product.img}
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300"> {product.stoke} </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300"> {product.sales} </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
                    <Edit size={18}/>
                  </button>
                  <button className='text-red-400 hover:text-red-300'>
                    <Trash2 size={18}/>
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductTable;
