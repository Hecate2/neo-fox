"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Admin() {
  const { data: session } = useSession();
  if (session === null) {
    redirect("/login");
  }
  console.log(session);
  return (
  <>
    {" "}
    Signed in as {session.user.email} <br />{" "}
    <button onClick={() => signOut()}>Sign out</button>{" "}
  </>
  );

  return (
    <div>
      <p>
        This is admin page - private route. If user is already logged, stay in
        this page, if not, return to login page
      </p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}