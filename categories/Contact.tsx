// Imports

// Functions
function Contact() {
  return (
    <>
      <section className="page-padding-x page-padding-y bg-white" id="contact">
        <h2 className="font-bold text-2xl mb-4">Contact</h2>
        <p className="mb-6">Neem gerust contact met mij op.</p>
        <p className="mb-6">joeri.breedveld123@gmail.com</p>
        <ul>
          <li className="mb-4">
            <a
              className="text-primary underline hover:text-secondary"
              href="https://github.com/joeribreedveld"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li className="mb-4">
            <a
              className="text-primary underline hover:text-secondary"
              href="mailto:joeri.breedveld123@gmail.com"
              target="_blank"
            >
              Email
            </a>
          </li>
          <li className="mb-4">
            <a
              className="text-primary underline hover:text-secondary"
              href="https://www.linkedin.com/in/joeribreedveld/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

// Exports
export default Contact;
