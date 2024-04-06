import React from 'react';

const Dengue = () => {
  const greenBoxStyle = {
    backgroundColor: '#fca5a5',
    padding: '10px',
    borderRadius: '8px',
    color: 'white',
  };

  return (
    <div className="container mx-auto px-4 py-12"> 
      <div style={greenBoxStyle}>
        <h1 className="text-2xl font-bold mb-2 text-center text-[black] ">Hover for Dengue Fever Symptoms</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="dengue-tooltip">
            <h2 className="text-lg font-semibold mb-3 mx-5 text-[black]">Common symptoms of Dengue Fever include:</h2>
            <ul className="list-disc pl-4 mx-5 text-[black]">
              <li>Sudden high fever, often as high as 104°F (40°C)</li>
              <li>Severe headache</li>
              <li>Pain behind the eyes</li>
              <li>Joint and muscle pain</li>
              <li>Fatigue</li>
              <li>Nausea</li>
              <li>Vomiting</li>
              <li>Skin rash, which appears two to five days after the onset of fever</li>
              <li>Mild bleeding (such as nose bleed, gum bleeding, or easy bruising)</li>
            </ul>
          </div>
          <div className="dengue-tooltip text-[black]">
            <h2 className="text-lg font-semibold mb-1">Less common symptoms:</h2>
            <ul className="list-disc pl-4">
              <li>Severe abdominal pain</li>
              <li>Persistent vomiting</li>
              <li>Bleeding from the nose or gums</li>
              <li>Bleeding in the gastrointestinal tract</li>
              <li>Difficulty breathing</li>
              <li>Persistent vomiting</li>
              <li>Irritability or restlessness</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dengue;
