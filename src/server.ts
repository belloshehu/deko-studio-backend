import App from "./app";

import "dotenv/config";

import IndexRoute from "./routes/index.route";
import AuthRoute from "@/routes/auth.route";
import UserRoute from "@/routes/user.route";
import WorkspaceRoute from "./routes/workspace.route";

const application = new App([
	new IndexRoute(),
	new AuthRoute(),
	new UserRoute(),
	new WorkspaceRoute(),
]);

application.startServer();

export default application.app;
