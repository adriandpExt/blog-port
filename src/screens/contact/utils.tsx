import * as yup from "yup";
import { ContactForm } from "./types";
import { LINKS } from "~/global/enum";

export const socialLinks = [
  {
    url: LINKS.facebook,
    iconName: "ic_facebook",
  },
  {
    url: LINKS.linkedin,
    iconName: "ic_linkedin",
  },
];

export const contactFormInitial: ContactForm = {
  fullname: "",
  email: "",
  message: "",
};

export const contactFormValidation = yup.object<ContactForm>({
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
