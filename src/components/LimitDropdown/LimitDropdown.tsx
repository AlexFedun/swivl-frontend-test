import React from 'react';
import './LimitDropdown.sass';

export interface ILimitDropdownProps {
  selectedValue: number;
  values: number[];
  onChange: (v: number) => void;
  visibility: boolean;
}

const LimitDropdown: React.FC<ILimitDropdownProps> = ({ selectedValue, values, onChange, visibility }) => {
  return (
    <div className="limit-dropdown">
      <div className={`container ${visibility ? ' visible' : ''}`}>
        {values.map((value) => (
          <div key={value.toString()} onClick={() => onChange(value)}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LimitDropdown;