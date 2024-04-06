import React from 'react';

const Urine = () => {
  const greenBoxStyle = {
    backgroundColor: '#b4a5fc',
    padding: '10px',
    borderRadius: '8px',
    color: 'white',
  };

  return (
    <div className="container mx-auto px-4 py-12"> 
      <div style={greenBoxStyle}>
        <h1 className="text-2xl font-bold mb-2 text-center text-[black]">Hover for Urine Symptoms</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="urine-tooltip">
            <h2 className="text-lg font-semibold mb-3 mx-5 text-[black]">Common symptoms related to urine issues include:</h2>
            <ul className="list-disc pl-4 mx-5 text-[black]">
              <li>Changes in urine color (dark, bloody, cloudy, or foamy urine)</li>
              <li>Frequent urge to urinate</li>
              <li>Burning or pain during urination</li>
              <li>Difficulty starting urination</li>
              <li>Weakening or stopping of urine flow</li>
              <li>Increased or decreased urine output</li>
              <li>Strong or foul-smelling urine</li>
              <li>Presence of blood in urine (hematuria)</li>
              <li>Difficulty emptying the bladder completely</li>
            </ul>
          </div>
          <div className="urine-tooltip text-[black]">
            <h2 className="text-lg font-semibold mb-1">Less common symptoms:</h2>
            <ul className="list-disc pl-4">
              <li>Pain in the lower abdomen or back</li>
              <li>Fever or chills</li>
              <li>Nausea or vomiting</li>
              <li>Fatigue</li>
              <li>Weakness</li>
              <li>Swelling in the feet or ankles</li>
              <li>Weight gain</li>
              <li>Increased thirst</li>
              <li>Difficulty concentrating</li>
              <li>Confusion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Urine;
