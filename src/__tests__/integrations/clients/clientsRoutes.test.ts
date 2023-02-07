import request from "supertest";
import { DataSource } from "typeorm";

import app from "../../../app";
import AppDataSource from "../../../data-source";
import {
  mockedClient,
  mockedClientLogin,
  mockedOtherClient,
} from "../../mocks";

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
    expect(response.body).not.toHaveProperty("password");
    expect(response.body.email).toEqual("andrade@gmail.com");
    expect(response.body.fullName).toEqual("Andrade Padilha");
    expect(response.body.phone).toEqual("41998765432");
    expect(response.body.isActive).toEqual(true);
    expect(response.status).toBe(201);
  });

  test("POST /clients -  Should not be able to create a client that already exists", async () => {
    const response = await request(app).post("/clients").send(mockedClient);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });

  test("POST /clients -  Should not be able to create a client that does not contain all the data", async () => {
    const response = await request(app)
      .post("/clients")
      .send(mockedClientLogin);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });

  test("GET /clients -  Must be able to list client", async () => {
    const loginResponse = await request(app)
      .post("/login")
      .send(mockedClientLogin);

    const response = await request(app)
      .get("/clients")
      .set("Authorization", `Bearer ${loginResponse.body.token}`);

    expect(Array.isArray(response.body.contacts));
    expect(response.body.contacts).toHaveLength(0);
    expect(response.body).not.toHaveProperty("password");
    expect(response.status).toBe(200);
  });

  test("GET /clients -  Should not be able to list client without authentication", async () => {
    const response = await request(app).get("/clients");

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("PATCH /clients -  Must not be able to update client to an email that already exists", async () => {
    await request(app).post("/clients").send(mockedOtherClient);

    const newValues = {
      email: "eric@gmail.com",
    };

    const loginResponse = await request(app)
      .post("/login")
      .send(mockedClientLogin);

    const response = await request(app)
      .patch(`/clients`)
      .set("Authorization", `Bearer ${loginResponse.body.token}`)
      .send(newValues);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });

  test("PATCH /clients -  Should be able to update client", async () => {
    const newValues = {
      fullName: "Andrade Souza",
      email: "andradaum@mail.com",
    };

    const loginResponse = await request(app)
      .post("/login")
      .send(mockedClientLogin);

    const response = await request(app)
      .patch(`/clients`)
      .set("Authorization", `Bearer ${loginResponse.body.token}`)
      .send(newValues);

    expect(response.body.email).toEqual("andradaum@mail.com");
    expect(response.body.fullName).toEqual("Andrade Souza");
    expect(response.body).not.toHaveProperty("password");
    expect(response.status).toBe(200);
  });

  test("DELETE /clients -  Must be able to soft delete client", async () => {
    await request(app).post("/clients").send(mockedClient);

    const loginResponse = await request(app)
      .post("/login")
      .send(mockedClientLogin);

    const response = await request(app)
      .delete("/clients")
      .set("Authorization", `Bearer ${loginResponse.body.token}`);

    const newLoginResponse = await request(app)
      .post("/login")
      .send(mockedClientLogin);

    expect(response.status).toBe(204);
    expect(newLoginResponse.body).toHaveProperty("message");
  });
});
