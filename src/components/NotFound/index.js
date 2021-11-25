import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import * as styles from "../NotFound/styles.module.css";

function NotFound() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="xl">
            <img
              src="https://mefosh.com/static/media/error.a0396b78.png"
              alt="404 Not Found"
              className={styles.responsive}
            />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default NotFound;
