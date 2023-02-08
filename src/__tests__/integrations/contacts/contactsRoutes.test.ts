import request from "supertest";
import { DataSource } from "typeorm";

import app from "../../../app";
import AppDataSource from "../../../data-source";
import {
  mockedClient,
  mockedClientLogin,
  mockedContact,
  mockedWrongContact,
} from "../../mocks";

describe("/contacts", () => {
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

  test("POST /contacts -  Must be able to create a contact", async () => {
    await request(app).post("/clients").send(mockedClient);

    const loginResponse = await request(app)
      .post("/login")
      .send(mockedClientLogin);

    const response = await request(app)
      .post("/contacts")
      .set("Authorization", `Bearer ${loginResponse.body.token}`)
      .send(mockedContact);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("fullName");
    expect(response.body).toHaveProperty("phone");
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
    expect(response.body.email).toEqual("victor@gmail.com");
    expect(response.body.fullName).toEqual("Victor Oliveira");
    expect(response.body.phone).toEqual("41998744432");
    expect(response.status).toBe(201);
  });

  test("POST /contacts -  Should not be able to create a contact that already exists", async () => {
    const loginResponse = await request(app)
      .post("/login")
      .send(mockedClientLogin);

    const response = await request(app)
      .post("/contacts")
      .set("Authorization", `Bearer ${loginResponse.body.token}`)
      .send(mockedContact);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });

  test("POST /contacts -  Should not be able to create a contact that does not contain all the data", async () => {
    const loginResponse = await request(app)
      .post("/login")
      .send(mockedClientLogin);

    const response = await request(app)
      .post("/contacts")
      .set("Authorization", `Bearer ${loginResponse.body.token}`)
      .send(mockedWrongContact);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });

  test("POST /contacts -  Must not be able to create a contact without authentication", async () => {
    const response = await request(app).post("/contacts").send(mockedContact);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /contacts -  Must be able to list customer contacts", async () => {
    const loginResponse = await request(app)
      .post("/login")
      .send(mockedClientLogin);

    const response = await request(app)
      .get("/contacts")
      .set("Authorization", `Bearer ${loginResponse.body.token}`);

    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body).toHaveLength(1);
    expect(response.status).toBe(200);
  });

  test("GET /contacts -  Should not be able to list contacts without authentication", async () => {
    const response = await request(app).get("/contacts");

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("PATCH /contacts -  Should not be able to update contact without authentication", async () => {
    const response = await request(app).patch(`/contacts`).send(mockedContact);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("PATCH /contacts -  Should not be able to update a contact without the id", async () => {
    const loginResponse = await request(app)
      .post("/login")
      .send(mockedClientLogin);

    const response = await request(app)
      .patch(`/contacts`)
      .set("Authorization", `Bearer ${loginResponse.body.token}`)
      .send(mockedContact);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });

  test("PATCH /contacts -  Should be able to update contact", async () => {
    const newValues = {
      email: "eric@gmail.com",
    };

    const loginResponse = await request(app)
      .post("/login")
      .send(mockedClientLogin);

    const contact = await request(app)
      .get("/contacts")
      .set("Authorization", `Bearer ${loginResponse.body.token}`);

    const response = await request(app)
      .patch(`/contacts`)
      .set("Authorization", `Bearer ${loginResponse.body.token}`)
      .send({ id: contact.body[0].id, ...newValues });

    expect(response.body.email).toEqual("eric@gmail.com");
    expect(response.status).toBe(200);
  });

  test("DELETE /contacts -  Must not be able to delete contact without authentication", async () => {
    const response = await request(app).delete(`/contacts`).send();

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("DELETE /contacts -  Must not be able to delete contact without id", async () => {
    const loginResponse = await request(app)
      .post("/login")
      .send(mockedClientLogin);

    const response = await request(app)
      .delete(`/contacts`)
      .set("Authorization", `Bearer ${loginResponse.body.token}`)
      .send();

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });

  test("DELETE /contacts -  Must be able to delete contact", async () => {
    const loginResponse = await request(app)
      .post("/login")
      .send(mockedClientLogin);

    const contact = await request(app)
      .get("/contacts")
      .set("Authorization", `Bearer ${loginResponse.body.token}`);

    const response = await request(app)
      .delete(`/contacts`)
      .set("Authorization", `Bearer ${loginResponse.body.token}`)
      .send({ id: contact.body[0].id });

    expect(response.status).toBe(204);
  });
});
