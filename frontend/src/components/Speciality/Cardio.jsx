import React from 'react';

const Cardio = () => {
  const greenBoxStyle = {
    backgroundColor: '#fccdae',
    padding: '10px',
    borderRadius: '8px',
    color: 'white',
  };

  return (
    <div className="container mx-auto px-4 py-12"> 
      <div style={greenBoxStyle}>
        <h1 className="text-2xl font-bold mb-2 text-center text-[black]">Hover for Typhoid Symptoms</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="typhoid-tooltip">
            <h2 className="text-lg font-semibold mb-3 mx-5 text-[black]">Common symptoms of Typhoid include:</h2>
            <ul className="list-disc pl-4 mx-5 text-[black]">
              <li>Prolonged fever, often as high as 103°F to 104°F (39°C to 40°C)</li>
              <li>Weakness and fatigue</li>
              <li>Stomach pain</li>
              <li>Headache</li>
              <li>Poor appetite</li>
              <li>Constipation or diarrhea</li>
              <li>Chest congestion</li>
              <li>Abdominal tenderness</li>
              <li>Delirium</li>
            </ul>
          </div>
          <div className="typhoid-tooltip text-[black]">
            <h2 className="text-lg font-semibold mb-1">Less common symptoms:</h2>
            <ul className="list-disc pl-4">
              <li>Cough</li>
              <li>Sore throat</li>
              <li>Enlarged spleen and liver</li>
              <li>Joint pains</li>
              <li>Red spots on the abdomen and chest (rose spots)</li>
              <li>Confusion</li>
              <li>Severe fatigue</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardio;
