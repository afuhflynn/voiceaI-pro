// lib/db.ts
import {
  User,
  Session,
  Account,
  Verification,
  Conversation,
  Message,
  WorkflowState,
  Lead,
  Appointment,
  Ticket,
  KnowledgeBase,
} from "@prisma/client";
import { prisma } from "../prisma";

type PartialEntity<T> = Partial<T>;

// === USER CRUD ===
export const getUserById = async (
  id: string
): Promise<PartialEntity<User> | null> =>
  prisma.user.findUnique({ where: { id } }).catch(() => null);

export const getUsers = () => prisma.user.findMany();
export const createUser = (data: User) => prisma.user.create({ data });
export const updateUserById = (
  id: string,
  data: Partial<Omit<User, "id" | "createdAt">>
) => prisma.user.update({ where: { id }, data });
export const deleteUserById = (id: string) =>
  prisma.user.delete({ where: { id } });

// === SESSION CRUD ===
export const getSessionsByUserId = (userId: string) =>
  prisma.session.findMany({ where: { userId } });
export const createSession = (data: Session) => prisma.session.create({ data });
export const deleteSessionById = (id: string) =>
  prisma.session.delete({ where: { id } });

// === ACCOUNT CRUD ===
export const getAccountsByUserId = (userId: string) =>
  prisma.account.findMany({ where: { userId } });
export const createAccount = (data: Account) => prisma.account.create({ data });
export const updateAccountById = (id: string, data: Partial<Account>) =>
  prisma.account.update({ where: { id }, data });
export const deleteAccountById = (id: string) =>
  prisma.account.delete({ where: { id } });

// === VERIFICATION CRUD ===
export const getVerificationById = (id: string) =>
  prisma.verification.findUnique({ where: { id } });
export const createVerification = (data: Verification) =>
  prisma.verification.create({ data });
export const deleteVerificationById = (id: string) =>
  prisma.verification.delete({ where: { id } });

// === CONVERSATION CRUD ===
export const getConversationById = (id: string) =>
  prisma.conversation.findUnique({ where: { id } });
export const getConversations = () => prisma.conversation.findMany();
export const createConversation = (data: Conversation) =>
  prisma.conversation.create({ data });
export const updateConversationById = (
  id: string,
  data: Partial<Omit<Conversation, "id" | "createdAt">>
) => prisma.conversation.update({ where: { id }, data });
export const deleteConversationById = (id: string) =>
  prisma.conversation.delete({ where: { id } });

// === MESSAGE CRUD ===
export const getMessagesByConversationId = (conversationId: string) =>
  prisma.message.findMany({ where: { conversationId } });
export const createMessage = (data: Message) => prisma.message.create({ data });
export const deleteMessageById = (id: string) =>
  prisma.message.delete({ where: { id } });

// === WORKFLOW STATE CRUD ===
export const getWorkflowStateByConversationId = (conversationId: string) =>
  prisma.workflowState.findUnique({ where: { conversationId } });
export const createWorkflowState = (data: WorkflowState) =>
  prisma.workflowState.create({ data });
export const updateWorkflowStateByConversationId = (
  conversationId: string,
  data: Partial<Omit<WorkflowState, "id" | "conversationId">>
) =>
  prisma.workflowState.update({
    where: { conversationId },
    data,
  });
export const deleteWorkflowStateById = (id: string) =>
  prisma.workflowState.delete({ where: { id } });

// === LEAD CRUD ===
export const getLeadById = (id: string) =>
  prisma.lead.findUnique({ where: { id } });
export const getLeads = () => prisma.lead.findMany();
export const createLead = (data: Lead) => prisma.lead.create({ data });
export const updateLeadById = (
  id: string,
  data: Partial<Omit<Lead, "id" | "createdAt">>
) => prisma.lead.update({ where: { id }, data });
export const deleteLeadById = (id: string) =>
  prisma.lead.delete({ where: { id } });

// === APPOINTMENT CRUD ===
export const getAppointmentById = (id: string) =>
  prisma.appointment.findUnique({ where: { id } });
export const getAppointments = () => prisma.appointment.findMany();
export const createAppointment = (data: Appointment) =>
  prisma.appointment.create({ data });
export const updateAppointmentById = (
  id: string,
  data: Partial<Omit<Appointment, "id">>
) => prisma.appointment.update({ where: { id }, data });
export const deleteAppointmentById = (id: string) =>
  prisma.appointment.delete({ where: { id } });

// === TICKET CRUD ===
export const getTicketById = (id: string) =>
  prisma.ticket.findUnique({ where: { id } });
export const getTickets = () => prisma.ticket.findMany();
export const createTicket = (data: Ticket) => prisma.ticket.create({ data });
export const updateTicketById = (
  id: string,
  data: Partial<Omit<Ticket, "id" | "createdAt">>
) => prisma.ticket.update({ where: { id }, data });
export const deleteTicketById = (id: string) =>
  prisma.ticket.delete({ where: { id } });

// === KNOWLEDGE ENTITY CRUD ===
export const getKnowledgeEntityById = (id: string) =>
  prisma.knowledgeEntity.findUnique({ where: { id } });
export const getKnowledgeEntities = () => prisma.knowledgeEntity.findMany();
export const createKnowledgeEntity = (data: KnowledgeEntity) =>
  prisma.knowledgeEntity.create({ data });
export const updateKnowledgeEntityById = (
  id: string,
  data: Partial<Omit<KnowledgeEntity, "id" | "createdAt">>
) => prisma.knowledgeEntity.update({ where: { id }, data });
export const deleteKnowledgeEntityById = (id: string) =>
  prisma.knowledgeEntity.delete({ where: { id } });
