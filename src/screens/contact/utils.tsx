import * as yup from "yup";

export const socialLinks = [
  {
    url: "https://www.facebook.com/adrian.delprado.98/",
    iconName: "ic_facebook",
  },
  {
    url: "https://www.linkedin.com/in/adrian-del-prado-285aa81b8/",
    iconName: "ic_linkedin",
  },
];

export const contactFormInitial = {
  fullname: "",
  email: "",
  message: "",
};

export const contactFormValidation = yup.object({
  fullname: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message should be at least 10 characters"),
});
