/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faThermometerHalf, faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons';
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
    <div className="medical-profile">
      <h3>Medical Profile</h3>
      <div className="vital-signs">
        <div className="vital-sign">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faHeartbeat} size="2x" />
          </div>
          <div className="info">
            <h4>Heart Rate</h4>
            <p>{vitalSigns.heartRate} bpm</p>
          </div>
        </div>
        <div className="vital-sign">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faThermometerHalf} size="2x" />
          </div>
          <div className="info">
            <h4>Body Temp</h4>
            <p>{vitalSigns.bodyTemp} °C</p>
          </div>
        </div>
        <div className="vital-sign">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faHeartCircleBolt} size="2x" />
          </div>
          <div className="info">
            <h4>Blood</h4>
            <p>{vitalSigns.blood}</p>
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
