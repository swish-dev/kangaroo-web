# Team Swish JunctionX Seoul 2021

## Installation

```
yarn install
```

## Commands

```
yarn start
yarn test
yarn build
```

## Guide

### Adding Pages

1. Create a folder in `/src/components`
2. Implement your page(component) in `index.js`
3. Create `route.js`
4. `export default route` in following format

```js
const route = {
  path: '/custom-path',
  component: ComponentName,
};
```

5. import and add to array in `/src/components/routes.js`

Each component folder will have:

- `index.js` : Where component is defined
- `route.js` : Path to this component
- `style.scss` : (optional) Component styling
