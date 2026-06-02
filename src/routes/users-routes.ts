import { Elysia, t } from "elysia";
import { registerUser } from "../services/users-services";

export const usersRoutes = new Elysia().post(
  "/api/users",
  async ({ body, set }) => {
    try {
      await registerUser(body.name, body.email, body.password);
      return { data: "OK" };
    } catch (err: any) {
      if (err.message === "Email Sudah terdaftar") {
        set.status = 400;
        return { error: "Email Sudah terdaftar" };
      }
      set.status = 500;
      return { error: "Internal Server Error", message: err.message };
    }
  },
  {
    body: t.Object({
      name: t.String(),
      email: t.String({ format: "email" }),
      password: t.String(),
    }),
  }
);
