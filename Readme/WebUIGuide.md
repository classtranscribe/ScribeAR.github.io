# Web UI Component Guide

### Currently we have made new component every time we need one, which is not effective. Now there are general components compatible for all sorts of usage. (hopefully)
### The pdf document contains detailed picture of how these components look like.

## CSS suggestion

Use [makeStyles](https://material-ui.com/styles/api/#makestyles-styles-options-hook) as much as possible now!

Reason: Before we are transfering our existed css file to css module file to prevent classname conflict. But since we are using materialUI's component, it is recommended to use
makeStyles for styles. Because materialUi's component can only be styled by makeStyles instead of CSS file.

comparison:https://stackoverflow.com/questions/59696613/for-a-react-app-theme-is-there-an-advantage-of-material-ui-makestyles-vs-scss

Also, react-native is using stylesheet, which is extremly similar to makeStyles, for any further possible mobile implementation, its good to learn a style fits both web and mobile.

[CSS module](https://github.com/css-modules/css-modules) to prevent existed css file from classname conflicting


## Functional Component

With the introduction of hooks, functional components become way more powerful and popular comparing to class componnet.

Example Functional Component:
```js
const MyComponent = () => {
  return (<div />)
}
```

Example Class Component:
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
```

Please use tutorials based on functional component (which means tutorial better released after 2018)

[Why we are using functional component](https://djoech.medium.com/functional-vs-class-components-in-react-231e3fbd7108#:~:text=Functional%20component%20are%20much%20easier,you%20to%20use%20best%20practices).

## TypeScript

So basically a lot of warning of the web comed with careless about data type. JavaScript does not require a lot on this but I do hope we can consider TypeScript in the future development.

[TypeScript](https://www.typescriptlang.org/)

It could be harsh to adapt TypeScript with JavaScript syntactic sugar. But it is essential for a larger scale project.

## Eslint

If we decide to apply TypeScript in the future, set up eslint typescript airbnb coding style before actually begin to code. It is so strict and make sure nothing will go wrong.

I dont think it is applicable to our current javascript, it will crash the website.

[Airbnb TypeScript Style Guide Config](https://www.npmjs.com/package/eslint-config-airbnb-typescript)


## 1.Switch

./components/Switch

![](./image/SwitchApp.png)

* usage code:

```javascript
    <Switch page={page} prev={prev_page} next={next_page} titleMap={testMap} />
```
* page: the redux state reflecting current page
* prev: function that goes to previous page
* next: function that goes to next page
* titleMap: This is an array stores the title of each page

```javascript
const testMap = [
    'p1',
    'p2',
    'p3'
];
```

## 2.ToggleButton

./components/ToggleButton

This is a button with changing state function.

Based on materialUI button and Iconbutton.

![](./image/ToggleApp.png)

Example code:

```javascript
    <ToggleButton type='Icon' className="Play" color="inherit" size="large" disabled = {(if_hide === 0)} onClick={() => dispatch(audiovis_flip())}>
        {audioVis && (if_hide !== 0) ? <PauseCircleFilledIcon className="pause" color = {play_color} /> :
            <PlayCircleFilledIcon className={styles.Adplay} color = {play_color} />}
    </ToggleButton>

    <ToggleButton color = "inherit" variant = "outlined" size = "small" onClick={() => dispatch(props.increment())}>+</ToggleButton>

```

* Currently Toggle Button is the mixed of materialUI offered button. But for future potential implementation, please use this toggle button instead of Button from materialUI
* type: 'Icon' for IconButton, otherwise for Button
* [materialUI Button Doc](https://material-ui.com/components/buttons/)

## 3.SpringPop

./components/SpringPop

The spring pop is a pop-up window on clicked

![](./image/SpringPopAppOne.png)

Example code:

```javascript

<SpringPop type='switch' state={bot_size} functionMap={funcMap_bx} imageMap={imageMap_bx} >
    Layout
</SpringPop>

<SpringPop title='Tutorial' type='display'>
    -The text size button can be used to change size of
    text shown in caption space.<br />
    -There are 3 different graph can be toggled to help
    reflex the surrounding voices by clicking forth button<br />
    -For circular graph, try to drag it around.<br />
    -To stop captioning just click switch button for Recording. Also
    click again to resume captioning.<br />
    -To memorize textsize option, click save after choosing a proper size of the text.
</SpringPop>

```
* type: 'dislay':use for display information; 'switch': use to switch states
* state: used for switch type, state to be manipulated
* functionMap: used for switch type, an array stored onToggle functions
* imageMap: used for switch type, an array stored image.
* Title: used for display type, title
* disable: false by default, true to disable the button(bool)


## Hope all of you can enjoy React.js and keep learning it.
