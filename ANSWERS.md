- [ ] Why would you use class component over function components (removing hooks from the question)?

A:
Class components can be "stateful" implementing logic and state, and can use lifecycle methods such as componentDidMount.
Functional components are "stateless" and simply accept data and render or display them.
- [ ] Name three lifecycle methods and their purposes.

A:
Mounting - A component is created or rendered for the first time
Updating - Updates the DOM when there is a change to prop or state
Unmounting - Called before the component is unmounted or destroyed, this is where clean-up functions would happen
- [ ] What is the purpose of a custom hook?

A: Custom hooks allow us to write DRY code by minimizing the stateful logic needed for our non-visual behavior. Custom hooks are also reusable and can be imported anywhere in your project.
- [ ] Why is it important to test our apps?

A: Automated testing allows us to identify bugs in our code much faster than if we were manually testing the app.  It will make our app stable and avoids breaking when used in a variety of situations. It also serves as legal documentation when handling a finished project over to a client.