export default function About() {
  return (
    <div className=" flex flex-col items-center">
      <h1 className="head_text blue_gradient">About</h1>
      <div className="mt-3 flex w-3/5 flex-col items-center">
        <p className="m-3 text-center text-xl ">
          <Fc>Welcome</Fc> to Masked Emotions, a safe space for you to express
          your deepest emotions and thoughts anonymously, while upholding
          dignity and respect for others.
        </p>
        <p className="text-center. m-3 text-xl">
          <Fc>O</Fc>ur mission is to create a supportive community where you can
          unmask your feelings and share your thoughts without fear or judgment.
          Our Vision
        </p>
        <p className="m-3 text-center text-xl ">
          At Masked Emotions, we text-centerbelieve in the power of emotional
          expression. We envision a world where individuals can freely share
          their innermost feelings, thoughts, and experiences, knowing that they
          are not alone in their emotions.
        </p>

        <div>
          <Ac>Our vision is to:</Ac>
        </div>

        <div className="m-6 grid grid-cols-6 gap-6">
          <div className="col-span-2 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow">
            <p
              className="m-3 text-center
         text-xl "
            >
              <Ac>Anonymous Posting</Ac>
              <br /> Write and share your emotions, thoughts, or stories without
              revealing your identity. You can unmask your thoughts without fear
              of judgment.
            </p>
          </div>

          <div className="col-span-2 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow">
            <p className="m-3 text-center text-xl">
              <Ac>
                Community Support <br />
              </Ac>{" "}
              Join a supportive community of individuals who can relate to your
              experiences. Engage in discussions, share advice, and provide
              encouragement to one another.
            </p>
          </div>

          <div className="col-span-2 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow ">
            <p className="m-3 text-center text-xl">
              <Ac>
                Emotional Resources <br />
              </Ac>
              Find valuable resources, articles, and tips on coping with various
              emotions and challenges. We &apos;re here to help you navigate
              life &apos;s ups and downs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Span = ({ children }) => (
  <span className="m-2 rounded bg-blue-100 px-2.5 py-0.5  text-2xl font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
    {children}
  </span>
);

const Fc = ({ children }) => <span className="text-3xl">{children}</span>;

const Ac = ({ children }) => (
  <span className="blue_gradient mb-8 text-3xl capitalize">{children}</span>
);
