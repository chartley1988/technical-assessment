import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  ListItem,
  OrderedList,
  Container,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Register from "./components/Register"
import LoginContainer from "./components/AdminPanel"
import Login from "./components/Login"
import '../src/styles/global.css'
import AdminPanel from "./components/AdminPanel"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={100}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <AdminPanel />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
