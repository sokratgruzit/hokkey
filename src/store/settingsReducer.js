const INIT_STATE = {
  language: {
    id: 14,
    name: "RU",
    flag: "/flags/RU.webp",
    lang: "ru",
    langFull: "Русский"
  },
  languageModal: false,
  activeTab: "",
  isLoading: false,
  modal: false
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

    case "SET_MODAL":
      return {
        ...state,
        modal: action.payload,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
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
