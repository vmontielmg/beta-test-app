import { getDatabase, ref, set } from "firebase/database";

export const createUser = (uid, data) => {
    const db = getDatabase();
    delete data.email;
    delete data.password;
    delete data.passwordConfirm;
    if (data.optionSelected) {
        data.labels = data.optionSelected;
        delete data.optionSelected;
    }
    set(ref(db, 'users/' + uid), data);
}