// app/actions/userActions.ts
"use server";
import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/lib/schemas";
import z from "zod";

type RegisterInput = z.infer<typeof registerSchema>;

export async function adduser(values: RegisterInput) {
  try {
    const user = await prisma.user.create({
      data: {
        name: values.name,
        email: values.email,
        password: values.password, // Remember to hash this!
      },
    });
    return { success: true, user };
  } catch (error) {
    return {
      success: false,
      message: "Email already exists or database error.",
    };
  }
}
