import { Hello } from "./Components/Hello"
import { Greetings } from "./Components/Greetings"
import { Counter } from "./Components/Counters/Counter";
import { RedBox } from "./Components/Styling/InlineStyling";
import { ModularStyling } from "./Components/Styling/ModularStyling";

// main component
export function App() {

  return (
    <div>
      <Hello />
      {/* sending data to child component */}
      <checkProps />
      <Greetings
        firstname={"Harry"}
        lastname={"Potter"}
        school={"Hogwarts"}
        doSomething={() => console.log("Did something.")}
        image={<img src="https://www.suss.edu.sg/images/default-source/default-album/logo-with-tagline.png" alt="" />}
      >
        {/* things here gets sent to child component in props.children */}
      </Greetings>
      <br /><br /><br />
      <Counter></Counter>
      <br /><br /><br />
      <RedBox size={100} />
      <br /><br /><br />
      <ModularStyling />
      <br /><br /><br />
    </div>
  );
}


