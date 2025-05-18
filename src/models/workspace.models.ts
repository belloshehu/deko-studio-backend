import { IWorkspace } from "@/interfaces/workspace.interface";
import { model, Model, Schema } from "mongoose";

type WorkspaceModelType = Model<IWorkspace>;

const WorkspaceSchema = new Schema<IWorkspace, WorkspaceModelType>(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: [true, "Description is required"],
			trim: true,
		},
		user: {
			type: Schema.Types.ObjectId,
			required: [true, "User is required"],
			ref: "User",
		},
	},
	{ timestamps: true }
);

const WorkspaceModel = model<IWorkspace, WorkspaceModelType>(
	"Workspace",
	WorkspaceSchema
);
export default WorkspaceModel;
