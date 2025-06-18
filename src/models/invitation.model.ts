import { IInvitation } from "@/interfaces/invitation.interface";
import { model, Model } from "mongoose";
import { Schema } from "mongoose";

type InvitationModelType = Model<IInvitation>;

const InvitationSchema = new Schema<IInvitation, InvitationModelType>({
	sender: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	receiver: {
		type: Schema.Types.ObjectId,
		ref: "User",
		default: null,
		required: false,
	},
	workspace: {
		type: Schema.Types.ObjectId,
		ref: "Workspace",
		required: true,
	},
	message: {
		type: String,
		required: true,
		trim: true,
	},

	status: {
		type: String,
		enum: ["pending", "accepted", "declined"],
		default: "pending",
		required: true,
	},
});

const InvitationModel = model<IInvitation, InvitationModelType>(
	"Invitation",
	InvitationSchema
);

export default InvitationModel;
