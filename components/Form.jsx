const Form = () => {
  return (
    <div className="max-w-[1240px] h-screen mx-auto p-4">
      <h2 className="p-4 font-bold text-2xl text-center">
        Let's work together
      </h2>
      <form className="max-w-[600px] mx-auto flex flex-col gap-2">
        <div className="grid sm:grid-cols-2 gap-2">
          <input
            className="p-3 border shadow-lg"
            type="text"
            name="Name"
            placeholder="Name"
          />
          <input
            className="p-3 border shadow-lg"
            type="email"
            name="Email"
            placeholder="Email"
          />
        </div>
        <input
          className="p-3 border shadow-lg"
          type="text"
          name="Subject"
          placeholder="Subject"
        />
        <textarea
          className="p-3 border shadow-lg resize-none"
          cols={30}
          rows={10}
          placeholder="Message"
        ></textarea>
        <button className="p-3 border shadow-lg hover:bg-gray-900 hover:text-white duration-300" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
