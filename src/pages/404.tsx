import * as React from "react";
import { Link } from "gatsby";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from "images/notfound.gif";
import Typography from "../components/Typography/Typography";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

const pageStyles = {
  color: "#232129",
  padding: "24px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const linkStyles = {
  marginBottom: "1rem",
  width: "100%",
  display: "inline-block",
  textDecoration: "none",
  cursor: "pointer",
};

const imageStyles = {
  maxWidth: "1640px",
  margin: "0 auto",
  width: "100%",
};

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main style={pageStyles}>
        <Link to="/" style={linkStyles}>
          <Typography
            variant="title"
            fontSize="title"
            uppercase
            color="textInverted"
          >
            &lt; Powrót
          </Typography>
        </Link>
        <img style={imageStyles} src={logo} alt="notfound" />
      </main>
    </ThemeProvider>
  );
};

export default NotFoundPage;
