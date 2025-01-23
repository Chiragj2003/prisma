// Creating users
import { db } from "./db"
import { Gender, PostType } from "@prisma/client"

const createUser = async()=> {
    await db.user.create({
        data : {
            email : "chiragj2019@gmail.com",
            password : "password",
            gender : Gender.MALE
        },
        select : {
           id : true,
           email : true,
           name : true,
           _count : {
            select : {
                comments : true,
                likes : true
            }
           },
        }
    });

    await db.user.create({
        data : {
            email : "utkarsh@gmail.com",
            password : "password",
            name : "Utkarsh Rawat"
        },
    })

    const user = await db.user.create({
        data : {
            email : "shivamrai@gmail.com",
            password : "password"
        },
        include : {
            comments : true,
            posts : true
        }
    })

    const users = await db.user.createMany({
        data : [
            { email : "abc@gmail.com", password : "123456" },
            { email : "pqr@gmail.com", password : "123456" },
            { email : "xyz@gmail.com", password : "123456" },

        ]
    })

    console.log(users)

    console.log(user);
}


const createPost = async () => {
    const post = await db.post.create({
        data : {
            content : "url2",
            category : PostType.IMAGE,
            userId : "678d3dc5fc7090879d453dcf"
        },
    })

    console.log(post);
}


const createComment = async () => {
    const comment = await db.comment.create({
        data : {
            message : "Sexy joshi",
            userId : "678c06f96ac670d73ee356c7",
            postId : "678c08c29e195d23fc04a0d4"
        }
    });

    console.log(comment);
}

// createComment();

//createPost();


createUser();