function About() {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-3xl my-5">About Us</h1>
      <div className="bg-blue-100/80 rounded-xl p-10  sm:h-96 flex sm:flex-row flex-col sm:gap-0 gap-10 items-center justify-center">
        <h2 className="text-7xl text-center font-extrabold">
          Making Shopping easier
        </h2>
        <p className="text-gray-800 text-center sm:text-left">
          Multinational technology company focusing on e-commerce, cloud
          computing, online advertising, digital streaming, and artificial
          intelligence.
          <br />
          It is considered one of the Big Five American technology companies,
          alongside Alphabet, Apple, Meta and Microsoft.
        </p>
      </div>
    </div>
  );
}

export default About;
