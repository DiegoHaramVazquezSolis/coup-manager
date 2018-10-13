import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { userTeamReducer } from "./userTeamReducer";
import { resultReducer } from "./resultReducer";
import { statisticReducer } from "./statisticReducer";
import { teamsReducer } from "./teamsReducer";
import { chatReducer } from "./chatReducer";
import { teamMembersReducer } from "./teamMembersReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    userTeam: userTeamReducer,
    result: resultReducer,
    statistic: statisticReducer,
    teams: teamsReducer,
    chat: chatReducer,
    members: teamMembersReducer
});