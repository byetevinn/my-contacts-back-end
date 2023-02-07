import request from "supertest";
import { DataSource } from "typeorm";

import app from "../../../app";
import AppDataSource from "../../../data-source";
import { mockedClientLogin, mockedOtherClient } from "../../mocks";

describe("/login", () => {
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

  test("POST /login -  Should not be able to log in if email is incorrect", async () => {
    await request(app).post("/clients").send(mockedOtherClient);

    const response = await request(app).post("/login").send(mockedClientLogin);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });

  test("POST /login -  Should not be able to login if password is incorrect", async () => {
    const response = await request(app).post("/login").send(mockedClientLogin);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });
});
