import { prismaClient } from "../src/database/prismaClient";
import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/user", async (req, res) => {
  const listUsers = await prismaClient.user.findMany({
    orderBy: {
      created_at: "asc",
    },
  });

  res.json(listUsers);
});

userRoutes.post("/user", async (req, res) => {
  const { name, email, celphone } = req.body;
  const createUser = await prismaClient.user.create({
    data: {
      name,
      email,
      celphone,
    },
  });

  res.json(createUser);
});

userRoutes.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  const deleteUser = await prismaClient.user.delete({
    where: {
      id: String(id),
    },
  });

  res.json(deleteUser);
});

userRoutes.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const userUpdate = await prismaClient.user.update({
    where: { id: String(id) },
    data: {
      name: name,
    },
  });

  res.json(userUpdate);
});

export { userRoutes };
