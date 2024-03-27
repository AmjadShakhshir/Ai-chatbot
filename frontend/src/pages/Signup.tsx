import { Box, Button, Typography } from "@mui/material";
import { IoIosLogIn } from "react-icons/io";
import toast from "react-hot-toast";

import CustomizedInput from "../components/shared/CustomizedInput";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    try {
      toast.loading("Logging in...", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.success("Signup successfully", { id: "signup" });
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Invalid credentials", { id: "signup" });
    }
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
              Signup
            </Typography>
            <CustomizedInput name="name" type="text" label="Name" />
            <CustomizedInput name="email" type="email" label="Email" />
            <CustomizedInput name="password" type="password" label="Password" />
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
              Signup
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
