import { Outlet, ScrollRestoration } from "react-router-dom";
import Layout from "../components/Layout";

const RouterLayout = () => {
  return (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  );
};
export default RouterLayout;
