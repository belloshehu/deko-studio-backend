import { RequestWithUser } from "@/interfaces/auth.interface";

import InvitationService from "@/services/invitation.service";
import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";

class InvitationController {
	invitationModel = new InvitationService();

	// create new invitation
	public createInvitation = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const invitationData = req.body;
			const invitation = await this.invitationModel.createInvitation({
				...invitationData,
				sender: req.user?._id,
			});
			res
				.status(StatusCodes.CREATED)
				.json({ data: invitation, message: "Invitation created" });
		} catch (error) {
			next(error);
		}
	};

	// get all invitations by sender
	public getAllInvitations = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const invitations = await this.invitationModel.getAllInvitations(
				req.user?._id
			);
			res
				.status(StatusCodes.OK)
				.json({ data: invitations, message: "All invitations" });
		} catch (error) {
			next(error);
		}
	};

	// get invitation by id
	public getInvitationById = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const { id } = req.params;
			const invitation = await this.invitationModel.getInvitationById(id);
			res.status(StatusCodes.OK).json({ data: invitation });
		} catch (error) {
			next(error);
		}
	};

	// accept invitation
	public acceptInvitation = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const { id } = req.params;
			const invitation = await this.invitationModel.acceptInvitation(id);
			res.status(StatusCodes.OK).json({ data: invitation });
		} catch (error) {
			next(error);
		}
	};

	// reject invitation
	public rejectInvitation = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const { id } = req.params;
			const invitation = await this.invitationModel.rejectInvitation(
				id,
				req.user?._id
			);
			res.status(StatusCodes.OK).json({ data: invitation });
		} catch (error) {
			next(error);
		}
	};

	// cancel invitation
	public cancelInvitation = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const { id } = req.params;
			const invitation = await this.invitationModel.cancelInvitation(id);
			res.status(StatusCodes.OK).json({ data: invitation });
		} catch (error) {
			next(error);
		}
	};
}

export default InvitationController;
