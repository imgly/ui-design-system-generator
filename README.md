# Design-System-Generator

## How to use
Download the example or [clone the repo](https://github.com/LFra/design-system-generator.git):

Install the dependencies
```
npm install
```

Then, open Sketch and navigate to `Plugins → react-sketchapp: Design-System-Generator`

### Run it in Sketch
Run with live reloading in Sketch
```
npm run render
```


# Documentation
## Color
Colors can be edited under ./theme/app/color.js.
Each color has the following structure:
```
colorName: {
    themeNameOne: '#1E47FB',
    themeNameSecond: '#1E47FB',
    // Should outline symbols be created? Set true if yes.
    outline: true
}   
```
Like this it is easy to manage multiple color themes and delete/add colors to the theme.

Colors are wrapped inside color groups:
```
colorGroupName: {
    colorNameOne: {...},
    colorNameTwo: {...},
    ...
}   
```

Color groups are primarily for faster finding of colors, there will be a util function 
that generates a flattened version of the styles for development.

As a convention, the theme id constants are saved under ./ids
The same goes for the different outline options.