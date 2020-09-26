import { HIDE_DIALOG, SHOW_DIALOG, EDIT_POST } from './types';

export const editDialog = (payload) => ({ type: EDIT_POST, payload });
export const hideDialog = () => ({ type: HIDE_DIALOG });
export const showDialog = () => ({ type: SHOW_DIALOG });

