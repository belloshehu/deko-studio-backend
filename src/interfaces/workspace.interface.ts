import { TimeStamps } from "@/typing/util.typing";
import { Document, Schema } from "mongoose";

export interface IWorkspace extends Document<any>, TimeStamps {
	name: string;
	description: string;
	user: Schema.Types.ObjectId;
}
