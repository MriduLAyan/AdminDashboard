import Header from '../Components/Common/Header';
import ConnectedAccounts from '../Components/Settings/ConnectedAccounts';
import DangerZone from '../Components/Settings/DangerZone';
import Notification from '../Components/Settings/Notification';
import Profile from '../Components/Settings/Profile';
import Security from '../Components/Settings/Security';

const SettingsPage = () => {
  return (
    <div className="flex=1 overflow-auto relative z-10 bg-gray-900 w-full">
      <Header title="Settings" />

      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <Profile />
        <Notification />
        <Security/>
        <ConnectedAccounts/>
        <DangerZone/>
      </main>
    </div>
  );
};

export default SettingsPage;
