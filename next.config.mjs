/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_CLIENT_ID: "test google id",
    GOOGLE_CLIENT_SECRET: "test google secret",
    GITLAB_CLIENT_ID: "test gitlab id",
    GITLAB_CLIENT_SECRET: "test gitlab secret",
  },
};

export default nextConfig;
