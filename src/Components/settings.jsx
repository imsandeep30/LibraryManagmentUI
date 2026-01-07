import { useState } from "react";
import "./settings.css";
import Navbar from "./navbar";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const loggedinuser = JSON.parse(localStorage.getItem("loggedinuser"));
  const [userProfile, setUserProfile] = useState({
    userName: loggedinuser?.fullname || "Sandeep",
    userEmail: loggedinuser?.email || "sandeep@gmail.com",
    userPhone: "",
    userId: "USR123",
    userAddress: {
      userStreet: "",
      userCity: "",
      userState: "",
      userCountry: "",
      userZipCode: ""
    }
  });

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordMessageType, setPasswordMessageType] = useState("");

  const saveChanges = () => {
    console.log("Updated Profile:", userProfile);
    alert("Profile updated successfully!");
  };

  const loadUserProfile = () => {
    alert("Changes cancelled");
  };

  const deleteAccount = () => {
    alert("Account deleted");
  };

  const changePassword = () => {
    if (newPassword !== confirmPassword) {
      setPasswordMessage("Passwords do not match");
      setPasswordMessageType("error");
      return;
    }

    setPasswordMessage("Password changed successfully!");
    setPasswordMessageType("success");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <>
    <Navbar />
    <div className="settings-container">
      <div className="sidebar">
        <ul>
          <li
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            Profile Settings
          </li>
          <li
            className={activeTab === "password" ? "active" : ""}
            onClick={() => setActiveTab("password")}
          >
            Change Password
          </li>
        </ul>
      </div>

      <div className="main-content">
        {activeTab === "profile" && (
          <div>
            <h2 className="settings-title">Profile Settings</h2>

            <div className="profile-header">
              <div className="avatar">
                {userProfile?.userName?.[0]?.toUpperCase()}
              </div>
              <div className="profile-info">
                <h4>{userProfile.userName}</h4>
              </div>
            </div>

            <div className="profile-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={userProfile.userName}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, userName: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="text" value={userProfile.userEmail} disabled />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  value={userProfile.userPhone}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, userPhone: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>User ID</label>
                <input type="text" value={userProfile.userId} disabled />
              </div>

              <div className="form-group">
                <label>Street</label>
                <input
                  type="text"
                  value={userProfile.userAddress.userStreet}
                  onChange={(e) =>
                    setUserProfile({
                      ...userProfile,
                      userAddress: {
                        ...userProfile.userAddress,
                        userStreet: e.target.value
                      }
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  value={userProfile.userAddress.userCity}
                  onChange={(e) =>
                    setUserProfile({
                      ...userProfile,
                      userAddress: {
                        ...userProfile.userAddress,
                        userCity: e.target.value
                      }
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  value={userProfile.userAddress.userState}
                  onChange={(e) =>
                    setUserProfile({
                      ...userProfile,
                      userAddress: {
                        ...userProfile.userAddress,
                        userState: e.target.value
                      }
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  value={userProfile.userAddress.userCountry}
                  onChange={(e) =>
                    setUserProfile({
                      ...userProfile,
                      userAddress: {
                        ...userProfile.userAddress,
                        userCountry: e.target.value
                      }
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>Zip Code</label>
                <input
                  type="text"
                  value={userProfile.userAddress.userZipCode}
                  onChange={(e) =>
                    setUserProfile({
                      ...userProfile,
                      userAddress: {
                        ...userProfile.userAddress,
                        userZipCode: e.target.value
                      }
                    })
                  }
                />
              </div>
            </div>

            <div className="buttons">
              <button className="save-btn" onClick={saveChanges}>Save Changes</button>
              <button className="cancel-btn" onClick={loadUserProfile}>Cancel</button>
              <button className="delete-btn" onClick={deleteAccount}>Delete Account</button>
            </div>
          </div>
        )}

        {activeTab === "password" && (
          <div>
            <h2 className="settings-title">Change Password</h2>

            <div className="profile-form">
              <div className="form-group">
                <label>Old Password</label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="buttons">
              <button className="save-btn" onClick={changePassword}>Reset Password</button>
              <button
                className="cancel-btn"
                onClick={() => {
                  setOldPassword("");
                  setNewPassword("");
                  setConfirmPassword("");
                }}
              >
                Cancel
              </button>
            </div>

            {passwordMessage && (
              <div
                className={
                  passwordMessageType === "success" ? "success-msg" : "error-msg"
                }
              >
                {passwordMessage}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
