import {
  useTheme,
  Box,
  TextField,
  Typography,
  Paper,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";

const StudentPage = () => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <Box p={3}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          bgcolor: theme.palette.secondary.main,
          textAlign: "center",
          p: 1,
        }}
      >
        Student CRUD Practice
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, width: 300 }}>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Add New Student
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Student Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Student Adress"
                variant="outlined"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Button
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>
            </form>

            {/* <Box component="form" noValidate sx={{ mt: 1 }}> */}
            {/* <form noValidate autoComplete="off">
              <TextField
              id="outlined-basic"
                label="Student Name"
                variant="outlined"
                fullWidth
                margin="normal"
                //   defaultValue="Student Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
              <TextField
              id="outlined-basic"
                label="Student Address"
                variant="outlined"
                fullWidth
                margin="normal"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                
                sx={{ color: theme.palette.secondary.main }}
              >
                Submit
              </Button>
              </form> */}
            {/* </Box> */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentPage;