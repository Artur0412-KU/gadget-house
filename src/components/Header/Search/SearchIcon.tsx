import React from 'react';
import { StatusButtonProps } from '../../../interfaces/interfaces';

const SearchIcon: React.FC<StatusButtonProps> = ({
  width,
  height,
  color,
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 11.1455C4.99956 8.21437 7.06975 5.69108 9.94452 5.11883C12.8193 4.54659 15.698 6.08477 16.82 8.79267C17.9421 11.5006 16.995 14.624 14.558 16.2528C12.121 17.8815 8.87287 17.562 6.8 15.4895C5.64763 14.3376 5.00014 12.775 5 11.1455Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.489 15.4905L19 19.0015"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
