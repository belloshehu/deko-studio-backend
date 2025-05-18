import InvitationController from "@/controllers/invitation.controller";
import { Routes } from "@/interfaces/route.interface";
import authMiddleware from "@/middlewares/auth.middleware";
import validationMiddleware from "@/middlewares/validation.middleware";
import { InvitationValidationSchema } from "@/schemas/invitation.validation.schema";
import { Router } from "express";

class InvitationRoute implements Routes {
	public path = "/invitations";
	public router = Router();
	public invitationController = new InvitationController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.post(
			`${this.path}`,
			[
				authMiddleware,
				validationMiddleware(InvitationValidationSchema, "body"),
			],
			this.invitationController.createInvitation
		);
		this.router.get(
			`${this.path}`,
			[authMiddleware],
			this.invitationController.getAllInvitations
		);
		this.router.get(
			`${this.path}/:id`,
			[authMiddleware],
			this.invitationController.getInvitationById
		);
		this.router.patch(
			`${this.path}/:id/reject`,
			[authMiddleware],
			this.invitationController.rejectInvitation
		);

		this.router.patch(
			`${this.path}/:id`,
			[authMiddleware],
			this.invitationController.acceptInvitation
		);
		this.router.delete(
			`${this.path}/:id`,
			[authMiddleware],
			this.invitationController.cancelInvitation
		);
	}
}

export default InvitationRoute;
