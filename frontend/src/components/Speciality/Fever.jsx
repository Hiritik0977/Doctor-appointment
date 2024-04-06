import React from 'react';

const Fever = () => {
  const greenBoxStyle = {
    backgroundColor: '#b4aae4',
    padding: '10px',
    borderRadius: '8px',
    color: 'white',
  };

  return (
    <div className="container mx-auto px-4 py-12"> 
      <div style={greenBoxStyle}>
        <h1 className="text-2xl font-bold mb-2 text-center text-[black] ">Hover for Fever Symptoms</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="fever-tooltip">
            <h2 className="text-lg font-semibold mb-3 mx-5 text-[black]">Common symptoms include:</h2>
            <ul className="list-disc pl-4 mx-5 text-[black]">
              <li>Fever (temperature above 100.4°F or 38°C)</li>
              <li>Headache</li>
              <li>Muscle aches</li>
              <li>Weakness</li>
              <li>Lack of appetite</li>
              <li>Dehydration</li>
              <li>Sweating</li>
              <li>Chills</li>
            </ul>
          </div>
          <div className="fever-tooltip text-[black]">
            <h2 className="text-lg font-semibold mb-1 ">Less common symptoms:</h2>
            <ul className="list-disc pl-4">
              <li>Nausea</li>
              <li>Vomiting</li>
              <li>Dizziness</li>
              <li>Confusion</li>
              <li>Seizures (in severe cases)</li>
              <li>Redness of the skin</li>
              <li>Rashes</li>
              <li>Sore throat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fever;
