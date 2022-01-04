import { Box, Button } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Nav = () => {
  const { isAuth, toggleAuth, setToken } = useContext(AuthContext);
  // console.log("isAuth:", isAuth);
  const details = {
    email: "eve.holt@reqres.in",
    password: "cityslickahfg",
  };
  return (
    <>
      <Box bg="#84DFFF" w="100%" p={3} borderRadius="10px">
        <Button
          bg="#EDD2F3"
          color="#516BEB"
          _hover={{
            bg: "#516BEB",
            color: "#EDD2F3",
          }}
          onClick={() => {
            toggleAuth();
            if (isAuth !== true) {
              fetch("https://reqres.in/api/login", {
                method: "POST",
                body: JSON.stringify(details),
                headers: {
                  "content-type": "application/json",
                },
              })
                .then((res) => res.json())
                .then(({ token }) => {
                  setToken(token);
                });
            } else {
              setToken("");
            }
          }}
        >
          {isAuth === false ? "Login" : "Logout"}
        </Button>
      </Box>
    </>
  );
};
