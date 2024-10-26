import Modal from "../ui/Modal/Modal";
import useForm from "../../hooks/useForm";

const SignInModal = ({ isOpen, onClose }) => {
  const { formValues, formErrors, handleChange, resetForm } = useForm({});

  const handleSubmit = (event) => {
    event?.preventDefault();
    console.log("formValues", formValues);

    resetForm && resetForm();
    onClose && onClose();
  };

  const handleModalClose = () => {
    onClose && onClose();
    resetForm && resetForm();
  };

  return (
    <Modal onClose={handleModalClose} isOpen={isOpen} title="Вход в приложение">
      <form action="#" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="full_name">Your login</label>
            <input
              type="text"
              name="login"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={formValues?.login || ""}
              data-validate="text"
              onChange={handleChange}
              placeholder="Your login"
              required
            />
            <span className="text-red-500 text-xs italic mt-2">
              {formErrors?.login}
            </span>
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={formValues?.email || ""}
              data-validate="email"
              onChange={handleChange}
              placeholder="email@domain.com"
              required
            />
            <span className="text-red-500 text-xs italic mt-2">
              {formErrors?.email}
            </span>
          </div>

          <div className="mb-4 flex justify-end">
            <button className="border-2 border-indigo-500 bg-indigo-500 text-white font-medium py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

SignInModal.displayName = "SignInModal";

export default SignInModal;
