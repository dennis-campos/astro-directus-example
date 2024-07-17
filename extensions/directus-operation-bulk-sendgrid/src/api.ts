// @ts-nocheck

import { defineOperationApi } from "@directus/extensions-sdk";
import sgMail from "@sendgrid/mail";

type Options = {
  text: string;
};

export default defineOperationApi<Options>({
  id: "operation-bulk-sendgrid",
  handler: async (
    { from, email_key, recipients, template_data, subject, template_id },
    { env, logger }
  ) => {
    try {
      logger.info(env.EMAIL_SENDGRID_API_KEY);
      sgMail.setApiKey(env.EMAIL_SENDGRID_API_KEY);
      let msg = {
        from: {
          email: from,
        },
        personalizations: [],
        template_id: template_id,
      };

      const rec = Array.isArray(recipients)
        ? recipients
        : JSON.parse(recipients);
      const dyn = Array.isArray(template_data)
        ? template_data
        : JSON.parse(template_data);

      function parseValues(recipient, key) {
        if (key.includes(".")) {
          let value = recipient;
          let fields = key.split(".");

          fields.forEach((f) => {
            if (value != null) {
              value = value[f];
            }
          });

          return value;
        } else {
          return recipient[key];
        }
      }

      rec.forEach((recipient) => {
        let email_address = parseValues(recipient, email_key);

        let personalization = {
          to: [{ email: email_address }],
          dynamic_template_data: {
            subject: subject,
          },
        };

        dyn.forEach((s) => {
          personalization.dynamic_template_data[s.var] = parseValues(
            recipient,
            s.key
          );
        });

        msg.personalizations.push(personalization);
      });

      logger.info(msg);

      return sgMail
        .send(msg)
        .then(() => logger.info("Email sent........."))
        .catch((error) => console.error("Sendgrid error: ", { error }));
    } catch (error) {
      logger.info("Error: ", error);
      console.error("SOME ERROR OCCURED HERE: ", { error });
    }
  },
});
