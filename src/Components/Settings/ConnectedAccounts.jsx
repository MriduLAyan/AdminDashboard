import { useState } from 'react';
import SettingsSection from './SettingsSection';
import { HelpCircle, Plus } from 'lucide-react';

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAcconts] = useState([
    {
      id: 1,
      name: 'Google',
      connected: true,
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0-oFN7cN_YAS4wORn4gnjtXPkomboMr7kYuM2qmPQVg4tqxA6f_MHVg&s',
    },
    {
      id: 2,
      name: 'Facebook',
      connected: false,
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPgUgKk6xlvokMEjWn4_xcVWhNGjD04la8g50hu78mzpIL_ja1BXMH48&s',
    },
    {
      id: 3,
      name: 'Twitter',
      connected: true,
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45sEkyGALdwdqJ_Tct9-XoAzHsa_71oSoNQ&s',
    },
  ]);
  return (
    <SettingsSection icon={HelpCircle} title={'Connected Accounts'}>
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between py-3"
        >
          <div className="flex gap-1">
            <img
              src={account.icon}
              alt="Social Img"
              className="size-6 boject-cover rounded-full mr-2"
            />
            <span className="text-gray-300"> {account.name} </span>
          </div>

          <button
            className={`px-3 py-1 rounded ${
              account.connected
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-gray-600 hover:bg-gray-700'
            }`}
            onClick={() => {
              setConnectedAcconts(
                connectedAccounts.map((acc) => {
                  if (acc.id === account.id) {
                    return {
                      ...acc,
                      connected: !acc.connected,
                    };
                  }
                  return acc;
                })
              );
            }}
          >
            {account.connected ? 'Connected' : 'Connect'}
          </button>
        </div>
      ))}

      <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200">
        <Plus size={18} className="mr-2" /> Add Account
      </button>
    </SettingsSection>
  );
};

export default ConnectedAccounts;
