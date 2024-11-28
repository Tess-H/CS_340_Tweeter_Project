"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowOrUnfollowResponse = exports.GetFollowItemsCountResponse = exports.GetIsFollowerStatusResponse = exports.LoadMoreFollowItemsResponse = exports.PostStatusResponse = exports.LoadMoreItemsResponse = exports.GetUserResponse = exports.LogoutResponse = exports.AuthenticateResponse = exports.TweeterResponse = void 0;
const AuthToken_1 = require("../../domain/AuthToken");
const Status_1 = require("../../domain/Status");
const User_1 = require("../../domain/User");
class TweeterResponse {
    _success;
    _message;
    constructor(success, message = null) {
        this._success = success;
        this._message = message;
    }
}
exports.TweeterResponse = TweeterResponse;
//for login and register
class AuthenticateResponse extends TweeterResponse {
    _user;
    _token;
    constructor(success, user, token, message = null) {
        super(success, message);
        this._user = user;
        this._token = token;
    }
    static fromJson(json) {
        const jsonObject = json;
        const deserializedUser = User_1.User.fromJson(JSON.stringify(jsonObject._user));
        if (deserializedUser === null) {
            throw new Error("AuthenticateResponse, could not deserialize user with json:\n" +
                JSON.stringify(jsonObject._user));
        }
        const deserializedToken = AuthToken_1.AuthToken.fromJson(JSON.stringify(jsonObject._token));
        if (deserializedToken === null) {
            throw new Error("AuthenticateResponse, could not deserialize token with json:\n");
        }
        return new AuthenticateResponse(jsonObject._success, deserializedUser, deserializedToken, jsonObject._message);
    }
}
exports.AuthenticateResponse = AuthenticateResponse;
//for logout (just iherit TweeterResponse since void)
class LogoutResponse extends TweeterResponse {
    constructor(success, message) {
        super(success, message);
    }
    static fromJson(json) {
        const jsonObject = json;
        return new LogoutResponse(jsonObject._success, jsonObject._message);
    }
}
exports.LogoutResponse = LogoutResponse;
//for getUser
class GetUserResponse extends TweeterResponse {
    _user;
    constructor(user, success, message) {
        super(success, message);
        this._user = user;
    }
    static fromJson(json) {
        const jsonObject = json;
        const deserializedUser = User_1.User.fromJson(JSON.stringify(jsonObject._user));
        if (deserializedUser === null) {
            throw new Error("GetUserResponse, could not deserialize user with json:\n");
        }
        return new GetUserResponse(deserializedUser, jsonObject._success, jsonObject._message);
    }
}
exports.GetUserResponse = GetUserResponse;
//for loadMoreFeedItems and loadMoreStoryItems
class LoadMoreItemsResponse extends TweeterResponse {
    _status;
    _bool;
    constructor(status, bool, success, message) {
        super(success, message);
        this._status = status;
        this._bool = bool;
    }
    static fromJson(json) {
        const jsonObject = json;
        let statusList = [];
        jsonObject._status.forEach((statusItem, index) => {
            let deserializedStatus = Status_1.Status.fromJson(JSON.stringify(statusItem));
            if (deserializedStatus === null) {
                throw new Error("LoadMoreItemsResponse could not deserialize user with json:\n");
            }
            else {
                statusList.push(deserializedStatus);
            }
        });
        return new LoadMoreItemsResponse(statusList, jsonObject._bool, jsonObject._success, jsonObject._message);
    }
}
exports.LoadMoreItemsResponse = LoadMoreItemsResponse;
//for postStatus
class PostStatusResponse extends TweeterResponse {
    constructor(success, message) {
        super(success, message);
    }
    static fromJson(json) {
        const jsonObject = json;
        return new PostStatusResponse(jsonObject._success, jsonObject._message);
    }
}
exports.PostStatusResponse = PostStatusResponse;
//for loadMoreFollowers and loadMoreFollowees
class LoadMoreFollowItemsResponse extends TweeterResponse {
    _user;
    _bool;
    constructor(user, bool, success, message) {
        super(success, message);
        this._user = user;
        this._bool = bool;
    }
    static fromJson(json) {
        const jsonObject = json;
        let userList = [];
        jsonObject._user.forEach((userItem, index) => {
            let deserializedStatus = User_1.User.fromJson(JSON.stringify(userItem));
            if (deserializedStatus === null) {
                throw new Error("LoadMoreFollowItemsResponse could not deserialize user with json:\n");
            }
            else {
                userList.push(deserializedStatus);
            }
        });
        return new LoadMoreFollowItemsResponse(userList, jsonObject._bool, jsonObject._success, jsonObject._message);
    }
}
exports.LoadMoreFollowItemsResponse = LoadMoreFollowItemsResponse;
//for getIsfollowerStatus
class GetIsFollowerStatusResponse extends TweeterResponse {
    _bool;
    constructor(bool, success, message) {
        super(success, message);
        this._bool = bool;
    }
    static fromJson(json) {
        const jsonObject = json;
        return new GetIsFollowerStatusResponse(jsonObject._bool, jsonObject._success, jsonObject._message);
    }
}
exports.GetIsFollowerStatusResponse = GetIsFollowerStatusResponse;
//for getFolloweesCount and getFollowersCount
class GetFollowItemsCountResponse extends TweeterResponse {
    _num;
    constructor(num, success, message) {
        super(success, message);
        this._num = num;
    }
    static fromJson(json) {
        const jsonObject = json;
        return new GetFollowItemsCountResponse(jsonObject._num, jsonObject._success, jsonObject._message);
    }
}
exports.GetFollowItemsCountResponse = GetFollowItemsCountResponse;
//for follow and unfollow
class FollowOrUnfollowResponse extends TweeterResponse {
    _followersCount;
    _followeesCount;
    constructor(followersCount, followeesCount, success, message) {
        super(success, message);
        this._followersCount = followersCount;
        this._followeesCount = followeesCount;
    }
    static fromJson(json) {
        const jsonObject = json;
        return new FollowOrUnfollowResponse(jsonObject._followersCount, jsonObject._followeesCount, jsonObject._success, jsonObject._message);
    }
}
exports.FollowOrUnfollowResponse = FollowOrUnfollowResponse;
