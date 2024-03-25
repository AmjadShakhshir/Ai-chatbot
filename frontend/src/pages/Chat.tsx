import { Avatar, Box, Button, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

import { useAuth } from "../context/AuthContext";

const chatMessages = [
  {
    role: "user",
    content: "Hello, can you provide today's weather forecast?",
  },
  {
    role: "assistant",
    content: "Sure! In which city are you interested?",
  },
  {
    role: "user",
    content: "I'd like to know the weather in New York.",
  },
  {
    role: "assistant",
    content: "The weather in New York today will be mostly sunny with a high of 75°F (24°C) and a low of 59°F (15°C).",
  },
  {
    role: "user",
    content: "That's great, thank you!",
  },
  {
    role: "assistant",
    content: "You're welcome! Let me know if there's anything else I can help with.",
  },
];

const Chat = () => {
  const auth = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        height: "100%",
        width: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box sx={{ display: { md: "flex", xs: "none", sm: "none" }, flex: 0.2, flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              color: "black",
              bgcolor: "white",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}
            {auth?.user?.name && auth.user.name.includes(" ") ? auth.user.name.split(" ")[1][0] : ""}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>You are talking to a ChatBOT</Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>You can ask some questions related to knowledge, technology, or any other general topics. But avoid sharing personal information.</Typography>
          <Button
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: 700,
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              "&:hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flex: { md: 0.8, xs: 1, sm: 1 }, flexDirection: "column", px: 3 }}>
        <Typography sx={{ textAlign: "center", fontSize: "2.5em", color: "white", mb: 2, mx: "auto" }}>Model - GPT 3.5 Turbo</Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            overflowX: "hidden",
            overflowY: "auto",
            overflow: "scroll",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat) => (
            <div>{chat.content}</div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
