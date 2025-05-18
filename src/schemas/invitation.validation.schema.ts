import { z } from "zod";

export const InvitationValidationSchema = z.object({
	name: z.string().min(5, "Name must be at least 5 characters long"),
	message: z.string().min(5, "Message must be at least 5 characters long"),
	sender: z.string().optional(),
	receiver: z.string(),
	workspace: z.string(),
	status: z.enum(["pending", "accepted", "declined"]).optional(),
});

export type IInvitationDataType = z.infer<typeof InvitationValidationSchema>;
