import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RoleSelect from './RoleSelect';
import SignupForm from './SignupForm';
import './signup.scss';

const SignupPage = () => {
  const [role, setRole] = useState<'mentor' | 'mentee' | null>(null);
  const location: any = useLocation();

  useEffect(() => {
    if (location.state?.role) {
      setRole(location.state.role);
    }
  }, []);

  return (
    <main className="signup">
      {/* If no role show the role select component, otherwise show signup form */}
      {!role ? (
        <RoleSelect
          onRoleSelect={role => {
            setRole(role);
          }}
        />
      ) : (
        <SignupForm goBack={() => setRole(null)} role={role} />
      )}
    </main>
  );
};

export default SignupPage;
