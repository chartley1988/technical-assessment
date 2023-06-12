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
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={100}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Text>
            Junior Developer Challenge
          </Text>
          <Text>
            The point  of this challenge is not to be confusing or to stump you, or ask anything tricky that won't be used in the role. So feel free to ask clarifying questions, and work together with us as pair programming will likely be a regular part of the job, and we all have to like each other!

            We might not finish the challenge, and thats okay, we want to see how you think and how you work with us, so don't be too stressed out.
          </Text>
          <OrderedList textAlign={"left"}>
            <ListItem marginBottom={5}>Clone the backend repository, and run using docker. This will run a sample server on localhost:3000 which will contain the API to consume for the purpose of this application.

            The documentation for the API will be located at [http://localhost:3000/docs].
            </ListItem>
            <ListItem marginBottom={5}>
              You will need to create a login form, to successfully login to the website, and save the token for future use.

              For the login, we want you to use the admin login endpoint([/api/v1/auth/admin/email/login])

              Sorry in advance for the long URLs, we used a boilerplate :P
            </ListItem>
            <ListItem marginBottom={5}>
              After the user is authenticated, you will need to consume the /users/ API endpoint. 

              We will ask you to create a form for creating a new user, and then a table to display the users and the following details about them: Email, First Name, Last Name, Created At, Role Name, and a button on the far right to delete a user.
            </ListItem>
            <ListItem marginBottom={5}>
              The final items (if youre a superstar and we have lots of time left) will be filtering, sorting and implementing the delete functionalities.
            </ListItem>
            <ListItem marginBottom={5}>Best of Luck!</ListItem>
          </OrderedList>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
