import Modal from "../ui/Modal/Modal";

const SignInModal = ({isOpen, onClose}) => {
    
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      title="Вход в приложение"
    >
      <form action="#">
        <div className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="full_name">Your login</label>
            <input
              type="text"
              name="login"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              defaultValue=""
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              defaultValue=""
              placeholder="email@domain.com"
            />
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
