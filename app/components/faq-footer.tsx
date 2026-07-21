const faqs = [
  {
    question: "What should I bring?",
    answer:
      "Camping stuff."
  },
  {
    question: "What is the plan for food?",
    answer:
      "Be on your own for food. Coordinate with others, but I don't want to coordinate a master food plan.  This could be groupchat stuff."
  },
  {
    question: "Do I need to hike?",
    answer:
      "No. Stay back at camp. Hiking is for the fit and brave, that may not be you."
  },
  {
    question: "Can I swim or kayak?",
    answer:
      "Yes. Encouraged.  Hoping Evan brings his kayak.  If not, he should let me know and I can see what I can do."
  },
  {
    question: "What time should I arrive?",
    answer:
      "Friday is the best. Tallon and I will be there earlier on Friday, since we don't work or anything crazy like that.  Some will be leaving early Saturday morning.  It's up to you when you want to arrive, but earlier the better!"
  },
  {
    question: "What happens at night?",
    answer:
      "Getting shmooozy. Campfire, marshmallows, some drinking, and a slower hang under the trees. Bring warm layers because it can cool off fast after sunset."
  },
  {
    question: "How much money do I owe Ponce?",
    answer:
      "That is a great question. The campsites were $120 total. Feel free to send me whatever the split is after the trip"
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

