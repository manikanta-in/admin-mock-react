# `@lowes/babel-plugin-styled-components-namespace`

This plugin is a highly recommended supplement to the base styled-components library, offering some useful features:

- consistently hashed component classNames between environments (a must for server-side rendering)
- better debugging through automatic annotation of your styled components based on their context in the file system, etc.
- various types of minification for styles and the tagged template literals styled-components uses

## Quick start

Install the plugin first:

```bash
npm install --save-dev @lowes/babel-plugin-styled-components
```

Then add it to your babel configuration:

```JSON
{
  "plugins": ["@lowes/babel-plugin-styled-components-namespace", {
    namespace: 'RC'
  }]
}
```

## Documentation

**The documentation for this plugin lives on [the styled-components website](https://www.styled-components.com/docs/tooling#babel-plugin)!**

- [Usage](https://www.styled-components.com/docs/tooling#usage)
- [Better debugging](https://www.styled-components.com/docs/tooling#better-debugging)
- [Minification](https://www.styled-components.com/docs/tooling#minification)
