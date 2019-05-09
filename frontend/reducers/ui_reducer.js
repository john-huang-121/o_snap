
export const uiReducer = (oldState = { modalOpen: false }, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case 'MODAL_CHANGE':
      return { modalOpen: action.modalOpen };
    default:
      return oldState;
  }
};

export default uiReducer;