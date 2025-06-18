import { RequestWithUser } from "@/interfaces/auth.interface";
import WorkspaceService from "@/services/workspace.service";
import { NextFunction, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";

class WorkspaceController {
	public workspaceService = new WorkspaceService();

	// create workspace
	createWorkspace = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const workspaceData = req.body;
			const workspace = await this.workspaceService.createWorkspace({
				...workspaceData,
				user: req?.user?._id,
			});
			res
				.status(StatusCodes.CREATED)
				.json({ data: workspace, message: "Workspace created" });
		} catch (error) {
			next(error);
		}
	};

	// get all workspaces
	getAllWorkspaces = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const workspaces = await this.workspaceService.getAllWorkspaces(
				req.user?._id
			);
			res
				.status(StatusCodes.OK)
				.json({ data: workspaces, message: "Workspaces retrieved" });
		} catch (error) {
			next(error);
		}
	};

	// get workspace by ID
	getWorkspaceById = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const workspaceId = req.params.id;
			const workspace = await this.workspaceService.getWorkspaceById(
				workspaceId
			);
			res
				.status(StatusCodes.OK)
				.json({ data: workspace, message: "Workspace retrieved" });
		} catch (error) {
			next(error);
		}
	};

	// update workspace by ID
	updateWorkspace = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const workspaceId = req.params.id;
			const workspaceData = req.body;
			const updatedWorkspace = await this.workspaceService.updateWorkspace(
				workspaceId,
				workspaceData
			);
			res
				.status(StatusCodes.OK)
				.json({ data: updatedWorkspace, message: "Workspace updated" });
		} catch (error) {
			next(error);
		}
	};

	// delete workspace by ID
	deleteWorkspace = async (
		req: RequestWithUser,
		res: Response,
		next: NextFunction
	) => {
		try {
			const workspaceId = req.params.id;
			const deletedWorkspace = await this.workspaceService.deleteWorkspace(
				workspaceId
			);
			res
				.status(StatusCodes.OK)
				.json({ data: deletedWorkspace, message: "Workspace deleted" });
		} catch (error) {
			next(error);
		}
	};
}

export default WorkspaceController;
