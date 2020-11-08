import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FC } from "react";

const AdminLoginPage: FC = () => {
  const { loginWithRedirect } = useAuth0();
  loginWithRedirect({
    redirectUri: process.env.REACT_APP_ADMIN_REDIRECT_URL
  });
  return <div>Redirecting to GHEM Admin...</div>;
};

export default AdminLoginPage;
