import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeUIProvider } from "theme-ui";
import { theme } from "./theme";

export function PupilaBrandProviders({ children }) {
  const queryClient = new QueryClient()
  
  return(
    <ThemeUIProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeUIProvider>

    
  )
}