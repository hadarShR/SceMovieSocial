import React, { useEffect, useState } from "react";
import styled from "styled-components";
import userIcon from "../assets/profileIcon.jpg";
import ProfileForm from "../components/ProfileForm";
import { upload } from "../firebase/firebase";
import { UserAuth } from "../context/AuthContext";

const UserProfile = () => {
  const { user } = UserAuth() || {};
  const [photoUrl, setPhotoUrl] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setPhoto(event.target.files[0]);
    }
    upload(photo, user, setLoading);
  };

  return (
    <StyledSection>
      <div className="profile">
        <div className="profile_info">
          <h1>Profile Settings</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>
        <div className="profile_box">
          <div className="profile_box_img">
            <img
              src={user ? user.photoURL : userIcon}
              alt={userIcon}
              className="avatar-image"
            />
            <input type="file" onChange={handleChange} disabled={loading} />
          </div>
          <div className="profile_box_form">
            <ProfileForm />
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  .profile {
    width: 100%;
    margin-block: 6rem;
  }
  .profile_info {
    width: 50%;
    margin: 0 auto;
    border-bottom: 1px solid var(--shadow-dark-color);
  }
  .profile_info h1 {
    font-size: 4rem;
    line-height: 0.5;
  }
  .profile_info p {
    padding-top: 2.2rem;
    font-size: 1.1rem;
    width: 85%;
    line-height: 1.2;
    padding-bottom: 0.5rem;
  }
  .profile_box {
    width: 50%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin-top: 3rem;
    gap: 3rem;
    align-items: flex-start;
  }
  .profile_box_img {
    margin-top: 2rem;
    cursor: pointer;
    position: relative;
    text-align: center;
  }
  .avatar-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 35em) {
    .profile_info {
      width: 90%;
    }
    .profile_info h1 {
      font-size: 2rem;
    }
    .profile_info p {
      font-size: 1rem;
      width: 100%;
    }
    .profile_box {
      width: 90%;
      grid-template-columns: 1fr;
    }
  }
  @media screen and (min-width: 425px) and (max-width: 768px) {
    .profile_info {
      width: 90%;
    }
    .profile_info h1 {
      font-size: 2rem;
    }
    .profile_info p {
      font-size: 1rem;
      width: 100%;
    }
    .profile_box {
      width: 90%;
      grid-template-columns: 1fr;
    }
  }
`;

export default UserProfile;
