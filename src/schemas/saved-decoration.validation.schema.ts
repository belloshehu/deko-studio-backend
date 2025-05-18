import { z } from "zod";

export const SavedDecorationValidationSchema = z.object({
	name: z.string().min(5, "Name must be at least 5 characters long"),
	description: z.string().optional(),
	user: z.string().optional(),
	image: z.string(),
	workspace: z.string(),
});

export type ISavedDecorationDataType = z.infer<
	typeof SavedDecorationValidationSchema
>;
