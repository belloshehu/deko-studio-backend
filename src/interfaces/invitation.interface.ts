import { Schema } from "mongoose";

export interface IInvitation {
	sender: Schema.Types.ObjectId;
	receiver: Schema.Types.ObjectId;
	workspace: Schema.Types.ObjectId;
	message: string;
	status: string; // "pending" | "accepted" | "declined"
}
