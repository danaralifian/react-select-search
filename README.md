# react-select-search

This is a simple yet powerful Select component built for React applications, featuring a searchable dropdown for improved usability, especially when dealing with long lists of options. The component allows users to easily filter through options by typing, making it ideal for forms, settings, and any other UI where selecting from a large set of options is needed.

https://www.npmjs.com/package/react-select-search-ui

[![TypeScript](https://badges.aleen42.com/src/typescript.svg)]()

## Install

```tsx
npm i react-select-search-ui
```

or

```tsx
yarn add react-select-search-ui
```

## Usage

```tsx
import "react-select-search/dist/style.css";
import { Select } from "react-select-search";

<Select
  label="Label"
  outlined
  id="dropdown"
  withSearch
  options={[]}
  onChange={(values) => {}}
  multiple
/>;
```

## Demo

https://react-select-search-ui-storybook-5636z9ghn.vercel.app/

## Features

- Support for Custom Options: Easily extend the list with custom data.
- Support multiple value
- Support searching label

## Authors

- [@danaralifian](https://github.com/danaralifian)

## License

[MIT](https://choosealicense.com/licenses/mit/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
