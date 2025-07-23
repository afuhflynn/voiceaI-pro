// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// lib/db.ts — Expanded Prisma utilities
import { User, Session, Account, Verification } from "@prisma/client";

type PartialEntity<T> = Partial<T>;

// === USER CRUD ===
export const getUserById = async (
  id: string
): Promise<PartialEntity<User> | null> => {
  return prisma.user.findUnique({ where: { id } }).catch(() => null);
};

export const getUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

export const createUser = async (data: User): Promise<User> => {
  return prisma.user.create({ data });
};

export const updateUserById = async (
  id: string,
  data: Partial<Omit<User, "id" | "createdAt">>
): Promise<User> => {
  return prisma.user.update({ where: { id }, data });
};

export const deleteUserById = async (id: string): Promise<User> => {
  return prisma.user.delete({ where: { id } });
};

// === SESSION CRUD ===
export const getSessionsByUserId = async (
  userId: string
): Promise<Session[]> => {
  return prisma.session.findMany({ where: { userId } });
};
export const createSession = async (data: Session) => {
  return prisma.session.create({ data });
};
export const deleteSessionById = async (id: string) => {
  return prisma.session.delete({ where: { id } });
};

// === ACCOUNT CRUD ===
export const getAccountsByUserId = async (
  userId: string
): Promise<Account[]> => {
  return prisma.account.findMany({ where: { userId } });
};
export const createAccount = async (data: Account) => {
  return prisma.account.create({ data });
};
export const updateAccountById = async (id: string, data: Partial<Account>) => {
  return prisma.account.update({ where: { id }, data });
};
export const deleteAccountById = async (id: string) => {
  return prisma.account.delete({ where: { id } });
};

// === VERIFICATION CRUD ===
export const getVerificationById = async (
  id: string
): Promise<Verification | null> => {
  return prisma.verification.findUnique({ where: { id } });
};
export const createVerification = async (data: Verification) => {
  return prisma.verification.create({ data });
};
export const deleteVerificationById = async (id: string) => {
  return prisma.verification.delete({ where: { id } });
};
