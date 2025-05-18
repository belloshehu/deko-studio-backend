import { z } from "zod";

export const InvitationValidationSchema = z.object({
	name: z.string().email(),
	message: z.string().min(5, "Message must be at least 5 characters long"),
	sender: z.string(),
	receiver: z.string(),
	workspace: z.string(),
	status: z.enum(["pending", "accepted", "declined"]),
});

export type IInvitationDataType = z.infer<typeof InvitationValidationSchema>;
