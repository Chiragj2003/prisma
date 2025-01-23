import { db } from "./db";
import { PostType } from "@prisma/client";

const getUserData = async () => {
    const user = await db.user.findUnique({
        where: {
            email: "chiragj2019gmail.com",  // Use email instead of id
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
                    category: PostType.REEL,
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
};

getUserData();