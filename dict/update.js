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
const client_1 = require("@prisma/client");
const db_1 = require("./db");
const updateData = () => __awaiter(void 0, void 0, void 0, function* () {
    // const user = await db.user.update({
    //     where : {
    //         id : "678c063ac2015951e9f4058e"
    //     },
    //     data : {
    //         name : "Chirag R",
    //         gender : Gender.FEMALE
    //     }
    // });
    // console.log(user);
    const users = yield db_1.db.user.updateMany({
        where: {
            gender: client_1.Gender.FEMALE
        },
        data: {
            gender: client_1.Gender.OTHERS
        },
    });
    console.log(users);
});
updateData();
