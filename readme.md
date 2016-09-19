Some packages which might be useful for this form:

- [React International Telephone Input](npm install --save react-intl-tel-input)
- [React-Widgets](http://jquense.github.io/react-widgets/)
- [React Ultimate](https://github.com/Paqmind/react-ultimate)
- [Redux Form](http://redux-form.com/) - a HOC that plays well with [Material UI](http://redux-form.com/6.0.5/examples/material-ui/) and [CF UI](https://cloudflare.github.io/cf-ui/)
- [Material UI](http://www.material-ui.com/)
- [Storybook add-on for Material UI](https://github.com/sm-react/storybook-addon-material-ui)



### Integrating React-Create-App with your IDE

You'll need to install some packages globally to get things like ESLint working.

- `npm install -g eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-flowtype`

Next steps

- Enable *_Use Global ESLint Installation_* from package settings.
- Point to the path returned from running `npm get prefix`.
- Add config to package.json:

```json
...
"eslintConfig": {
  "extends": "./node_modules/react-scripts/config/eslint.js"
}
...
```


### Test Mode

Just use `npm run test`, it will start JSDom in watch-mode, with an interactive CLI.

### Running a CI build

There's currently a bug with RCA that will give an install error related to `lru-cache`
this has already been fixed and will be included in the next release.
