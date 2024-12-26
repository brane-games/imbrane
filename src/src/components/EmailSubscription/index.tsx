import React, { useState } from "react";
import styles from "./styles.module.css";


export default function EmailSubscription(): JSX.Element {
    const [email, setEmail] = React.useState<string>("");
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    function handleSubscribe(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        // check if it's valid email
        if (!email.includes("@")) {
            setErrorMessage("Please enter a valid email address.");
            return;
        } else {
            subscribeToEmail(email);
            setErrorMessage("Thank you for subscribing!");
        }
    }

    return (
        <section className={styles.centered}>
            <div className={styles.container}>
                <p>Subscribe to BRANE newsletter.</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}>
                    </input>
                    <button onClick={handleSubscribe} className={styles.button}>Subscribe</button>
                </div>
                <p>{errorMessage}</p>
            </div>
        </section>
    );
}
function subscribeToEmail(email: string): void {
    const url = "https://branefunction.azurewebsites.net/api/subscribe"
    fetch(url, {
        method: "PUT",
        body: JSON.stringify({ email: email, source: "imbrane.com", subject: "BRANE" }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}