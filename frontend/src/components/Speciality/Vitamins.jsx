import React from 'react';

const Vitamins = () => {
  const greenBoxStyle = {
    backgroundColor: '#fcd5a4',
    padding: '10px',
    borderRadius: '8px',
    color: 'white',
  };

  return (
    <div className="container mx-auto px-4 py-12 text-[black]"> 
      <div style={greenBoxStyle}>
        <h1 className="text-2xl font-bold mb-2 text-center text-[black]">Hover for Vitamin Deficiency Symptoms</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="vitamin-tooltip">
            <h2 className="text-lg font-semibold mb-3 mx-5 text-[black]">Common symptoms related to vitamin deficiencies include:</h2>
            <ul className="list-disc pl-4 mx-5 text-[black]">
              <li>Fatigue or weakness</li>
              <li>Brittle or weak nails</li>
              <li>Dry, damaged, or brittle hair</li>
              <li>Irregular heartbeat</li>
              <li>Muscle weakness or cramps</li>
              <li>Bleeding gums</li>
              <li>Slow wound healing</li>
              <li>Easy bruising</li>
              <li>Difficulty concentrating or memory problems</li>
              <li>Poor immune function (frequent infections)</li>
              <li>Depression or mood swings</li>
              <li>Brittle bones (osteoporosis)</li>
            </ul>
          </div>
          <div className="vitamin-tooltip text-[black]">
            <h2 className="text-lg font-semibold mb-1">Specific symptoms for various vitamin deficiencies:</h2>
            <ul className="list-disc pl-4">
              <li>Vitamin A deficiency: Night blindness, dry eyes, skin issues</li>
              <li>Vitamin B12 deficiency: Anemia, tingling or numbness in hands and feet, difficulty walking</li>
              <li>Vitamin C deficiency: Scurvy, weak immune system, easy bruising</li>
              <li>Vitamin D deficiency: Weak or soft bones, frequent infections, fatigue</li>
              <li>Vitamin E deficiency: Muscle weakness, vision problems, impaired immune function</li>
              <li>Vitamin K deficiency: Excessive bleeding, easy bruising, poor blood clotting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitamins;
