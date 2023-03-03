# Ecommerce
#### Project: Update studies with React, Typescript. Searching for a zip code.

Developed by [Tiago de Freitas Pinheiro](https://github.com/Tiago1106), [Linkedin](https://www.linkedin.com/in/tiagofp00/)

<!-- ## 📋 Features:

- In development, coming soon.
    - [ ] Sliders -->

## 📌 Requirements:

Before you begin, check that you have met the following requirements:
* [Visual Studio Code](https://code.visualstudio.com/) or a similar code editor installed;
* [Git](https://git-scm.com) installed;
* [Node 16.13.2](https://nodejs.org/en/download/) or higher installed;
* [Yarn](https://yarnpkg.com/) or [NPM](https://nodejs.org/en/download/) installed;

## 🚀 Installation/Run:

To install the necessary dependencies and run the project in the emulator, just run:

```bash
# Clone the repository
$ git clone https://github.com/Tiago1106/Ecommerce.git
# Install the dependencies
$ npm install
# Execute the project
$ npm start
```

## 💻 Insert component into VtexIO:

Initially, every custom component created for IO must be inside the React folder.
In the React folder, you must have a file with the same name as the component being exported as default:

```bash
import SearchZipCode from 'Component Path';
export default SearchZipCode;
```

Later, for the component to be fully accessible globally within the IO application, it needs to be instantiated within interfaces.json:

```bash
{
  "searchZipCode": { # Here is the name to be called in block.json
    "component": "SearchZipCode" # Here goes the name of the exported component
  },
}
```

After instantiated in interfaces.json, it is ready to be called inside block.json

```bash
{
  "store.home": { # Here I am giving an example of how to place the component on the home page
    "blocks": [
      searchZipCode
    ]
  }
}
```

## 📚 Additional documentations:

- [Styled Components](https://styled-components.com/)
- [React](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/ptbr/)
- [React Loading](https://github.com/fakiolinho/react-loading)
