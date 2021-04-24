import {NotesActionTypes} from '../Actions/NotesActions';

const initialState = {
  notesArr: [],
};

const notesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE:
      const noteId =
        state.notesArr.length > 0
          ? state.notesArr[state.notesArr.length - 1].id + 1
          : 1;
      return {
        notesArr: [...state.notesArr, {...action.payload, id: noteId}],
      };
    case NotesActionTypes.UPDATE_NOTE:
      return {
        notesArr: state.notesArr.map((note: any) =>
          note.id === action.payload.id
            ? {
                ...note,
                title: action.payload.title,
                description: action.payload.description,
              }
            : note,
        ),
      };
    case NotesActionTypes.DELETE_NOTE:
      return {
        notesArr: state.notesArr.filter(
          (item: any) => item.id !== action.noteId,
        ),
      };
    default:
      return state;
  }
};

export default notesReducer;
