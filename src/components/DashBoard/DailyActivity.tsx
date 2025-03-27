import { Link } from "react-router";
import { Timeline, Typography } from "antd";

const { Text } = Typography;

const DailyActivity = () => {
  const ActivitySteps = [
    {
      Time: "09:46",
      action: "Payment received from John Doe of $385.90",
      color: "blue",
    },
    {
      Time: "09:46",
      action: "New sale recorded",
      id: "#ML-3467",
      color: "orange",
    },
    {
      Time: "09:46",
      action: "Payment was made of $64.95 to Michael",
      color: "orange",
    },
    {
      Time: "09:46",
      action: "New sale recorded",
      id: "#ML-3467",
      color: "purple",
    },
    {
      Time: "09:46",
      action: "Project meeting",
      color: "red",
    },
    {
      Time: "09:46",
      action: "Payment received from John Doe of $385.90",
      color: "blue",
    },
  ];

  return (
    <div className="rounded-xl shadow-md bg-white p-6 relative w-full break-words">
      <h5 className="card-title mb-6">Daily activities</h5>
      <Timeline>
        {ActivitySteps.map((item, index) => (
          <Timeline.Item key={index} color={item.color}>
            <div className="flex gap-4 min-h-16">
              <div>
                <Text>{item.Time}</Text>
              </div>
              <div>
                <Text className="text-dark">{item.action}</Text>
                {item.id && (
                  <Link to="#" className="text-blue-700">
                    {item.id}
                  </Link>
                )}
              </div>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default DailyActivity;
