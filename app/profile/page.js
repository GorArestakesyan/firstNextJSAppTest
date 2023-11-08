import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";

async function Profile() {
  // if you want to leave component server side and get session, you can use getServerSession hook
  const sessionData = await getServerSession(authConfig);
  console.log("sessionData", sessionData);
  return (
    <div className="overflow-auto border-2 p-3 rounded-lg m-6 bg-blue-400 w-1/5">
      <h1>Profile of : {sessionData?.user?.name}</h1>
      {sessionData?.user.image && (
        <img
          src={sessionData?.user.image}
          className="rounded-lg border-2 border-cyan-700 m-3"
        />
      )}
    </div>
  );
}

export default Profile;
