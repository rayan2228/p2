import React from "react";

const About = () => {
  return (
    <section>
      <div className="py-[30px] bg-teal-800">Teall</div>
      <div className="py-[200px] bg-black">
        {" "}
        <h1 className="text-5xl font-bold text-white">Black</h1>
      </div>

      <div className="py-[200px] bg-white">
        <h1 className="text-5xl font-bold">White</h1>
      </div>

      <div className="py-[200px] bg-red-700">
        <h1 className="text-5xl font-bold">Red</h1>
      </div>
    </section>
  );
};

export default About;
