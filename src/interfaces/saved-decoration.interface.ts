import { TimeStamps } from "@/typing/util.typing";
import { Document, Schema } from "mongoose";

export interface ISavedDecoration extends Document<any>, TimeStamps {
	user: Schema.Types.ObjectId;
	name: string;
	image: string;
	description: string;
	workspace: Schema.Types.ObjectId;
}

export interface ISavedDecorationMethodsTypes {
	compareDecorationName: (decorationName: string) => Promise<boolean>;
	getSavedDecoration: () => ISavedDecoration;
}
