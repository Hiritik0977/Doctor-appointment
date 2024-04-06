import React from 'react';

const Liver = () => {
  const greenBoxStyle = {
    backgroundColor: '#fccde2',
    padding: '10px',
    borderRadius: '8px',
    color: 'white',
  };

  return (
    <div className="container mx-auto px-4 py-12"> 
      <div style={greenBoxStyle}>
        <h1 className="text-2xl font-bold mb-2 text-center text-[black] ">Hover for Liver Symptoms</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="liver-tooltip">
            <h2 className="text-lg font-semibold mb-3 mx-5 text-[black]">Common symptoms of Liver issues include:</h2>
            <ul className="list-disc pl-4 mx-5 text-[black]">
              <li>Jaundice (yellowing of the skin and eyes)</li>
              <li>Dark urine</li>
              <li>Pale stools</li>
              <li>Abdominal pain and swelling</li>
              <li>Itchy skin</li>
              <li>Chronic fatigue</li>
              <li>Loss of appetite</li>
              <li>Nausea or vomiting</li>
              <li>Weight loss</li>
              <li>Easy bruising</li>
              <li>Spider-like blood vessels on the skin</li>
              <li>Weakness</li>
            </ul>
          </div>
          <div className="liver-tooltip text-[black]">
            <h2 className="text-lg font-semibold mb-1">Less common symptoms:</h2>
            <ul className="list-disc pl-4">
              <li>Fever</li>
              <li>Confusion or difficulty concentrating</li>
              <li>Swelling in the legs and ankles</li>
              <li>Ascites (accumulation of fluid in the abdomen)</li>
              <li>Bleeding easily</li>
              <li>Joint pain</li>
              <li>Increased sensitivity to medications</li>
              <li>Red palms</li>
              <li>Swelling of the abdomen</li>
              <li>Changes in personality or behavior</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liver;
