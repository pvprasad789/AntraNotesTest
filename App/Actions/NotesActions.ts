export const NotesActionTypes = {
  ADD_NOTE: "ADD_NOTE",
  UPDATE_NOTE: "UPDATE_NOTE",
  DELETE_NOTE: "DELETE_NOTE"
}

export function addNote(payload: any) {
  return {
    type: NotesActionTypes.ADD_NOTE,
    payload,
  };
}

export function updateNote(payload: any) {
  return {
    type: NotesActionTypes.UPDATE_NOTE,
    payload,
  };
}

export function deleteNote(noteId: number) {
  return {
    type: NotesActionTypes.DELETE_NOTE,
    noteId,
  };
}