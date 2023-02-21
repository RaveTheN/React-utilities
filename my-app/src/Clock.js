import { Component } from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    CURRENT_TIME: "Current time is: ",
  },
  it: {
    CURRENT_TIME: "Sono le: ",
  },
};

export class Clock extends Component {
  state = {
    date: new Date(),
  }; //state is a special name, as it is its own thing, and we must use only "state" when we want to use it

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => ({
        date: new Date(),
      }));
    }, 1000);
  }
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(Language) => {
            return (
              <div>
                {Strings[Language].CURRENT_TIME}
                {this.state.date.toLocaleTimeString()}
              </div>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
