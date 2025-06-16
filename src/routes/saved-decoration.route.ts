import SavedDecorationController from "@/controllers/saved-decoration.controller";
import { Routes } from "@/interfaces/route.interface";
import authMiddleware from "@/middlewares/auth.middleware";
import validationMiddleware from "@/middlewares/validation.middleware";
import { SavedDecorationValidationSchema } from "@/schemas/saved-decoration.validation.schema";
import { Router } from "express";

class SavedDecorationRoute implements Routes {
	public path = "/decorations";
	public router = Router();
	public savedDecorationController = new SavedDecorationController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.post(
			`${this.path}`,
			[
				authMiddleware,
				validationMiddleware(SavedDecorationValidationSchema, "body"),
			],
			this.savedDecorationController.createSavedDecoration
		);
		this.router.get(
			`${this.path}`,
			[authMiddleware],
			this.savedDecorationController.getAllSavedDecorations
		);
		this.router.get(
			`${this.path}/:id`,
			[authMiddleware],
			this.savedDecorationController.getSavedDecorationById
		);
		this.router.delete(
			`${this.path}/:id`,
			[authMiddleware],
			this.savedDecorationController.deleteSavedDecoration
		);
		this.router.patch(
			`${this.path}/:id`,
			[authMiddleware],
			this.savedDecorationController.updateSavedDecoration
		);
	}
}

export default SavedDecorationRoute;
