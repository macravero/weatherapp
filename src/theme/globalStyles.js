import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


* {
    @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;800&display=swap');
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html {
    height: 100%

}
body {
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont,'Sen', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
h1,h2{
    font-weight: 800;
}
`;
export default GlobalStyle;
