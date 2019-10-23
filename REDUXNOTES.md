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

    ```
        const reducer = (() => {
        return {
            title: "Hello from the Redux Store!"
        }
    })
    ```

-   Pass the reducer into the store

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

AT THIS POINT THE ACTIONS HAVE BEEN CREATED AND PASSED TO THE COMPONENTS. NOW WE NEED TO ADD THE LOGIC WITH REDUCERS. YOU MIGHT BE GETTING `TYPEERROR: IS NOT A FUNCTION` MESSAGES. THIS IS NOT NORMAL. FIX THEM.

## Prepare for REDUCERS

At this point we are still using a temporary reducer. Let's update our reducer to use our initial state that is currently located in the App.

1. Create an reducer folder and file (reducers/reducers.js)
2. in the file add the data to a variable `const initialState`. There should be no more state data in your component
3. Import the necessary action type variables
4. Create a simple reducer like we did at the start of this document. Remember to export it.

    ```
    export const reducer = (state = initialState) => {
        console.log("reducer")

    }
    ```

5. In index.js or wherever your `store` is, import reducer to that file.
6. Back in reducers.js, pass `state=initialState` to the reducer.
7. Pass the state object to components as needed. like you did with action creators.

YOU WILL RECIEVE AN ERROR SAYING STATE IS UNDEFINED. WE NEED TO ADD OUR ACTION and SWITCH/CASE. LET'S KEEP GOING.

## REDUCERS

-   A reducer is a FUNCTION the returns an OBJECT that is our state tree
-   Reducers are pure functions
-   Reducers take in the current state tree and an action as arguments
-   Using a switch/case to check the action type of the dispatched action, create an updated state tree based on the action type and the action payload
-   Each case in teh switch statement returns a new, updated state tree triggering the UI to re-render with the new data!

1. In the reducer function, along with state with its default value of initialState, pass in the dispatched action
2. Add a switch statement and checking for the action type
3. Make a case for each action type
4. Update and return the state tree
5. For default (always needed) return state untouched

```
export const reducer = (state = initialState, action) => {
    console.log("reducer function", action)
    switch (action.type) {
        case ADD_FEATURE:
            return {<!-- add logic -->};
        case REMOVE_FEATURE:
            return {<!-- add logic -->};
        default:
            return state;
    }
}
```
