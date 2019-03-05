import AuthenticationLayout from "../../../views/V1/layouts/AuthenticationLayout";
import DashboardLayout from "../../../views/V1/layouts/DashboardLayout";

import SignUp from "../../../views/V1/components/Auth/SignUp";
import SignIn from "../../../views/V1/components/Auth/SignIn";

// import EditProfile from "../../../views/V1/components/Dashboard/EditProfile";

import Home from "../../../views/Home.vue";
import About from "../../../views/About.vue";

let AuthenticationRoutes = {
  path: "/auth",
  component: AuthenticationLayout,
  children: [
    {
      path: "sign-up",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "sign-in",
      name: "SignIn",
      component: SignIn
    }
  ]
};

let DashboardRoutes = {
  path: "/dashboard",
  component: DashboardLayout
  // children: [
  //   {
  //     path: "edit-profile",
  //     name: "EditProfile",
  //     component: EditProfile
  //   }
  // ]
};

// let GeneralRoutes = {
//   path: "/",
//   // name: "home",
//   component: Home
// };

export const routes = [
  AuthenticationRoutes,
  DashboardRoutes,
  // GeneralRoutes,
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/",
    name: "Home",
    component: Home
  }
  // {path: '*', component: NotFound}
];
