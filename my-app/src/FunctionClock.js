import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const translation = {
  it: {
    CURRENT_TIME: "L'ora attuale è",
  },
  en: {
    CURRENT_TIME: "Current time is",
  },
};

export function FunctionClock() {
  const [date, setDate] = useState(newDate());
  const language = useContext(LanguageContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(newDate());
    }, 1000);

    return () => {
      clearInterval(_interval);
    };
  });
  return (
    <p>
      {translation[language]["CURRENT_TIME"]} {date}
    </p>
  );
}
