import { z } from "zod";

export const SavedDecorationValidationSchema = z.object({
	decorationName: z.string().email(),
	description: z.string().min(5, "Message must be at least 5 characters long"),
	user: z.string(),
	image: z.string(),
	workspace: z.string(),
});

export type ISavedDecorationDataType = z.infer<
	typeof SavedDecorationValidationSchema
>;
