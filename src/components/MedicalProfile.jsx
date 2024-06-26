/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FaHeartbeat, FaThermometerHalf } from "react-icons/fa";
import { FaHeartCircleBolt } from "react-icons/fa6";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MedicalProfile = ({ vitalSigns }) => {
  const data = {
    labels: ['7AM', '11AM', '3PM', '7PM'],
    datasets: [
      {
        label: 'Heart Rate',
        data: [75, 80, 70, 85], // Example data, replace with actual data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="medical-profile shadow-md shadow-slate-400">
      <h3>Medical Profile</h3>
      <div className="flex justify-between gap-5">
        <div className="flex justify-between gap-4 mb-5 vital-sign">
          <div className="">
            <FaHeartbeat className="text-2xl"/>
          </div>
          <div className="">
            <h4>Heart Rate</h4>
            <p className="text-[#007bff] font-semibold text-lg">{vitalSigns.heartRate} bpm</p>
          </div>
        </div>
        <div className="flex justify-between gap-4 mb-5 vital-sign">
          <div className="">
            <FaThermometerHalf className="text-2xl"/>
          </div>
          <div className="">
            <h4>Body Temp</h4>
            <p className="text-[#007bff] font-semibold text-lg">{vitalSigns.bodyTemp} °C</p>
          </div>
        </div>
        <div className="flex justify-between gap-4 mb-5 vital-sign">
          <div className="">
            <FaHeartCircleBolt className="text-2xl"/>
          </div>
          <div className="">
            <h4>Blood</h4>
            <p className="text-[#007bff] font-semibold text-lg">{vitalSigns.blood}</p>
          </div>
        </div>
      </div>
      <div className="heart-rate-chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MedicalProfile;
