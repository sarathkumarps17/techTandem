

import { AuthOptions, getServerSession } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Google from "next-auth/providers/google"

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const gitlabClientId = process.env.GITLAB_CLIENT_ID;
const gitlabClientSecret = process.env.GITLAB_CLIENT_SECRET;

console.log({ googleClientId, googleClientSecret, gitlabClientId, gitlabClientSecret });

const authOptions: AuthOptions = {
    providers: [
        Google({
            clientId: googleClientId!,
            clientSecret: googleClientSecret!,
        }),
        GithubProvider({
            clientId: gitlabClientId!,
            clientSecret: gitlabClientSecret!,
        })
    ],
}

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }