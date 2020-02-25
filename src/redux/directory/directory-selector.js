
/*Selectors are functions that is used to retrieve or fetch the data from the state store. When a redux state 
changes everytime the  component reendering takes  place which is ineffective.To avoid that we use selectors which 
is used to splice the data from the state to have the minimal updated state
*/

import { createSelector } from "reselect";

const selectDirectory = state => state.directory ;  //input selector

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections // we will take only the selected directory section property
);