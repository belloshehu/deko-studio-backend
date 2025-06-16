import { z } from "zod";

export const WorkspaceValidationSchema = z.object({
	name: z.string(),
	description: z.string().optional(),
	user: z.string(),
});

export type IWorkspaceDataType = z.infer<typeof WorkspaceValidationSchema>;
