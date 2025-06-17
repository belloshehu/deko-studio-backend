import { RequestWithUser } from "@/interfaces/auth.interface";
import SavedDecorationService from "@/services/saved-decoration.service";
import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";

class SavedDecorationController {
	savedDecorationService = new SavedDecorationService();

	// create a saved decoration
	createSavedDecoration = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const savedDecoration =
				await this.savedDecorationService.createSavedDecoration({
					...req.body,
					user: req?.user?._id,
				});
			res
				.status(StatusCodes.CREATED)
				.json({ data: savedDecoration, message: "Saved decoration created" });
		} catch (error) {
			next(error);
		}
	};

	// get all saved decorations by user
	getAllSavedDecorationsByWorkspace = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const { workspaceId } = req.params;
			const savedDecorations =
				await this.savedDecorationService.getAllSavedDecorationsByWorkspace(
					req?.user?._id,
					workspaceId as string
				);
			res.status(StatusCodes.OK).json({
				data: savedDecorations,
				message: "All saved decorations retrieved",
			});
		} catch (error) {
			next(error);
		}
	};

	// get a saved decoration by ID
	getSavedDecorationById = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const savedDecoration =
				await this.savedDecorationService.getSavedDecorationById(req.params.id);
			res.status(StatusCodes.OK).json({
				data: savedDecoration,
				message: "Saved decoration retrieved",
			});
		} catch (error) {
			next(error);
		}
	};

	// update a saved decoration by ID
	updateSavedDecoration = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const updatedSavedDecoration =
				await this.savedDecorationService.updateSavedDecoration(
					req.params.id,
					req.body
				);
			res.status(StatusCodes.OK).json({
				data: updatedSavedDecoration,
				message: "Saved decoration updated",
			});
		} catch (error) {
			next(error);
		}
	};

	// delete a saved decoration by ID
	deleteSavedDecoration = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const deletedSavedDecoration =
				await this.savedDecorationService.deleteSavedDecoration(req.params.id);
			res.status(StatusCodes.OK).json({
				data: deletedSavedDecoration,
				message: "Saved decoration deleted",
			});
		} catch (error) {
			next(error);
		}
	};
}

export default SavedDecorationController;
