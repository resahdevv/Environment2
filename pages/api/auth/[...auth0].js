/**
 * This Project Amelia Ai
 * Source code write by RezaDevv
 * Instructor by Tomp Philips
 * Don't delete this message
 */

import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
    signup: handleLogin({ authorizationParams: { screen_hint: "signup" } })
});