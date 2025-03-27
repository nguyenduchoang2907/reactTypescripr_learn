import BlogCard from '../components/DashBoard/BlogCards';
import DailyActivity from '../components/DashBoard/DailyActivity';
import NewCustomers from '../components/DashBoard/NewCustomer';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-30">
      <div className="lg:col-span-4 col-span-12">
        <div className="grid grid-cols-12 h-full items-stretch">
          <div className="col-span-12 mb-30">
            <NewCustomers />
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 col-span-12 flex">
        <DailyActivity />
        <div className="col-span-12">
          <BlogCard 
            title="Sample Title" 
            description="This is a sample description." 
            link="https://example.com" 
          />
        </div>

      </div>
    </div>
  );
};
export default Dashboard;

