"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Creating users
const db_1 = require("./db");
const client_1 = require("@prisma/client");
const createUser = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.db.user.create({
        data: {
            email: "chiragj2019@gmail.com",
            password: "password",
            gender: client_1.Gender.MALE
        },
        select: {
            id: true,
            email: true,
            name: true,
            _count: {
                select: {
                    comments: true,
                    likes: true
                }
            },
        }
    });
    yield db_1.db.user.create({
        data: {
            email: "utkarsh@gmail.com",
            password: "password",
            name: "Utkarsh Rawat"
        },
    });
    const user = yield db_1.db.user.create({
        data: {
            email: "shivamrai@gmail.com",
            password: "password"
        },
        include: {
            comments: true,
            posts: true
        }
    });
    const users = yield db_1.db.user.createMany({
        data: [
            { email: "abc@gmail.com", password: "123456" },
            { email: "pqr@gmail.com", password: "123456" },
            { email: "xyz@gmail.com", password: "123456" },
        ]
    });
    console.log(users);
    console.log(user);
});
const createPost = () => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield db_1.db.post.create({
        data: {
            content: "url2",
            category: client_1.PostType.IMAGE,
            userId: "678d3dc5fc7090879d453dcf"
        },
    });
    console.log(post);
});
const createComment = () => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield db_1.db.comment.create({
        data: {
            message: "Sexy joshi",
            userId: "678c06f96ac670d73ee356c7",
            postId: "678c08c29e195d23fc04a0d4"
        }
    });
    console.log(comment);
});
// createComment();
//createPost();
createUser();
