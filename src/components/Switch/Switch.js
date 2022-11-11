import { useThemeToggleContext } from '../../provider/ThemeContext';
import './switch.scss';

const Switch = () => {
  const setTheme = useThemeToggleContext();

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked === true) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <label className="switch">
      <input onChange={handleChange} type="checkbox" />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;
