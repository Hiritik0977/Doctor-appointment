import React from 'react';

const Pregnancy = () => {
  const greenBoxStyle = {
    backgroundColor: '#a5b4fc',
    padding: '10px',
    borderRadius: '8px',
    color: 'white',
  };

  return (
    <div className="container mx-auto px-4 py-12"> 
      <div style={greenBoxStyle}>
        <h1 className="text-2xl font-bold mb-2 text-center text-[black] ">Hover for Pregnancy Symptoms</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="pregnancy-tooltip">
            <h2 className="text-lg font-semibold mb-3 mx-5 text-[black]">Common symptoms of Pregnancy include:</h2>
            <ul className="list-disc pl-4 mx-5 text-[black]">
              <li>Missed menstrual period</li>
              <li>Swollen or tender breasts</li>
              <li>Fatigue or tiredness</li>
              <li>Nausea and vomiting (morning sickness)</li>
              <li>Frequent urination</li>
              <li>Increased hunger or food cravings</li>
              <li>Mood swings</li>
              <li>Constipation</li>
              <li>Backache</li>
              <li>Headaches</li>
              <li>Dizziness or lightheadedness</li>
            </ul>
          </div>
          <div className="pregnancy-tooltip text-[black]">
            <h2 className="text-lg font-semibold mb-1">Less common symptoms:</h2>
            <ul className="list-disc pl-4">
              <li>Spotting or light bleeding (implantation bleeding)</li>
              <li>Darkening of the areolas</li>
              <li>Cramping</li>
              <li>Shortness of breath</li>
              <li>Heartburn</li>
              <li>Increased sense of smell</li>
              <li>Visible veins on breasts or legs</li>
              <li>Changes in libido</li>
              <li>Constipation</li>
              <li>Nasal congestion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pregnancy;
