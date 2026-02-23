import {
  SignInButton,
  SignedOut,
  UserButton,
  SignUpButton,
} from "@clerk/clerk-react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome to the home page </h1>

      <SignedOut>
        <SignInButton mode="modal" />
        {/* <SignUpButton /> */}
      </SignedOut>

      {/* <SignedIn>
        <SignedOut  />
      </SignedIn> */}

      <UserButton />
    </>
  );
}

export default App;
