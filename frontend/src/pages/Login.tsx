import { Box, Button, Typography } from "@mui/material";
import { IoIosLogIn } from "react-icons/io";

import CustomizedInput from "../components/shared/CustomizedInput";

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
  };

  return (
    <Box width={"100%"} height={"100%"} display="flex" flex={1}>
      <Box padding={8} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="airobot.png" alt="Robot" style={{ width: "400px" }} />
      </Box>
      <Box display="flex" flex={{ xs: 1, md: 0.5 }} justifyContent={"center"} alignItems={"center"} padding={2} marginInline={"auto 32px"}>
        <form
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            border: "none",
            borderRadius: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h4" align="center" padding={2} fontWeight={600}>
              Login
            </Typography>
            <CustomizedInput name="email" type="email" label="Email" />
            <CustomizedInput name="password" type="password" label="password" />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "400px",
                borderRadius: 2,
                bgcolor: "#00fffc",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
              endIcon={<IoIosLogIn />}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
