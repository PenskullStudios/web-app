import { useAuth } from "@clerk/clerk-react";
import { emply } from "../../types/tstypes";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TooltipStyle = {
  background: "rgba(255, 255, 255, 0.4)",
  borderRadius: "10px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(200, 200, 200, 0.4)",
};

export default function Histogram() {
  const [data, setData] = useState<emply[]>([]);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        const req = await axios.get(
          `${import.meta.env.VITE_API_URL}/employee-workinghours`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              mode: "cors",
            },
          }
        );
        const data: emply[] = req.data;
        return setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [getToken]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={730} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip contentStyle={TooltipStyle} cursor={{ fill: "#f2f2f2" }} />
        <Bar name="Working Hours" dataKey="workingHours" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
