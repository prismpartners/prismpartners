"use server";

import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
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


type SendEmailStateType<T> = {
  data: T | null;
  success: boolean;
  errors: null | $ZodFlattenedError<T, string>;
}

export async function sendMessage(
  prevState: SendEmailStateType<MessageData>,
  formData: FormData
): Promise<SendEmailStateType<MessageData>> {

  return sendEmail<MessageData>(formData, MessageSchema, (messageData: MessageData) => ({
    from: `"Reach to Prism Partners" <${process.env.EMAIL_FROM}>`,
    cc: messageData.email,
    to: process.env.EMAIL_TO,
    subject: `Service Inquiry: ${messageData.serviceType} — From ${messageData.name}`,

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
  }))
}

const GetQuoteSchema = z.omit(FormSchema, {
  message: true,
});

export type GetQouteFormData = z.infer<typeof GetQuoteSchema>;

export async function sendGetQuoteMessage(
  prevState: SendEmailStateType<GetQouteFormData>,
  formData: FormData
): Promise<SendEmailStateType<GetQouteFormData>> {

  return sendEmail<GetQouteFormData>(formData, GetQuoteSchema, (getQuoteFormData: GetQouteFormData) => ({
    from: `"Get Quote From Prism Partners" <${process.env.EMAIL_FROM}>`,
    cc: getQuoteFormData.email,
    to: process.env.EMAIL_TO,
    subject: `Service Inquiry: ${getQuoteFormData.serviceType} — From ${getQuoteFormData.name}`,

    text: `
      You have received a new quote request.
      
      Client Details:
      - Name: ${getQuoteFormData.name}
      - Email: ${getQuoteFormData.email}
      - Phone: ${getQuoteFormData.phone}
      - Service Type: ${getQuoteFormData.serviceType}
      - Project Location: ${getQuoteFormData.projectLocation}
      - Budget Range: ${getQuoteFormData.budgetRange}
      
      Project Details:
      ${getQuoteFormData.projectDetails}
      
      -------------------------
      This email was generated from the Get Quote form on your website.
    `,

    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <h2 style="color: #2c3e50;">📩 New Quote Request</h2>
        
        <h3 style="margin-bottom: 8px;">Client Details</h3>
        <table style="border-collapse: collapse; width: 100%; margin-bottom: 16px;">
          <tr>
            <td style="padding: 6px 12px; font-weight: bold;">Name:</td>
            <td style="padding: 6px 12px;">${getQuoteFormData.name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 12px; font-weight: bold;">Email:</td>
            <td style="padding: 6px 12px;">
              <a href="mailto:${getQuoteFormData.email}" style="color: #3498db;">${getQuoteFormData.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 12px; font-weight: bold;">Phone:</td>
            <td style="padding: 6px 12px;">${getQuoteFormData.phone}</td>
          </tr>
          <tr>
            <td style="padding: 6px 12px; font-weight: bold;">Service Type:</td>
            <td style="padding: 6px 12px;">${getQuoteFormData.serviceType}</td>
          </tr>
          <tr>
            <td style="padding: 6px 12px; font-weight: bold;">Project Location:</td>
            <td style="padding: 6px 12px;">${getQuoteFormData.projectLocation}</td>
          </tr>
          <tr>
            <td style="padding: 6px 12px; font-weight: bold;">Budget Range:</td>
            <td style="padding: 6px 12px;">${getQuoteFormData.budgetRange}</td>
          </tr>
        </table>
    
        <h3 style="margin-bottom: 8px;">Project Details</h3>
        <p style="background: #f9f9f9; padding: 12px; border-radius: 6px; white-space: pre-line;">
          ${getQuoteFormData.projectDetails}
        </p>
    
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #777;">
          This email was generated from the <strong>Get Quote</strong> form on your website.
        </p>
      </div>
    `,
  }))
}

export async function sendEmail<T>(
  formData: FormData,
  Schema: z.ZodMiniObject,
  generateEmail: (data: T) => Mail.Options & Partial<SMTPTransport.Options>
): Promise<SendEmailStateType<T>> {
  const recievedData = { ...Object.fromEntries(formData) } as T

  try {
    const data = Schema.parse(recievedData) as T;

    await transporter.sendMail(generateEmail(data));

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
