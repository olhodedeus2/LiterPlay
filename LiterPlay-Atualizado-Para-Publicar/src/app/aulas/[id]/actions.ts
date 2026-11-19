"use server";
import {getUser} from "@/lib/auth";import {db} from "@/lib/db";import {redirect} from "next/navigation";
export async function completeLesson(lessonId:number){const user=await getUser();if(!user)redirect("/login");await db.$transaction(async tx=>{const existing=await tx.lessonCompletion.findUnique({where:{userId_lessonId:{userId:user.id,lessonId}}});if(!existing){await tx.lessonCompletion.create({data:{userId:user.id,lessonId}});await tx.user.update({where:{id:user.id},data:{xp:{increment:20}}});}});redirect("/painel");}
