import { ofType } from "redux-observable";
import {LOAD_USER_ACTION} from './../action/actionTypes'
import {createUpdateUserAction} from './../action'
import { mergeMap, map } from "rxjs/operators";
import {ajax} from 'rxjs/ajax';



const userEpic = (action$, state$) => {
    return action$.pipe(
        ofType(LOAD_USER_ACTION),
        mergeMap(action => ajax.getJSON('https://api.github.com/users?per_page=5').pipe(
                            map(response=> createUpdateUserAction(response.map(user=>user.login)))))
    ) 
}

export default userEpic;