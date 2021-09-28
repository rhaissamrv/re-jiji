import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import EditProfileForm from "../components/UserProfile/EditProfileForm";

const UserProfileEditPage = () => {
  let [user, setUser] = useState();
  let [saveError, setSaveError] = useState();

  let history = useHistory();
  const { userId } = useParams();

  useEffect(() => {
    const getUser = async () => {
      let response = await fetch("/user/" + userId);
      let data = await response.json();
      setUser(data);
    };
    getUser();
  }, [userId]);

  let onSave = async function (updatedUser) {
    try {
      let putResponse = await fetch("/user/" + userId, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
      console.log("Response is", putResponse);
      if (putResponse.status !== 200) {
        let errorMessage = await putResponse.text();
        console.log("We had an error.  it was: ", errorMessage);
        setSaveError(errorMessage);
      } else {
        setSaveError(undefined);
        history.pushState("/user/", userId);
      }
    } catch (error) {
      console.error("Fetch failed to reach the server.");
    }
  };
  return (
    <div>
      <h2>Editing Profile</h2>
      {user && (
        <EditProfileForm
          onSave={onSave}
          saveError={saveError}
          saveButtonCaption="Save user"
          name={user.userName}
          email={user.email}
          location={user.location}
          image={user.img}
          listings={user.listings}
        />
      )}
    </div>
  );
};

export default UserProfileEditPage;
