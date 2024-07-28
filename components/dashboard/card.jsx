import React from 'react';
import { Icon } from '@iconify/react';

const Card = ({ title, data, icon, iconColor }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl">{data}</p>
      </div>
      <div className="bg-gray-100 rounded-full p-2">
        <Icon icon={icon} width="50" height="50" color={iconColor} />
      </div>
    </div>
  );
};

export default Card;
