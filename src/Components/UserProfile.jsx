import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import Loading from "../Pages/Loading";

const UserProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const auth = getAuth(); 

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [editing, setEditing] = useState(false);

  if (!user) {
    return <Loading></Loading>;
  }

  const handleUpdate = async () => {
    if (!auth.currentUser) {
      toast.error("No logged-in user found!");
      return;
    }

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      
      const updatedUser = {
        ...auth.currentUser,
        displayName: name,
        photoURL: photo,
      };
      setUser(updatedUser);

      toast.success("✅ Profile updated successfully!");
      setEditing(false);
    } catch (err) {
      console.error("❌ Profile update failed:", err);
      toast.error("❌ Failed to update profile!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 ">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md border border-green-100 text-center">
        
        <div className="relative mx-auto w-32 h-32">
          <img
            src={photo || "/avatar.png"}
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-green-300 shadow-md"
          />
        </div>

        {editing ? (
          <>
            
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="w-full mt-4 px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="url"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter photo URL"
              className="w-full mt-3 px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />

            <div className="flex gap-3 mt-5 justify-center">
              <button
                onClick={handleUpdate}
                className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-all"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditing(false);
                  setName(user?.displayName || "");
                  setPhoto(user?.photoURL || "");
                }}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400 transition-all"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            
            <h2 className="text-2xl font-bold text-green-800 mt-4">
              {user?.displayName || "Unnamed User"}
            </h2>
            <p className="text-green-600 mb-3">{user?.email}</p>

            <button
              onClick={() => setEditing(true)}
              className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-all"
            >
              Update Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

