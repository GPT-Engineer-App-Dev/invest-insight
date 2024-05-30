import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg" ml={4}>
            Financial Times
          </Heading>
          <Flex as="nav" mr={4}>
            <Link href="#" mx={2} color="white">
              Home
            </Link>
            <Link href="#" mx={2} color="white">
              World
            </Link>
            <Link href="#" mx={2} color="white">
              Business
            </Link>
            <Link href="#" mx={2} color="white">
              Markets
            </Link>
            <Link href="#" mx={2} color="white">
              Opinion
            </Link>
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex mt={8}>
        {/* Featured Article Section */}
        <Box flex="3" mr={4}>
          <Heading as="h2" size="md" mb={4}>
            Featured Article
          </Heading>
          <Box p={4} borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="lg" mb={2}>
              The Impact of Global Markets on Local Economies
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box flex="1" ml={4}>
          <Heading as="h2" size="md" mb={4}>
            Sidebar
          </Heading>
          <Box p={4} borderWidth="1px" borderRadius="md">
            <Text>Additional Links or Advertisements</Text>
          </Box>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center">
          <Text ml={4}>© 2023 Financial Times</Text>
          <Flex mr={4}>
            <Link href="#" mx={2} color="white">
              <FaFacebook />
            </Link>
            <Link href="#" mx={2} color="white">
              <FaTwitter />
            </Link>
            <Link href="#" mx={2} color="white">
              <FaLinkedin />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;