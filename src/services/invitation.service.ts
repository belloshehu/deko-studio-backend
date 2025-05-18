import HTTPException from "@/exceptions/http.exception";
import { IInvitation } from "@/interfaces/invitation.interface";
import InvitationModel from "@/models/invitation.model";
import { IInvitationDataType } from "@/schemas/invitation.validation.schema";
import { StatusCodes } from "http-status-codes";
import { Schema } from "mongoose";

class InvitationService {
	invitationModel = InvitationModel;

	public createInvitation = async (invitationData: IInvitationDataType) => {
		if (!invitationData) {
			throw new HTTPException(
				StatusCodes.BAD_GATEWAY,
				"Invalid invitation data"
			);
		}

		if (invitationData.sender === invitationData.receiver) {
			throw new HTTPException(
				StatusCodes.BAD_REQUEST,
				"Sender and receiver cannot be the same"
			);
		}
		const invitation = await this.invitationModel.create(invitationData);
		return invitation;
	};

	public getAllInvitations = async (
		senderId: string
	): Promise<IInvitation[] | null> => {
		if (!senderId) {
			throw new HTTPException(StatusCodes.BAD_REQUEST, "Sender ID is required");
		}
		const invitations = await this.invitationModel.find({ sender: senderId });
		return invitations;
	};

	public getInvitationById = async (id: string) => {
		const invitation = await this.invitationModel.findById(id);
		if (!invitation) {
			throw new HTTPException(StatusCodes.BAD_REQUEST, "Invitation not found");
		}
		return invitation;
	};

	// accept invitation
	acceptInvitation = async (id: string) => {
		const invitation = await this.invitationModel.findByIdAndUpdate(
			id,
			{ status: "accepted" },
			{ new: true }
		);
		if (!invitation) {
			throw new HTTPException(StatusCodes.BAD_REQUEST, "Invitation not found");
		}
		return invitation;
	};

	rejectInvitation = async (id: string, userId: Schema.Types.ObjectId) => {
		const invitation = await this.invitationModel.findOne({
			_id: id,
			receiver: userId,
		});
		if (!invitation) {
			throw new HTTPException(StatusCodes.BAD_REQUEST, "Invitation not found");
		}

		if (invitation.sender.toString() === userId.toString()) {
			throw new HTTPException(
				StatusCodes.BAD_REQUEST,
				"You cannot reject your own invitation"
			);
		}

		invitation.status = "declined";
		await invitation.save();
		return invitation;
	};

	cancelInvitation = async (id: string) => {
		const invitation = await this.invitationModel.findByIdAndDelete(id);
		if (!invitation) {
			throw new HTTPException(StatusCodes.BAD_REQUEST, "Invitation not found");
		}
		return invitation;
	};
}

export default InvitationService;
