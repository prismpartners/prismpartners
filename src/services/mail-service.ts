"use server";

import nodemailer from "nodemailer";
import * as z from "zod/mini";
import { $ZodFlattenedError } from "zod/v4/core";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const FormSchema = z.object({
  name: z.string(),
  email: z.email("Must be a valid email"),
  phone: z
    .string()
    .check(
      z.length(11, "Length must be 11"),
      z.startsWith("01", "Phone number must start with 01")
    ),
  serviceType: z.string(),
  message: z.string(),
  projectLocation: z.string(),
  budgetRange: z.string(),
  projectDetails: z.string(),
});

const MessageSchema = z.omit(FormSchema, {
  projectLocation: true,
  budgetRange: true,
  projectDetails: true,
});

export type MessageData = z.infer<typeof MessageSchema>;


type SendMessageStateType = {
  data: MessageData | null;
  success: boolean;
  errors: null | $ZodFlattenedError<MessageData, string>;
}

export async function sendMessage(
  prevState: SendMessageStateType,
  formData: FormData
): Promise<SendMessageStateType> {
  const recievedData = { ...Object.fromEntries(formData) } as MessageData

  try {
    const messageData = MessageSchema.parse(recievedData);


    const subject = `Service Inquiry: ${messageData.serviceType} — From ${messageData.name}`;

    await transporter.sendMail({
      from: `"Reach to Prism Partners" <${process.env.EMAIL_FROM}>`,
      cc: messageData.email,
      to: process.env.EMAIL_TO,
      subject,

      text: `
        You have received a new service inquiry.
        
        Details:
        - Name: ${messageData.name}
        - Email: ${messageData.email}
        - Phone: ${messageData.phone || "N/A"}
        - Service Type: ${messageData.serviceType}
        
        Message:
        ${messageData.message}
        
        ---------------------
        This email was sent via the Reach to Prism Partners contact form.
      `,

      html: `
        <h2>New Service Inquiry</h2>
        <p><strong>Name:</strong> ${messageData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${messageData.email}">${messageData.email}</a></p>
        <p><strong>Phone:</strong> ${messageData.phone || "N/A"}</p>
        <p><strong>Service Type:</strong> ${messageData.serviceType}</p>
        <hr>
        <h3>Message</h3>
        <p>${messageData.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <small>This email was sent via the Reach to Prism Partners contact form.</small>
      `,
    });

    return { data: null, success: true, errors: null };
  } catch (error) {
    console.error("Validation or unexpected error:", error);

    if (error instanceof z.core.$ZodError) {
      return {
        data: recievedData,
        success: false,
        errors: {
          formErrors: [],
          fieldErrors: z.flattenError(error).fieldErrors,
        },
      };
    }

    return {
      data: recievedData,
      success: false,
      errors: {
        formErrors: ["Error occured while sending message"],
        fieldErrors: {},
      },
    };
  }
}
