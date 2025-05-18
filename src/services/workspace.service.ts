import HTTPException from "@/exceptions/http.exception";
import { IWorkspace } from "@/interfaces/workspace.interface";
import WorkspaceModel from "@/models/workspace.models";
import { isEmpty } from "@/utils/util";
import { StatusCodes } from "http-status-codes";

class WorkspaceService {
	public workspaceModel = WorkspaceModel;

	// Create a new workspace
	async createWorkspace(workspaceData: IWorkspace): Promise<IWorkspace> {
		const workspace = await this.workspaceModel.create(workspaceData);
		return workspace;
	}
	// Get all workspaces
	async getAllWorkspaces() {
		const workspaces = await this.workspaceModel.find();
		return workspaces;
	}
	// Get a workspace by ID
	async getWorkspaceById(workspaceId: string) {
		if (isEmpty(workspaceId)) {
			throw new HTTPException(
				StatusCodes.BAD_REQUEST,
				"Provide a workspace ID"
			);
		}

		const workspace = await this.workspaceModel.findById(workspaceId);
		if (!workspace) {
			throw new Error("Workspace not found");
		}
		return workspace;
	}

	// Update a workspace by ID
	async updateWorkspace(workspaceId: string, workspaceData: any) {
		if (isEmpty(workspaceId)) {
			throw new HTTPException(
				StatusCodes.BAD_REQUEST,
				"Provide a workspace ID"
			);
		}

		const updatedWorkspace = await this.workspaceModel.findByIdAndUpdate(
			workspaceId,
			workspaceData,
			{ new: true }
		);

		if (!updatedWorkspace) {
			throw new Error("Workspace not found");
		}

		return updatedWorkspace;
	}

	// Delete a workspace by ID
	async deleteWorkspace(workspaceId: string) {
		if (isEmpty(workspaceId)) {
			throw new HTTPException(
				StatusCodes.BAD_REQUEST,
				"Provide a workspace ID"
			);
		}

		const deletedWorkspace = await this.workspaceModel.findByIdAndDelete(
			workspaceId
		);

		if (!deletedWorkspace) {
			throw new Error("Workspace not found");
		}

		return deletedWorkspace;
	}
}

export default WorkspaceService;
