import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={s.container}>
      <NavLink className={s.link} to="/register">
        <div className={s.register}>Register</div>
      </NavLink>
      <NavLink className={s.link} to="/login">
        <div className={s.register}>Log In</div>
      </NavLink>
    </div>
  );
};
