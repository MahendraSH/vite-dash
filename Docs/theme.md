## MUI Custom Theme

### Table of Contents

1. [Custom Theme Provider](#custom-theme-provider)
2. [Colors Generator](#colors-generator)
3. [Palettes](#palettes)
4. [Shadows](#shadows)
5. [Typography](#typography)
6. [Overrides](#overrides)
7. [Example Override (Badge)](#example-override-badge)
8. [Example Override (Button)](#example-override-button)

### 1. Custom Theme Provider <a name="custom-theme-provider"></a>

The custom theme provider provides a way to create a customized Material-UI theme for your React application. It includes configurations for colors, typography, shadows, and component overrides.

```jsx
import PropTypes from "prop-types";
import { useMemo } from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Palette from "./theme-components/palette";
import Typography from "./theme-components/typography";
import CustomShadows from "./theme-components/shadows";
import componentsOverride from "./overrides/componentsOverride";

export default function CustomThemeProvider({ children }) {
  const theme = Palette("light", "default");

  const themeTypography = Typography(`'Public Sans', sans-serif`);
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: "ltr",
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: themeTypography,
    }),
    [theme, themeTypography, themeCustomShadows]
  );

  const themes = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};
```

### 2. Colors Generator <a name="colors-generator"></a>

The colors generator creates a color palette based on the preset color palettes from Ant Design. It provides consistent color schemes for primary, secondary, error, warning, info, and success themes.

```js
const ColorGenerator = (colors) => {
  // Color definitions...
};

export default ColorGenerator;
```

### 3. Palettes <a name="palettes"></a>

The palettes module utilizes the color generator to create the overall color scheme for the theme. It defines primary, secondary, error, warning, info, and success colors, along with text, action, and background colors.

```js
const Palette = (mode) => {
  // Palette configurations...
};

export default Palette;
```

### 4. Shadows <a name="shadows"></a>

The shadows module generates custom shadow styles for various components in the theme, providing depth and dimension to the UI elements.

```js
const CustomShadows = (theme) => {
  // Shadow styles...
};

export default CustomShadows;
```

### 5. Typography <a name="typography"></a>

The typography module defines the font styles and sizes for various text elements in the theme, ensuring consistent typography across the application.

```js
const Typography = (fontFamily) => {
  // Typography configurations...
};

export default Typography;
```

### 6. Overrides <a name="overrides"></a>

The overrides module allows for customizing the styles of Material-UI components, such as buttons, badges, cards, and more. It enables fine-grained control over the appearance and behavior of UI elements.

```js
export default function ComponentsOverrides(theme) {
  // Component style overrides...
}
```

### 7. Example Override (Badge) <a name="example-override-badge"></a>

Here's an example of a component override for the Badge component:

```js
export default function Badge(theme) {
  return {
    MuiBadge: {
      styleOverrides: {
        standard: {
          minWidth: theme.spacing(2),
          height: theme.spacing(2),
          padding: theme.spacing(0.5),
        },
      },
    },
  };
}
```

### 8. Example Override (Button) <a name="example-override-button"></a>

And here's an example of a component override for the Button component:

```js
export default function Button(theme) {
  const disabledStyle = {
    "&.Mui-disabled": {
      backgroundColor: theme.palette.grey[200],
    },
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 400,
        },
        contained: {
          ...disabledStyle,
        },
        outlined: {
          ...disabledStyle,
        },
      },
    },
  };
}
```
