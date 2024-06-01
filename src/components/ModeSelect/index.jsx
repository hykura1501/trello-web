import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/material/Box";

//Theme
import { useColorScheme } from "@mui/material/styles";
function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    setMode(event.target.value);
  };
  return (
    <FormControl size="small">
      <InputLabel id="demo-simple-select-label">Mode</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="dark">
          <Box display="flex" gap={1} alignItems="center">
            <DarkModeOutlinedIcon fontSize="small" />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value="light">
          <Box display="flex" gap={1} alignItems="center">
            <LightModeIcon fontSize="small" />
            Light
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box display="flex" gap={1} alignItems="center">
            <SettingsBrightnessIcon fontSize="small" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default ModeSelect;
