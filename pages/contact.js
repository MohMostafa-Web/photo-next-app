import Hero from "../components/Hero";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        heading="Contact"
        paragraph="Submit the form below for more work and quotes."
      />
      {/* Form Section */}
      <Form />
    </div>
  );
};

export default Contact;
