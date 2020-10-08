export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDQaF7SAD1S4TrDiMUXWnguGBrkydVrdZH181ug8lyZx_qQj8pP9rHexj4XtA8D6uUVScqsrg_ENxa0COd-XI9DTpZw5tHY9EcRED_ONgGX95LJs-U0XXn1V9YypOO4_H2TWMWEu7HSYs_xPzNh2HN5Wbvafg",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;

// token:
//   "BQDQaF7SAD1S4TrDiMUXWnguGBrkydVrdZH181ug8lyZx_qQj8pP9rHexj4XtA8D6uUVScqsrg_ENxa0COd-XI9DTpZw5tHY9EcRED_ONgGX95LJs-U0XXn1V9YypOO4_H2TWMWEu7HSYs_xPzNh2HN5Wbvafg",
