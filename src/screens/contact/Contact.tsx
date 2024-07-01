import type { ContactForm } from "./types";

import { ReactElement } from "react";
import { useFormik } from "formik";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { AnimatedIcon, SvgIcons, TitlePage } from "~/components";
import { IconName } from "~/components/svg-icons/utils";
import theme from "~/theme";

import {
  contactFormInitial,
  contactFormValidation,
  socialLinks,
} from "./utils";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = (): ReactElement => {
  const handleLink = (url: string) => {
    window.open(url, "_blank");
  };

  const contactForm = useFormik<ContactForm>({
    initialValues: contactFormInitial,
    validationSchema: contactFormValidation,
    onSubmit: (e) => {
      toast.success("Submitted Successfully!");
      console.log("Form Values:", e);
    },
  });

  const renderForm = (): ReactElement => {
    return (
      <form onSubmit={contactForm.handleSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={12} lg={6}>
            <Stack gap={5}>
              <TextField
                name="fullname"
                label="Name"
                type="text"
                value={contactForm.values.fullname}
                onChange={contactForm.handleChange}
                onBlur={contactForm.handleBlur}
                error={
                  contactForm.touched.fullname &&
                  Boolean(contactForm.errors.fullname)
                }
                helperText={
                  contactForm.touched.fullname && contactForm.errors.fullname
                }
                fullWidth
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                value={contactForm.values.email}
                onChange={contactForm.handleChange}
                onBlur={contactForm.handleBlur}
                error={
                  contactForm.touched.email && Boolean(contactForm.errors.email)
                }
                helperText={
                  contactForm.touched.email && contactForm.errors.email
                }
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              name="message"
              label="Message"
              type="text"
              value={contactForm.values.message}
              onChange={contactForm.handleChange}
              onBlur={contactForm.handleBlur}
              error={
                contactForm.touched.message &&
                Boolean(contactForm.errors.message)
              }
              helperText={
                contactForm.touched.message && contactForm.errors.message
              }
              fullWidth
              multiline
              rows={5.2}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          sx={{
            width: 200,
            marginY: 5,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          Send Email
        </Button>
      </form>
    );
  };

  const renderSocialLinks = (): ReactElement => {
    return (
      <Stack gap={5} direction={"row"}>
        {socialLinks.map((item) => (
          <SvgIcons
            key={item.iconName}
            name={item.iconName as IconName}
            onClick={() => handleLink(item.url)}
          />
        ))}
      </Stack>
    );
  };

  const renderContactNumber = (): ReactElement => {
    return (
      <>
        <Stack gap={5} direction="row" alignItems="center">
          <Typography variant="h5" color={"GrayText"}>
            Reach me via
          </Typography>
          <SvgIcons name="ic_viber" height={40} width={40} />
          <Typography variant="h5" color={"GrayText"}>
            or
          </Typography>
          <SvgIcons name="ic_whatsapp" height={40} width={40} />
        </Stack>
        <Typography variant="h4">+63 926 391 2007</Typography>
      </>
    );
  };

  return (
    <Stack id="contact" sx={{ padding: 10, marginBottom: 5 }} gap={5}>
      <TitlePage title="contact." />

      <Grid container alignItems={"center"} spacing={5}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" color={"GrayText"}>
            Get in touch me via social media.
          </Typography>

          {renderSocialLinks()}
        </Grid>
        <Grid item xs={12} md={6}>
          {renderContactNumber()}
        </Grid>
      </Grid>

      <Divider />

      <Stack gap={3}>
        <Stack gap={2} direction={"row"} alignItems={"center"}>
          <AnimatedIcon icon="email" size={60} />
          <Typography variant="h5">Send me an email.</Typography>
        </Stack>
        {renderForm()}
      </Stack>
      <Divider />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </Stack>
  );
};

export default Contact;
