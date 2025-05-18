import App from "./app";

import "dotenv/config";

import IndexRoute from "./routes/index.route";
import AuthRoute from "@/routes/auth.route";
import UserRoute from "@/routes/user.route";
import WorkspaceRoute from "./routes/workspace.route";
import InvitationRoute from "./routes/invitation.route";
import SavedDecorationRoute from "./routes/saved-decoration.route";

const application = new App([
	new IndexRoute(),
	new AuthRoute(),
	new UserRoute(),
	new WorkspaceRoute(),
	new InvitationRoute(),
	new SavedDecorationRoute(),
]);

application.startServer();

export default application.app;
