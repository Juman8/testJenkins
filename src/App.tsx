import { useEffect, useLayoutEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '@translations/i18n';

import { GlobalStyles, themes, useTheme } from './theme';
import { store, persistor } from 'src/redux';
import { ModuleMain } from 'src/modules';
import { ALL_THEMES } from './configs/constants';
import { setToLS } from './utils/storage';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useLayoutEffect(() => {
    setToLS(ALL_THEMES, themes);
    // WebFont.load({
    //   google: {
    //     families: getFonts(),
    //   },
    // });
  }, []);

  return (
    <Provider store={store}>
      {themeLoaded && selectedTheme && (
        <ThemeProvider theme={selectedTheme || themes.theme.light}>
          <GlobalStyles />
          <PersistGate loading={null} persistor={persistor}>
            <ModuleMain setTheme={setSelectedTheme} />
          </PersistGate>
        </ThemeProvider>
      )}
    </Provider>
  );
}

export default App;
