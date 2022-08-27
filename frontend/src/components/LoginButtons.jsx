import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin, SiMessenger } from "react-icons/si";
import {
  Button,
  Center,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function LOginButtons() {
  return (
    <Center p={2} pb={8} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
        {/* Facebook */}
        <Button w={"full"} colorScheme={"facebook"} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>

        {/* LinkedIn */}
        <Button w={"full"} colorScheme={"messenger"} leftIcon={<SiLinkedin />}>
          <Center>
            <Text>Send to Linkedin</Text>
          </Center>
        </Button>

        {/* Messenger */}
        <Button w={"full"} colorScheme={"messenger"} leftIcon={<SiMessenger />}>
          <Center>
            <Text>Send to Messenger</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
}
