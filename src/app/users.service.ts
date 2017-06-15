import { Subject } from "rxjs/Subject";

export class UsersService {
    userActivated = new Subject(); //this can be used as a good alternative to event emitter

}