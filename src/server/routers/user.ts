import { z } from "zod";
import { baseProcedure, router } from "../trpc";

export const userRouter = router({
  all: baseProcedure.query(({ ctx }) => {
    return ctx.user.findMany();
  }),
  login: baseProcedure
    .input(
      z.object({
        email: z.string().email(),
        providerId: z.string().min(1),
      })
    )
    .query(async ({ ctx, input }) => {
      const user = await ctx.user.findFirst({
        where: { providerId: input.providerId },
      });

      if (user) {
        // user already exists - go on
        return user;
      }

      // user does not exist - create user with email
      const newUser = await ctx.user.create({
        data: { email: input.email, providerId: input.providerId },
      });
      return newUser;
    }),
  //   add: baseProcedure
  //     .input(
  //       z.object({
  //         id: z.string().optional(),
  //         text: z.string().min(1),
  //       }),
  //     )
  //     .mutation(async ({ ctx, input }) => {
  //       const todo = await ctx.task.create({
  //         data: input,
  //       });
  //       return todo;
  //     }),
  //   edit: baseProcedure
  //     .input(
  //       z.object({
  //         id: z.string().uuid(),
  //         data: z.object({
  //           completed: z.boolean().optional(),
  //           text: z.string().min(1).optional(),
  //         }),
  //       }),
  //     )
  //     .mutation(async ({ ctx, input }) => {
  //       const { id, data } = input;
  //       const todo = await ctx.task.update({
  //         where: { id },
  //         data,
  //       });
  //       return todo;
  //     }),
  //   delete: baseProcedure
  //     .input(z.string().uuid())
  //     .mutation(async ({ ctx, input: id }) => {
  //       await ctx.task.delete({ where: { id } });
  //       return id;
  //     }),
  //   clearCompleted: baseProcedure.mutation(async ({ ctx }) => {
  //     await ctx.task.deleteMany({ where: { completed: true } });

  //     return ctx.task.findMany();
  //   }),
});
