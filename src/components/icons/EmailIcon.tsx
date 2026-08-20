import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Standard Official Email Vector Logo Component
 */
export const EmailIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <path d="M1.5 4.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-15zm3-1.5a1.5 1.5 0 0 0-1.5 1.5v.63l9 5.4 9-5.4v-.63a1.5 1.5 0 0 0-1.5-1.5h-15zm16.5 4.12l-8.226 4.935a1.5 1.5 0 0 1-1.548 0L1.5 7.12v12.38a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5V7.12z"/>
    </svg>
  );
};
