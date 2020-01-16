
import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.CurrentUser //output selectors  that will return the current user from the user reducer
);
