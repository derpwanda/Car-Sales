# Notes: The Reducer Pattern/Redux

## Setup React and Redux

---

-   Install the necessary dependencies. This includes the redux dependencies:
    redux - the independent, standalone library that can be used any library/framework
    react-redux - connects the react application to redux
    `npm install redux react-redux`

-   Start by creating/setting up the store in the index.js OR wherever your root element is:
-   Import createStore from redux => `import { createStore } from 'redux'`
-   Create a const variable for the store and
-   Invoke the createStore function = `const store = createStore()`
-   Create a mock reducer to be held in the store (temporarily) to see if working:

```const tempReducer = (() => {
    return {
        title: "Hello from the Redux Store!"
    }
})
```

A reducer is a FUNCTION the returns an OBJECT that is our state tree

-   Import Provider from react-redux
-   Wrap the App component in the Provider Component
-   Pass the store object to the Provider store prop

## Connect Redux to the React Components

Create a component that will be "connected" to the Redux Store. (probably start with App.js, but there will likely be others!)
Import connect from react-redux
Instead of exporting the component, export the connect function call:
`export default connect(null, {})(App);`
`connect()` requires a function and an object. You will pass this information through connect later. Connect makes TWO CALLS: the first is the function & object, second is the component that we are connecting to.

The first function we will pass into connect is `mapStateToProps`.

`mapStateToProps` is a function that tells `connect` which pieces of state to pass to the component. It takes in state as an argument and returns an object. The properties in the returned object are what gets passed to the component as props.

```const mapStateToProps = () => {
    movies: state.movies,
    moviesToWatch: state.moviesToWatch,
    user: state.user
}
```

REMEMBER: There may be other components that will need to be connect to differing parts of your state object.

## Redux Actions

-   Actions in Redux are packets of information that describe events that have occured in the UI
-   In code, an action is simply an object
-   Actions are dispatched to the reducers, and the the reducers how to update the state tree

### Redux Data Flow:

1. Store sets the state and sends it to the UI
2. When an event occurs in the UI, the event is passed to an action creator
3. An action that describes the event is dispatched
4. The reducer that recieves the action that was dispatched updates the state tree in a predictable way
5. The UI receives the updated state tree

---

-   An action creator is a function that "creates" an action by returning an action object
-   An action type is created to avoid hidden bugs and is used as the `type` in the action
-   When the action creator is invoked and the action is returned, the action will be dispatched (under the hood) to the reducer.

```
export const ADD_MOVIE = "ADD_MOVIE"; //action type, passed to type in creator

(below: action creator which is a function)
export const addMovie = movieTitle => {
    return {
        type: ADD_MOVIES, //the action
        payload: payload
    }
}
```

### Setup ACTIONS

1. Create an action folder and file (/actions/actions.js)

2. add the necessary actions consts to the actions file.

3. now write your action creators

4. import those creators to the component

5. pass the creators to the component's state

6. use the action creators (probably in handlers and pass those handlers to components as needed)

7. remember to add action creators to the `connect` function object

(In the Car Sales project, you are shown what functions are needed in the components)

AT THIS POINT THE ACTIONS HAVE BEEN CREATED AND PASSED TO THE COMPONENTS. NOW WE NEED TO ADD THE LOGIC WITH REDUCERS. YOU MIGHT BE GETTING `TYPEERROR: IS NOT A FUNCTION` MESSAGES. THIS IS NORMAL. LETS KEEP GOING.

## REDUCERS
