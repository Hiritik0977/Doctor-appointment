import React from 'react';

const Cardio = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div style={{ backgroundColor: 'grey', padding: '10px', borderRadius: '8px', color: 'white' }}>
        <h1 className="text-2xl font-bold mb-2 text-center">Hover for Cardiology Symptoms</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="fever-tooltip">
            <h2 className="text-lg font-semibold mb-3 mx-5">Common symptoms include:</h2>
            <ul className="list-disc pl-4 mx-5">
              <li>Chest Pain or Discomfort</li>
              <li>Shortness of Breath</li>
              <li>Dizziness or Lightheadedness</li>
              <li>Swelling</li>
              <li>Irregular Heartbeat:</li>
              <li>Nausea or Indigestion</li>
              <li>Cold Sweats</li>
              <li>Cyanosis</li>
            </ul>
          </div>
          <div className="fever-tooltip">
            <h2 className="text-lg font-semibold mb-1">Less common symptoms:</h2>
            <ul className="list-disc pl-4">
              <li>Syncope </li>
              <li>Coughing</li>
              <li>Peripheral Edema</li>
              <li>Paleness</li>
              <li>Heart Murmur</li>
              <li>Redness of the skin</li>
              <li>Decreased Exercise Tolerance</li>
              <li>Confusion or Memory Problems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardio;
