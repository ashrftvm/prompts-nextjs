import User from "@models/user";
import { connectDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

type ProfileProps = {
  name: string;
  email: string;
  image: string;
};

type sessionProps = {
  user: {
    email: string;
    id?: string;
  };
};

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn(profile: ProfileProps) {
      try {
        await connectDB();
        const userExists = await User.findOne({ email: profile.email });
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(/\s+/g, "").toLowerCase(),
            image: profile.image,
          });
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async session(session: sessionProps) {
      const sessionUser = await User.findOne({
        where: { email: session.user.email },
      });
      session.user.id = sessionUser._id.toString();
      return session;
    },
  },
});

export { handler as GET, handler as POST };
