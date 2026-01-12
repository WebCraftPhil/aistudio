import { Resend } from "resend";
import { InviteEmail } from "../emails/invite-email";
import { ResetPasswordEmail } from "../emails/reset-password-email";
import { VerifyEmail } from "../emails/verify-email";
import { WelcomeEmail } from "../emails/welcome-email";
import { siteConfig } from "./siteconfig";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(to: string, name: string) {
  const { data, error } = await resend.emails.send({
    from: siteConfig.email.from,
    to,
    subject: `Welcome to ${siteConfig.name}!`,
    react: WelcomeEmail({ name }),
  });

  if (error) {
    console.error("Failed to send welcome email:", error);
    throw new Error(`Failed to send welcome email: ${error.message}`);
  }

  return data;
}

export async function sendInviteEmail(
  to: string,
  inviterName: string,
  workspaceName: string,
  inviteLink: string
) {
  const { data, error } = await resend.emails.send({
    from: siteConfig.email.from,
    to,
    subject: `${inviterName} invited you to join ${workspaceName} on ${siteConfig.name}`,
    react: InviteEmail({ inviterName, workspaceName, inviteLink }),
  });

  if (error) {
    console.error("Failed to send invite email:", error);
    throw new Error(`Failed to send invite email: ${error.message}`);
  }

  return data;
}

export async function sendVerificationEmail(
  to: string,
  name: string,
  verifyLink: string
) {
  const { data, error } = await resend.emails.send({
    from: siteConfig.email.from,
    to,
    subject: `Verify your email for ${siteConfig.name}`,
    react: VerifyEmail({ name, verifyLink }),
  });

  if (error) {
    console.error("Failed to send verification email:", error);
    throw new Error(`Failed to send verification email: ${error.message}`);
  }

  return data;
}

export async function sendPasswordResetEmail(
  to: string,
  name: string,
  resetLink: string
) {
  const { data, error } = await resend.emails.send({
    from: siteConfig.email.from,
    to,
    subject: `Reset your password for ${siteConfig.name}`,
    react: ResetPasswordEmail({ name, resetLink }),
  });

  if (error) {
    console.error("Failed to send password reset email:", error);
    throw new Error(`Failed to send password reset email: ${error.message}`);
  }

  return data;
}
