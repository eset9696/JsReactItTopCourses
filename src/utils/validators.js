const validators = {
  text: (value) => {
    if (!value) return "field is reqired";

    const regexText = /^[^!>?<_\-$№#@]+$/;

    if (!regexText.test(value))
      return "Text should not contain !>?<_-$№#@ symbols!";

    return null;
  },

  email: (value) => {
    if (!value) return "field is reqired";

    if (!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      return "Invalid email";

    return null;
  },

  phone: (value) => {
    if (!value) return "field is reqired";

    if (!/^\+&[0-9-]+$/.test(value)) return "Invalid phone number";
  },

  password: (value) => {
    if (!value) return "field is reqired";

    if (value.length < 8) return "Password must be least 8 characters long!";

    return null;
  },

  number: (value) => {
    const trimmedValue = value.trim();
    if (!trimmedValue) return "field is reqired";

    const regexNumber = /^-?\d+([.,]\d+)?$/;

    if (!regexNumber.test(trimmedValue))
      return "Must be a valid number without letters or special symbols";
    return null;
  },
};

function validateForm(formData, form) {
  const validationErrors = {};

  form?.querySelectorAll("[data-validate]")?.forEach((input) => {
    const validationType = input?.dataset?.validate;

    const validator = validators[validationType];

    if (validator) {
      const value = formData[input?.name] || "";

      const errorMessage = validator(value);

      if (errorMessage) {
        validationErrors[input?.name] = errorMessage;
      }
    }
  });
  return validationErrors;
}

export default validateForm;
