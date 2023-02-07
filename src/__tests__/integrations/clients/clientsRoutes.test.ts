import request from "supertest";
import { DataSource } from "typeorm";

import app from "../../../app";
import AppDataSource from "../../../data-source";
import { mockedClient } from "../../mocks";

describe("/clients", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.log("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /clients -  Must be able to create a client", async () => {
    const response = await request(app).post("/clients").send(mockedClient);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("fullName");
    expect(response.body).toHaveProperty("phone");
    expect(response.body).toHaveProperty("isActive");
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
    expect(response.body).toHaveProperty("contacts");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body.email).toEqual("andrade@gmail.com");
    expect(response.body.fullName).toEqual("Andrade Padilha");
    expect(response.body.phone).toEqual("41998765432");
    expect(response.body.isActive).toEqual(true);
    expect(response.status).toBe(201);
  });
});
