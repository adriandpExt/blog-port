import {
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { SvgIcons, TitlePage } from "~/components";
import {
  contactFormInitial,
  contactFormValidation,
  socialLinks,
} from "./utils";
import { IconName } from "~/components/svg-icons/utils";
import { useFormik } from "formik";

const Contact = (): ReactElement => {
  const handleLink = (url: string) => {
    window.open(url, "_blank");
  };

  const contactForm = useFormik({
    initialValues: contactFormInitial,
    validationSchema: contactFormValidation,
    onSubmit: (e) => console.log(e),
  });

  return (
    <Stack id="contact" sx={{ padding: 10, marginBottom: 5 }} gap={5}>
      <TitlePage title="contact." />
      <Typography variant="h5" color={"GrayText"}>
        Get in touch me via social media or email.
      </Typography>
      <Stack gap={5} direction={"row"}>
        {socialLinks.map((item) => (
          <SvgIcons
            key={item.iconName}
            name={item.iconName as IconName}
            onClick={() => handleLink(item.url)}
          />
        ))}
      </Stack>
      <Divider />
      <Stack gap={3}>
        <Typography variant="h5">Send me an email.</Typography>

        <form onSubmit={contactForm.handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
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
                    contactForm.touched.email &&
                    Boolean(contactForm.errors.email)
                  }
                  helperText={
                    contactForm.touched.email && contactForm.errors.email
                  }
                  fullWidth
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
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
            sx={{ width: 200, marginY: 5 }}
          >
            Send Email
          </Button>
        </form>
      </Stack>
    </Stack>
  );
};

export default Contact;
