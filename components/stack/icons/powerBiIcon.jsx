import React from 'react';

const PowerBiIcon = (props) => {
  return (
    <svg
      id="css-icon"
      width={30}
      height={30}
      viewBox="0 0 256 342"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{'Power BI'}</title>
      <defs>
        <linearGradient id="b" x1="42.593%" x2="57.245%" y1="0%" y2="93.174%">
          <stop offset="0%" stopColor="#E6AD10" />
          <stop offset="100%" stopColor="#C87E0E" />
        </linearGradient>
        <linearGradient id="d" x1="40.122%" x2="62.028%" y1="0%" y2="95.592%">
          <stop offset="0%" stopColor="#F6D751" />
          <stop offset="100%" stopColor="#E6AD10" />
        </linearGradient>
        <linearGradient id="e" x1="27.774%" x2="55.012%" y1="0%" y2="96.828%">
          <stop offset="0%" stopColor="#F9E589" />
          <stop offset="100%" stopColor="#F6D751" />
        </linearGradient>
        <path
          id="a"
          d="M142.222 14.222C142.222 6.368 148.59 0 156.444 0h85.334C249.632 0 256 6.368 256 14.222v312.89c0 7.854-6.368 14.221-14.222 14.221H14.222C6.368 341.333 0 334.966 0 327.111V184.89c0-7.855 6.368-14.222 14.222-14.222h56.89V99.556c0-7.855 6.367-14.223 14.222-14.223h56.888v-71.11Z"
        />
      </defs>
      <mask id="c" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <path fill="url(#b)" d="M256 0v341.333H142.222V0z" mask="url(#c)" />
      <path
        fillOpacity={0.2}
        d="M184.889 100.978v241.778H71.11v-256h99.556c7.854 0 14.222 6.367 14.222 14.222Z"
        mask="url(#c)"
      />
      <path
        fillOpacity={0.18}
        d="M184.889 106.667v241.777H71.11v-256h99.556c7.854 0 14.222 6.368 14.222 14.223Z"
        mask="url(#c)"
      />
      <path
        fill="url(#d)"
        d="M184.889 99.556v241.777H71.11v-256h99.556c7.854 0 14.222 6.368 14.222 14.223Z"
        mask="url(#c)"
      />
      <path
        fill="url(#e)"
        d="M0 170.667v170.666h113.778V184.89c0-7.855-6.368-14.222-14.222-14.222H0Z"
        mask="url(#c)"
      />
    </svg>
  );
};

export default PowerBiIcon;
