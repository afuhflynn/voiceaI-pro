"use server";

import { getSessionCookie } from "better-auth/cookies";
import { NextRequest } from "next/server";
import { auth } from "../auth";
import { headers } from "next/headers";
import { User } from "better-auth";

export async function getServerSession(req: NextRequest): Promise<boolean> {
  const sessionCookie = getSessionCookie(req);
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isValidSession =
    session?.session && session.user && sessionCookie ? true : false;

  return isValidSession;
}

export const getValidSession = async (): Promise<{
  isValid: boolean;
  user?: User;
}> => {
  const result = await auth.api.getSession({
    headers: await headers(),
  });

  const isValid = result?.session && result?.user ? true : false;
  return { isValid, user: result?.user };
};
