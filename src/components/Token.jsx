import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Token = () => {
  const { token } = useContext(AuthContext);
  //   console.log("token:", token);

  return (
    <>
      <Box
        color="#516BEB"
        bg="#EDD2F3"
        w="40%"
        p={3}
        borderRadius="10px"
        mt="2"
      >
        Token : {token}
      </Box>
    </>
  );
};
