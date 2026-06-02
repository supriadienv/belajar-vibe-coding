import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";
import { usersRoutes } from "./routes/users-routes";

const app = new Elysia()
  .get("/", () => "Hello World")
  .get("/users", async ({ set }) => {
    try {
      const allUsers = await db.select().from(users);
      return allUsers;
    } catch (err) {
      set.status = 500;
      return {
        message: "Gagal mengambil data dari database MySQL.",
        error: String(err),
      };
    }
  })
  .use(usersRoutes)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
