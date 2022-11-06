import { Outlet } from 'react-router-dom';
import { Section } from './Movies-styled';

export const Movies = () => {
  return (
    <Section>
      <div>
        <input type="text" />
      </div>
      <Outlet />
    </Section>
  );
};
