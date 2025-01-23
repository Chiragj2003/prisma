import { Gender } from "@prisma/client";
import { db } from "./db";

const updateData = async()=>{
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

    const users = await db.user.updateMany({
        where : {
            gender : Gender.FEMALE
        },
        data : {
            gender : Gender.OTHERS
        },
    })

    console.log(users);
}

updateData();