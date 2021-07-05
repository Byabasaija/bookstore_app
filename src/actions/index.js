const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookCreateAction = (book) => {
    return {
        type: CREATE_BOOK,
        payload: book,
    }
}

const bookRemoveAction = (book) => {
    return {
        type: REMOVE_BOOK,
        payload: book,
    }
}