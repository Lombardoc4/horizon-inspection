import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  #root {
    margin: 0;
    /* display: flex; */
    /* place-items: center; */
    min-width: 300px;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
  }


  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #f1f1f1;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }

  section {
    padding: 4em 0;
  }

  .img-container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 0.5em;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2em;
    /* text-align: center; */

    p {
      width: 100%;
      max-width: 50ch;
    }

    .card-container{
      padding: 4em 0;
    }

    .card-heading{
      padding-bottom: 2em;
    }

    .card-group{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2em;

    }

    .card {
      background-color: #ffffff;
      padding: 2em;
      border-radius: 0.5em;
    }
  }

  .flex-1{
      flex: 1;
    }

    textarea{
      resize: none;
    }
 `

 export default GlobalStyle;