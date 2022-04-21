import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import React from "react";

function Form() {
  return (
    <Grid
      bgcolor="#ff9800"
      minHeight="90vh"
      justifyContent="center"
      alignContent="center"
      container
    >
      <Grid item xs={6}>
        <Box bgcolor="white" borderColor="gray">
          <Grid container padding="40px 0" spacing="20" justifyContent="center">
            <Grid justifyContent="center" item container xs={12}>
              <TextField label="Email" />
            </Grid>
            <Grid justifyContent="center" container item xs={12}>
              <TextField label="Password" />
            </Grid>
            <Grid justifyContent="center" container item xs={12}>
              <Button variant="contained">Login</Button>
            </Grid>
            <Grid justifyContent="center" container item xs={12}>
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

export default Form;
