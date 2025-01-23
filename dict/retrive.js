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
const db_1 = require("./db");
const client_1 = require("@prisma/client");
const getUserData = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db_1.db.user.findUnique({
        where: {
            email: "chiragj2019gmail.com", // Use email instead of id
        },
        select: {
            id: true,
            name: true,
            _count: {
                select: {
                    posts: true,
                    likes: true,
                },
            },
            posts: {
                where: {
                    category: client_1.PostType.REEL,
                },
                include: {
                    _count: {
                        select: {
                            likes: true,
                            comments: true,
                        },
                    },
                },
            },
        },
    });
    console.log(user);
});
getUserData();
