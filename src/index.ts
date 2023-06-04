import express from "express";
import dotenv from "dotenv";
import { renderToPipeableStream } from "react-dom/server";

import { faker } from "@faker-js/faker";
import Welcome, {assets as welcomeAssets} from "./client/pages/welcome";
import Login, {assets as loginAssets} from './client/pages/login';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static("public"));

// app.get("/", (request, response) => {
//   const { pipe } = renderToPipeableStream(A, {
//     bootstrapScripts: ["/index.js"],
//     onShellReady() {
//       response.setHeader("content-type", "text/html");
//       pipe(response);
//     },
//   });
// });

app.get("/", (request, response) => {
  const WelcomePage = Welcome();
  const { pipe } = renderToPipeableStream(WelcomePage, {
    bootstrapScripts: [welcomeAssets.js],
    onShellReady() {
      response.setHeader("content-type", "text/html");
      pipe(response);
    },
  });
});

app.get("/login", (request, response) => {
  const LoginPage = Login();
  const { pipe } = renderToPipeableStream(LoginPage, {
    bootstrapScripts: [loginAssets.js],
    onShellReady() {
      response.setHeader("content-type", "text/html");
      pipe(response);
    },
  });
});

app.get("/cows", (request, response) => {
  const randomCows: string[] = [];
  for (let i = 0; i < 50; i++) {
    const cow = faker.animal.cow();
    randomCows.push(cow);
  }
  response.json(randomCows);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
