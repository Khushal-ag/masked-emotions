export default function About() {
  return (<div className=" bg-gradient-to-r from-cyan-100 to-blue-100 flex flex-col items-center">
  <h1 className=" text-5xl font-extrabold dark:text-black mt-4 ">
    About <Span className="skew-x-12">Us</Span>
  </h1>
  <div className="flex flex-col mt-3 w-3/5 items-center">
    <p className="m-3 text-xl text-center ">
      <Fc>Welcome</Fc>
       to Masked Emotions, a safe space for you to express your
      deepest emotions and thoughts anonymously, while upholding dignity and
      respect for others.
    </p>
    <p className="m-3 text-xl text-center">
      <Fc>O</Fc>ur mission is to create a supportive community where you can
      unmask your feelings and share your thoughts without fear or judgment.
      Our Vision
    </p>
    <p className="m-3 text-xl text-center">
      At Masked Emotions, we text-centerbelieve in the power of emotional
      expression. We envision a world where individuals can freely share
      their innermost feelings, thoughts, and experiences, knowing that they
      are not alone in their emotions.
    </p>

    <div>
      <Span>
        <Ac>Our vision is to:</Ac>
      </Span>
    </div>

    <div className="grid grid-cols-6 gap-6 m-6">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow col-span-2">
        <p
          className="m-3 text-xl 
         text-center "
        >
          <Ac>Anonymous Posting</Ac>
          <br /> Write and share your emotions, thoughts, or stories without
          revealing your identity. You can unmask your thoughts without fear
          of judgment.
        </p>
      </div>

      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow col-span-2">
        <p className="m-3 text-xl text-center">
          <Ac>
            Community Support <br />
          </Ac>{" "}
          Join a supportive community of individuals who can relate to your
          experiences. Engage in discussions, share advice, and provide
          encouragement to one another.
        </p>
      </div>

      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow col-span-2 ">
        <p className="m-3 text-xl text-center">
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
<span className="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
{children}
</span>
);

const Fc = ({ children }) => <span className="text-3xl">{children}</span>;

const Ac = ({ children }) => (
<span className="text-3xl capitalize m-3">{children}</span>
);
