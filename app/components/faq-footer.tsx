const faqs = [
  {
    question: "What should I bring?",
    answer:
      "Bring camping basics, layers for colder nights, sunscreen, swim gear, a water bottle, and anything you want for lake time or campfire lounging. The campsites have bear boxes, and there is no potable water, so bring the water you need."
  },
  {
    question: "What is the plan for food?",
    answer:
      "There will be shared cooking time, easy camp meals, and snack-friendly downtime. It helps to bring your own drinks plus anything specific you want for breakfast or late-night campfire snacks."
  },
  {
    question: "Do I need to hike?",
    answer:
      "No. The weekend is flexible, so you can join the Bull Run Lake trail plan, hang at camp, or stay by the water depending on energy and weather."
  },
  {
    question: "Can I swim or kayak?",
    answer:
      "Yes. Lake time is part of the plan, so bring swim stuff, towels, and any paddle gear you want to use if conditions are good."
  },
  {
    question: "What time should I arrive?",
    answer:
      "Friday is the best. Tallon and I will be there earlier on Friday, since we don't work or anything crazy like that.  Some will be leaving early Saturday morning.  It's up to you when you want to arrive, but earlier the better!"
  },
  {
    question: "What happens at night?",
    answer:
      "Getting shmooozy. Campfire time, marshmallows, some drinking, and a slower hang under the trees. Bring warm layers because it can cool off fast after sunset."
  }
];

export function FaqFooter() {
  return (
    <section className="faq-footer" aria-labelledby="faq-heading">
      <div className="faq-footer__header">
        <p className="card-kicker">FAQ</p>
        <h2 id="faq-heading">Frequently Asked Questions</h2>
        <p className="faq-footer__intro">Did you check the FAQs before asking?</p>
      </div>

      <div className="faq-grid">
        {faqs.map((item) => (
          <article className="faq-card" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

