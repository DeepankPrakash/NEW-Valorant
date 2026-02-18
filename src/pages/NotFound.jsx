import { Container, Typography } from "@mui/material";

function NotFound() {
  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h1" align="center" color="error">
        404 - Page Not Found
      </Typography>
    </Container>
  );
}

export default NotFound;
