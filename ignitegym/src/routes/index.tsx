import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { Box } from "@gluestack-ui/themed";

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = gluestackUIConfig.tokens.colors.trueGray700;

  return (
    <Box flex={1} bg="$trueGray700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
