import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

function Work() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        heading="My Work"
        paragraph="This is some of my recent work traveling the world."
      />
      {/* Portfolio Section */}
      <Portfolio />
    </div>
  );
}

export default Work;
