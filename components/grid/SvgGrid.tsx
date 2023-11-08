import React, { FC } from 'react';

interface SvgGridProps {
  svgData: Array<JSX.Element | string>;
}

const SvgGrid: FC<SvgGridProps> = ({ svgData }) => {
  return (
    <div className="svg-grid">
      {svgData.map((svg, index) => (
        <div key={index} className="svg-item">
          {svg}
        </div>
      ))}
    </div>
  );
};

export default SvgGrid;
