"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSearchRequest = exports.GetIsFollowerStatusRequest = exports.LoadMoreFollowItemsRequest = exports.PostStatusRequest = exports.LoadMoreItemsRequest = exports.LoadMoreRequest = exports.GetUserRequest = exports.LogoutRequest = exports.RegisterRequest = exports.LoginRequest = void 0;
const AuthToken_1 = require("../../domain/AuthToken");
const Status_1 = require("../../domain/Status");
const User_1 = require("../../domain/User");
class LoginRequest {
    username;
    password;
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
exports.LoginRequest = LoginRequest;
class RegisterRequest {
    firstName;
    lastName;
    alias;
    password;
    userImageBytes;
    constructor(firstName, lastName, alias, password, userImageBytes) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.alias = alias;
        this.password = password;
        this.userImageBytes = userImageBytes;
    }
}
exports.RegisterRequest = RegisterRequest;
class LogoutRequest {
    authToken;
    constructor(authToken) {
        this.authToken = authToken;
    }
    static fromJson(request) {
        let deserializationToken = AuthToken_1.AuthToken.fromJson(JSON.stringify(request.authToken));
        if (deserializationToken === null) {
            throw new Error("LogoutRequest could not deserialize token:\n");
        }
        return new LogoutRequest(deserializationToken);
    }
}
exports.LogoutRequest = LogoutRequest;
class GetUserRequest {
    authToken;
    alias;
    constructor(authToken, alias) {
        this.authToken = authToken;
        this.alias = alias;
    }
    static fromJson(request) {
        let deserializedToken = AuthToken_1.AuthToken.fromJson(JSON.stringify(request.authToken));
        if (deserializedToken === null) {
            throw new Error("GetUserRequest could not deserialize token:\n");
        }
        return new GetUserRequest(deserializedToken, request.alias);
    }
}
exports.GetUserRequest = GetUserRequest;
class LoadMoreRequest {
    authToken;
    user;
    lastItem;
    pageSize;
    constructor(authToken, user, lastItem, pageSize) {
        this.authToken = authToken;
        this.user = user;
        this.lastItem = lastItem;
        this.pageSize = pageSize;
    }
}
exports.LoadMoreRequest = LoadMoreRequest;
//for LoadMoreFeeItems and LoadMoreStoryItems
class LoadMoreItemsRequest extends LoadMoreRequest {
    constructor(authToken, user, lastItem, pageSize) {
        super(authToken, user, lastItem, pageSize);
    }
    static fromJson(request) {
        let deserializedLastItem = null;
        if (request.lastItem !== null) {
            deserializedLastItem = Status_1.Status.fromJson(JSON.stringify(request.lastItem));
        }
        let deserializedToken = AuthToken_1.AuthToken.fromJson(JSON.stringify(request.authToken));
        let deserializedUser = User_1.User.fromJson(JSON.stringify(request.user));
        if (deserializedToken === null) {
            throw new Error("LoadMoreItemsRequest could not deserialize token:\n" +
                JSON.stringify(deserializedToken));
        }
        if (deserializedUser === null) {
            throw new Error("LoadMoreItemsRequest could not deserialize user:\n" +
                JSON.stringify(deserializedUser));
        }
        return new LoadMoreItemsRequest(deserializedToken, deserializedUser, deserializedLastItem, request.pageSize);
    }
}
exports.LoadMoreItemsRequest = LoadMoreItemsRequest;
class PostStatusRequest {
    authToken;
    newStatus;
    constructor(authToken, newStatus) {
        this.authToken = authToken;
        this.newStatus = newStatus;
    }
    static fromJson(request) {
        let deserializedToken = AuthToken_1.AuthToken.fromJson(JSON.stringify(request.authToken));
        let deserializedStatus = Status_1.Status.fromJson(JSON.stringify(request.newStatus));
        if (deserializedToken === null) {
            throw new Error("PostStatusRequest could not deserialize token:\n");
        }
        if (deserializedStatus === null) {
            throw new Error("PostStatusRequest could not deserialize status:\n");
        }
        return new PostStatusRequest(deserializedToken, deserializedStatus);
    }
}
exports.PostStatusRequest = PostStatusRequest;
//for loadmorefollowees and loadmorefollowers
class LoadMoreFollowItemsRequest extends LoadMoreRequest {
    constructor(authToken, user, lastItem, pageSize) {
        super(authToken, user, lastItem, pageSize);
    }
    static fromJson(request) {
        let deserializedLastItem = null;
        if (request.lastItem !== null) {
            deserializedLastItem = User_1.User.fromJson(JSON.stringify(request.lastItem));
        }
        let deserializedToken = AuthToken_1.AuthToken.fromJson(JSON.stringify(request.authToken));
        let deserializedUser = User_1.User.fromJson(JSON.stringify(request.user));
        if (deserializedToken === null) {
            throw new Error("LoadMoreFollowItemsRequest could not deserialize user:\n");
        }
        if (deserializedUser === null) {
            throw new Error("LoadMoreFollowItemsRequest could not deserialize user:\n");
        }
        return new LoadMoreFollowItemsRequest(deserializedToken, deserializedUser, deserializedLastItem, request.pageSize);
    }
}
exports.LoadMoreFollowItemsRequest = LoadMoreFollowItemsRequest;
class GetIsFollowerStatusRequest {
    authToken;
    user;
    selectedUser;
    constructor(authToken, user, selectedUser) {
        this.authToken = authToken;
        this.user = user;
        this.selectedUser = selectedUser;
    }
    static fromJson(request) {
        let deserializedToken = AuthToken_1.AuthToken.fromJson(JSON.stringify(request.authToken));
        let deserializedUser = User_1.User.fromJson(JSON.stringify(request.user));
        let deserializedSelectedUser = User_1.User.fromJson(JSON.stringify(request.selectedUser));
        if (deserializedToken === null) {
            throw new Error("GetIsFollowerStatusRequest could not deserialize token:\n");
        }
        if (deserializedUser === null) {
            throw new Error("GetIsFollowerStatusRequest could not deserialize user:\n");
        }
        if (deserializedSelectedUser === null) {
            throw new Error("GetIsFollowerStatusRequest could not deserialize user:\n");
        }
        return new GetIsFollowerStatusRequest(deserializedToken, deserializedUser, deserializedSelectedUser);
    }
}
exports.GetIsFollowerStatusRequest = GetIsFollowerStatusRequest;
//for getfolloweescount, getfollowerscount, follow, and unfollow
class UserSearchRequest {
    authToken;
    user;
    constructor(authToken, user) {
        this.authToken = authToken;
        this.user = user;
    }
    static fromJson(request) {
        let deserializedToken = AuthToken_1.AuthToken.fromJson(JSON.stringify(request.authToken));
        let deserializedUser = User_1.User.fromJson(JSON.stringify(request.user));
        if (deserializedToken === null) {
            throw new Error("UserSearchRequest could not deserialize user:\n");
        }
        if (deserializedUser === null) {
            throw new Error("UserSearchRequest could not deserialize user:\n");
        }
        return new UserSearchRequest(deserializedToken, deserializedUser);
    }
}
exports.UserSearchRequest = UserSearchRequest;
