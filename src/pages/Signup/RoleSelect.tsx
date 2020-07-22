import * as React from 'react';
import { ReactElement } from 'react';

interface Props {
  onRoleSelect: (role: 'mentor' | 'mentee') => void;
}

export default function RoleSelect({ onRoleSelect }: Props): ReactElement {
  const handleInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Get selected role from user
    // Role is saved to memory in order to be sent with the signup request on the next page
    if (
      event.currentTarget.value === 'mentor' ||
      event.currentTarget.value === 'mentee'
    ) {
      onRoleSelect(event.currentTarget.value);
    } else {
      console.error('role must be mentor or mentee');
    }
  };

  return (
    <div className="role-select">
      <h1>Choose your path</h1>
      <button
        className="role-select-button button-secondary"
        value="mentor"
        onClick={handleInput}
      >
        <h2 className="role">Mentor</h2>
        <p className="role-description">Nurture future innovators</p>
      </button>
      <button
        className="role-select-button button-secondary"
        value="mentee"
        onClick={handleInput}
      >
        <h2 className="role">Mentee</h2>
        <p className="role-description">Enter industry with confidence</p>
      </button>
    </div>
  );
}
