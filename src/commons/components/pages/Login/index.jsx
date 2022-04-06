import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <Grid justifyContent="center" container>
      <Grid item xs={6}>
        <Box>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <TextField />
            </Grid>
            <Grid item xs={12}>
              <TextField />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained">Login</Button>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Don&apos;t have an account?{" "}
                <Link href="/signIn" passHref>
                  <a>SignIn</a>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
