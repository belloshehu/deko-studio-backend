import { ISavedDecoration } from "@/interfaces/saved-decoration.interface";
import { model, Model, Schema } from "mongoose";

type SavedDecorationModelType = Model<ISavedDecoration>;

const SavedDecorationSchema = new Schema<
	ISavedDecoration,
	SavedDecorationModelType
>(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		name: {
			type: String,
			required: false,
			trim: true,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: false,
		},
		workspace: {
			type: Schema.Types.ObjectId,
			ref: "Workspace",
			required: true,
		},
	},
	{ timestamps: true }
);

const SavedDecorationModel = model<ISavedDecoration, SavedDecorationModelType>(
	"SavedDecoration",
	SavedDecorationSchema
);
export default SavedDecorationModel;
