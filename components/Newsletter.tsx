
"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function submit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!email.trim()) return;

    alert(
      "Rahmat! Yangiliklar obunangiz qabul qilindi."
    );

    setEmail("");
  }

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          <span className="section-kicker">
            TURKHUB
          </span>

          <h2>
            Yangiliklarni birinchi bo‘lib
            bilib oling.
          </h2>

          <p>
            Eng muhim yangiliklar, tahlillar
            va maxsus materiallarni elektron
            pochtangiz orqali oling.
          </p>

          <form
            className="newsletter-form"
            onSubmit={submit}
          >
            <input
              type="email"
              placeholder="Email manzilingiz"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />

            <button type="submit">
              Obuna bo‘lish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

