//* Exercise

//? 1.  Refactor the “about” and “footer” sections by creating a component for each. Make sure everything works. Hint, you can look at the src/components/Header.js as an example.

//? 2.  Refactor the navbar by creating a Component. Pass the dependencies (toggleMenu in this case) via props. Make sure everything works by clicking on the "Training" button at the top right of the screen. Hint, you can look at the src/components/Header.js as an example (heads up, use curly brackets to pass a prop as a function)

//? 3.  Refactor the books section in App.js by creating a new component called Books. The <Books> component will have the JSX related to books. This task is a stepping stone, keep all the state in <App> and pass any needed state from <App> to <Books> via props. You'll refactor and improve this code again in the next task. Make sure everything works.

//? 4.  Is there any state in App.js that should be in the <Books> component? Refactor <Books> if appropriate.

//? 5.  Break <Books> down into two smaller components: <BookList> and <BookFilter>. <BookList> will be responsible for displaying the books. <BookFilter> will be responsible for filtering the books. Is there any state in <Books> that should be moved into <BookList> or <BookFilter>?

//! 🏋️‍♀️ Bonus exercise
//? Can we move the isMenuOpen state inside the menu? Does it conflict with the idea of "lifting state up".
//? If you look at the React Profiler when you open and close the menu, is the whole app being rendered? If so, how can we avoid that and still lift the state up?
