import HTTPException from "@/exceptions/http.exception";
import InvitationModel from "@/models/invitation.model";
import { IInvitationDataType } from "@/schemas/invitation.validation.schema";
import { StatusCodes } from "http-status-codes";

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

	public getAllInvitations = async () => {
		const invitations = await this.invitationModel.find();
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

	cancelInvitation = async (id: string) => {
		const invitation = await this.invitationModel.findByIdAndDelete(id);
		if (!invitation) {
			throw new HTTPException(StatusCodes.BAD_REQUEST, "Invitation not found");
		}
		return invitation;
	};
}
