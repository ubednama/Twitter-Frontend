"use client"; // This directive ensures the file is treated as a client component

import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { graphqlClient } from "../clients/api";
import {verifyUserGoogleTokenQuery} from '../graphql/queries/user'
import { useCallback } from "react";
import toast from "react-hot-toast"

const GoogleLoginButton = () => {
  const handleLogin = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if(!googleToken) return toast.error(`Signup failed`)
    // console.log(cred.credential);

    const {verifyGoogleToken} = await graphqlClient.request(verifyUserGoogleTokenQuery, {token: googleToken});

    toast.success("Verified Successfully")
    console.log(verifyGoogleToken);
    if(verifyGoogleToken) window.localStorage.setItem('token', verifyGoogleToken)
  }, []);

  return <GoogleLogin onSuccess={handleLogin} />;
};

export default GoogleLoginButton;
