const INIT_STATE = {
  language: {
    id: 3,
    name: "EN",
    flag: "/flags/EN.webp",
    lang: "en",
    langFull: "English"
  },
  languageModal: false,
  activeTab: ""
};

const settingsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_CHOOSEN_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };

    case "SET_LANGUAGE_MODAL":
      return {
        ...state,
        languageModal: action.payload,
      };

    case "SET_ACITVE_TAB":
      return {
        ...state,
        activeTab: action.payload,
      };

    default:
      return state;
  }
};

export default settingsReducer;
