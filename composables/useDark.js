export default () => {
  const useDarkMode = () => useState("dark_mode", () => false);
  const changeDarkMode = () => {
    const dark = useDarkMode();
    dark.value = !dark.value;
  };

  return {
    useDarkMode,
    changeDarkMode,
  };
};
