import { FaQuestion } from "react-icons/fa";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "What is a SAAS platform?",
      answer:
        "SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.",
    },
    {
      id: 2,
      question: "How does billing work?",
      answer:
        "We offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
    },
    {
      id: 3,
      question: "Can I get a refund for my subscription?",
      answer:
        "We offers a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.",
    },
    {
      id: 4,
      question: "How do we compare to other similar services?",
      answer:
        "This platform is a highly reliable and feature-rich service that offers a wide range of tools and functionality. It is competitively priced and offers a variety of billing options to suit different needs and budgets.",
    },
  ];

  return (
    <section className="mt-24 flex md:w-8/12 md:mx-auto mx-4 justify-between md:flex-row flex-col">
      <div className="py-8 ">
        <div className="text-center">
          <FaQuestion className="text-[32px] text-primary mx-auto" />
          <h1 className="font-semibold text-[28px] w-8/12 mx-auto my-4">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <div className=" px-5 ">
        <div className="grid divide-y divide-neutral-200  mx-auto mt-8">
          {faqData.map((faq) => (
            <div key={faq.id} className="py-4">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="w-96">{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 w-96">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
