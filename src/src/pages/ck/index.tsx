import React, { useEffect } from "react";

export default function Home(): JSX.Element {
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    const data_to_send = {
      FormType: "CK redirect",
      Answers: [id],
      Questions: ["ID"],
    };

    fetch("https://forms-function.azurewebsites.net/api/FormsFunction", {
      body: JSON.stringify(data_to_send),
      method: "POST",
    });
    window.location.href = "https://branegames.itch.io/confidential-killings";
  }, []);
  return <div>Redirecting...</div>;
}
