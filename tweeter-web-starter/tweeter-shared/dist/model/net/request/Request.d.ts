import { AuthToken } from "../../domain/AuthToken";
import { Status } from "../../domain/Status";
import { User } from "../../domain/User";
export interface TweeterRequest {
}
export declare class LoginRequest implements TweeterRequest {
    username: string;
    password: string;
    constructor(username: string, password: string);
}
export declare class RegisterRequest implements TweeterRequest {
    firstName: string;
    lastName: string;
    alias: string;
    password: string;
    userImageBytes: Uint8Array;
    constructor(firstName: string, lastName: string, alias: string, password: string, userImageBytes: Uint8Array);
}
export declare class LogoutRequest implements TweeterRequest {
    authToken: AuthToken;
    constructor(authToken: AuthToken);
    static fromJson(request: LogoutRequest): LogoutRequest;
}
export declare class GetUserRequest implements TweeterRequest {
    authToken: AuthToken;
    alias: string;
    constructor(authToken: AuthToken, alias: string);
    static fromJson(request: GetUserRequest): GetUserRequest;
}
export declare class LoadMoreRequest<T> {
    authToken: AuthToken | null;
    user: User;
    lastItem: T | null;
    pageSize: number;
    constructor(authToken: AuthToken, user: User, lastItem: T | null, pageSize: number);
}
export declare class LoadMoreItemsRequest extends LoadMoreRequest<Status> {
    constructor(authToken: AuthToken, user: User, lastItem: Status | null, pageSize: number);
    static fromJson(request: LoadMoreItemsRequest): LoadMoreItemsRequest;
}
export declare class PostStatusRequest implements TweeterRequest {
    authToken: AuthToken;
    newStatus: Status;
    constructor(authToken: AuthToken, newStatus: Status);
    static fromJson(request: PostStatusRequest): PostStatusRequest;
}
export declare class LoadMoreFollowItemsRequest extends LoadMoreRequest<User> {
    constructor(authToken: AuthToken, user: User, lastItem: User | null, pageSize: number);
    static fromJson(request: LoadMoreFollowItemsRequest): LoadMoreFollowItemsRequest;
}
export declare class GetIsFollowerStatusRequest implements TweeterRequest {
    authToken: AuthToken;
    user: User;
    selectedUser: User;
    constructor(authToken: AuthToken, user: User, selectedUser: User);
    static fromJson(request: GetIsFollowerStatusRequest): GetIsFollowerStatusRequest;
}
export declare class UserSearchRequest implements TweeterRequest {
    authToken: AuthToken;
    user: User;
    constructor(authToken: AuthToken, user: User);
    static fromJson(request: UserSearchRequest): UserSearchRequest;
}
