import styles from '../styles/ModeSwitcher.module.css';

interface ModeSwitcherProps {
  currentModeName: string;
  modeNames: string[];
  handleChange: (newMode: string) => void;
}

const ModeSwitcher = (props: ModeSwitcherProps) => {
  const { currentModeName, modeNames, handleChange } = props;
  return (
    <nav className={styles.modeSwitcher}>
      {modeNames.map((modeName, key) => (
        <button
          data-active={currentModeName === modeName}
          key={key}
          onClick={() => handleChange(modeName)}
        >
          {modeName}
        </button>
      ))}
    </nav>
  );
};

export default ModeSwitcher;