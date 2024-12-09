import { PrismaClient } from "@prisma/client";
import { log } from "console";
const prisma = new PrismaClient();



async function insertUser (email: string, firstName: string, lastName: string, password: string){
    const res = await prisma.user.create({
        data:{
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            userId: 1
        },
        select:{
            id: true,
            firstName: true
        }
        
    })

    console.log(res);
    
}

insertUser("px@gmail.com", "Pradyut", "Fogla", "yoyo");

 