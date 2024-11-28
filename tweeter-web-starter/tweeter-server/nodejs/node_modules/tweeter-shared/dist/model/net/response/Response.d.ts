import { AuthToken } from "../../domain/AuthToken";
import { Status } from "../../domain/Status";
import { User } from "../../domain/User";
export declare class TweeterResponse {
    private _success;
    private _message;
    constructor(success: boolean, message?: string | null);
}
export declare class AuthenticateResponse extends TweeterResponse {
    _user: User;
    _token: AuthToken;
    constructor(success: boolean, user: User, token: AuthToken, message?: string | null);
    static fromJson(json: JSON): AuthenticateResponse;
}
export declare class LogoutResponse extends TweeterResponse {
    constructor(success: boolean, message: string | undefined);
    static fromJson(json: JSON): LogoutResponse;
}
export declare class GetUserResponse extends TweeterResponse {
    _user: User | null;
    constructor(user: User | null, success: boolean, message: string | undefined);
    static fromJson(json: JSON): GetUserResponse;
}
export declare class LoadMoreItemsResponse extends TweeterResponse {
    _status: Status[];
    _bool: boolean;
    constructor(status: Status[], bool: boolean, success: boolean, message: string | undefined);
    static fromJson(json: JSON): LoadMoreItemsResponse;
}
export declare class PostStatusResponse extends TweeterResponse {
    constructor(success: boolean, message: string | undefined);
    static fromJson(json: JSON): PostStatusResponse;
}
export declare class LoadMoreFollowItemsResponse extends TweeterResponse {
    _user: User[];
    _bool: boolean;
    constructor(user: User[], bool: boolean, success: boolean, message: string | undefined);
    static fromJson(json: JSON): LoadMoreFollowItemsResponse;
}
export declare class GetIsFollowerStatusResponse extends TweeterResponse {
    _bool: boolean;
    constructor(bool: boolean, success: boolean, message: string | undefined);
    static fromJson(json: JSON): GetIsFollowerStatusResponse;
}
export declare class GetFollowItemsCountResponse extends TweeterResponse {
    _num: number;
    constructor(num: number, success: boolean, message: string | undefined);
    static fromJson(json: JSON): GetFollowItemsCountResponse;
}
export declare class FollowOrUnfollowResponse extends TweeterResponse {
    _followersCount: number;
    _followeesCount: number;
    constructor(followersCount: number, followeesCount: number, success: boolean, message: string | undefined);
    static fromJson(json: JSON): FollowOrUnfollowResponse;
}
