import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout"
import ErrorPage from "../pages/error";
import HomePage from "../pages/home";
import ServicePage from "../pages/services";
import ContactPage from "../pages/contact";
import FAQPage from "../pages/faq";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage />,
      children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'faq',
            element: <FAQPage/>
          },
          {
            path: 'contact',
            element: <ContactPage/>
          },
          {
            path: 'services',
            element: <ServicePage/>
          },
      ],
    },
  ]);
