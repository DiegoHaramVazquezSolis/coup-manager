import {database} from '../firebase';

export const usersRef = database.ref("Users");
export const teamsRef = database.ref("Teams");
export const resultsRef = database.ref("Results");
export const matchesRef = database.ref("Matches");
export const notificationsRef = database.ref('Notifications');