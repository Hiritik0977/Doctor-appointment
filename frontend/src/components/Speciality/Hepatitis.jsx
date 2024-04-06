import React from 'react';

const Hepatitis = () => {
  const greenBoxStyle = {
    backgroundColor: '#5ae6b4',
    padding: '10px',
    borderRadius: '8px',
    color: 'white',
  };

  return (
    <div className="container mx-auto px-4 py-12"> 
      <div style={greenBoxStyle}>
        <h1 className="text-2xl font-bold mb-2 text-center text-[black] ">Hover for Hepatitis Symptoms</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="hepatitis-tooltip">
            <h2 className="text-lg font-semibold mb-3 mx-5 text-[black]">Common symptoms of Hepatitis include:</h2>
            <ul className="list-disc pl-4 mx-5 text-[black]">
              <li>Jaundice (yellowing of the skin and eyes)</li>
              <li>Abdominal pain</li>
              <li>Loss of appetite</li>
              <li>Nausea or vomiting</li>
              <li>Fever</li>
              <li>Fatigue</li>
              <li>Dark urine</li>
              <li>Clay-colored stools</li>
              <li>Joint pain</li>
              <li>Muscle pain</li>
              <li>Itchy skin</li>
              <li>Weight loss</li>
              <li>Swelling in the abdomen</li>
            </ul>
          </div>
          <div className="hepatitis-tooltip text-[black]">
            <h2 className="text-lg font-semibold mb-1">Less common symptoms:</h2>
            <ul className="list-disc pl-4">
              <li>Blood in vomit or stools</li>
              <li>Enlarged liver</li>
              <li>Enlarged spleen</li>
              <li>Excessive fatigue</li>
              <li>Confusion, drowsiness, and slurred speech (in severe cases)</li>
              <li>Bleeding easily</li>
              <li>Swollen ankles</li>
              <li>Fluid in the abdomen</li>
              <li>Fluid retention</li>
              <li>Personality changes</li>
              <li>Disorientation or confusion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hepatitis;
