import { Document } from 'mongoose';
declare const _default: import("mongoose").Model<UserInterface, {}>;
export default _default;
export interface UserInterface extends Document {
    email: string;
    password: string;
    comparePassword: (password: string) => Promise<boolean>;
}
