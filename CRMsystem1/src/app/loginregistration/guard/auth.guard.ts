import { User } from "../../model/user.model";

export interface AuthGuard {
    token: string;
    user: User;
}
