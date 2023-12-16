import { App } from "@/components/App";
import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Shop } from "@/pages/shop";
import { UserCard } from "@packages/shared/src/components/UserCard";

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: "main",
        element: (
          <Suspense fallback="loading...">
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "second",
        element: (
          <Suspense fallback="loading...">
            <div style={{ color: "red" }}>
              <h1>second page</h1>
              <UserCard username="from shop" />
            </div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
