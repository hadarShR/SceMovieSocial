import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialInstagram,
} from "react-icons/ti";
import { UserAuth } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Profile = () => {
  const { user, isLoading } = UserAuth() || {};
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [degree, setDegree] = useState("Bachelor's Degree");
  const [track, setTrack] = useState("Academic Preparatory Program");
  const [degreeYear, setDegreeYear] = useState("First");

  const updateUser = async () => {
    if (user) {
      const docRef = doc(db, "users", user.uid);

      console.log(docRef);

      const docData = {
        website: website,
        instagram: instagram,
        facebook: facebook,
        linkedin: linkedin,
        degree: degree,
        track: track,
        degreeYear: degreeYear,
      };

      await setDoc(docRef, docData, { merge: true });
      console.log("user document was updated");
    } else {
      console.log("no user to update");
    }
  };

  return (
    <StyledSection>
      <div className="form">
        <div className="form_box">
          <form>
            <div className="form_box_input">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                placeholder={user?.displayName}
                className="form_box_input_userName"
                disabled
              />
            </div>
            <div className="form_box_input">
              <label htmlFor="email">Email</label>
              <div className="form_box_input_box">
                <div className="form_box_input_box_icon">
                  <HiOutlineMail />
                </div>
                <input type="text" placeholder={user?.email} disabled />
              </div>
            </div>
            <div className="form_box_input">
              <label htmlFor="degree">Degree</label>
              <div className="container p-5">
                <select
                  className="custom-select"
                  onChange={(e) => setDegree(e.target.value)}
                >
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                </select>
              </div>
            </div>
            <div className="form_box_input">
              <label htmlFor="track">Track</label>
              <div className="container p-5">
                <select
                  className="custom-select"
                  onChange={(e) => setTrack(e.target.value)}
                >
                  <option value="Academic Preparatory Program">
                    Academic Preparatory Program
                  </option>
                  <option value="Computer Sciences">Computer Sciences</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Visual Communication">
                    Visual Communication
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Mechanical Engineering">
                    Mechanical Engineering
                  </option>
                  <option value="Electrical and Electronics Engineering">
                    Electrical and Electronics Engineering
                  </option>
                  <option value="Software Engineering">
                    Software Engineering
                  </option>
                  <option value="Industrial Engineering and Management">
                    Industrial Engineering and Management
                  </option>
                  <option value="Chemical Engineering">
                    Chemical Engineering
                  </option>
                  <option value="Green Engineering">Green Engineering</option>
                </select>
              </div>
            </div>
            <div className="form_box_input">
              <label htmlFor="degreeYear">Degree Year</label>
              <div className="container p-5">
                <select
                  className="custom-select"
                  onChange={(e) => setDegreeYear(e.target.value)}
                >
                  <option value="First">1</option>
                  <option value="Second">2</option>
                  <option value="Third">3</option>
                  <option value="Fourth">4</option>
                  <option value="Fifth">5</option>
                </select>
              </div>
            </div>
            <div className="form_box_input">
              <label htmlFor="website">Website</label>
              <div className="form_box_input_box">
                <div className="form_box_input_box_icon">
                  <MdOutlineHttp />
                </div>
                <input
                  autoFocus
                  type="text"
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder={user?.website || "website"}
                />
              </div>
            </div>
            <div className="form_box_input_social">
              <div className="form_box_input">
                <label htmlFor="facebook">Facebook</label>
                <div className="form_box_input_box">
                  <div className="form_box_input_box_icon">
                    <TiSocialFacebook />
                  </div>
                  <input
                    autoFocus
                    type="text"
                    onChange={(e) => setFacebook(e.target.value)}
                    placeholder="http://facebook"
                  />
                </div>
              </div>
              <div className="form_box_input">
                <label htmlFor="linkedin">Linkedin</label>
                <div className="form_box_input_box">
                  <div className="form_box_input_box_icon">
                    <TiSocialLinkedin />
                  </div>
                  <input
                    autoFocus
                    type="text"
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="http://linkedin"
                  />
                </div>
              </div>
              <div className="form_box_input">
                <label htmlFor="instagram">Instagram</label>
                <div className="form_box_input_box">
                  <div className="form_box_input_box_icon">
                    <TiSocialInstagram />
                  </div>
                  <input
                    autoFocus
                    type="text"
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="http://instagram"
                  />
                </div>
              </div>
            </div>

            <div className="form_box_btn">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  updateUser();
                }}
              >
                Upload Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  .form {
    width: 100%;
  }
  .form_box_input {
    margin-top: 2rem;
  }
  .form_box_input label {
    display: block;
    width: 100%;
    margin-left: 1rem;
    font-weight: 700;
    font-size: 1.3rem;
  }
  .form_box_input_userName {
    width: 100%;
    border: 1px solid var(--icons-color);
    padding: 1rem;
    border-radius: 1rem;
    background-color: transparent;
    margin-top: 0.5rem;
    outline: none;
    font-size: 1.3rem;
  }
  .form_box_input::placeholder {
    font-size: 1.2rem;
    color: var(--icons-color);
  }
  .form_box_input_box {
    width: 100%;
    border: 1px solid var(--icons-color);
    border-radius: 1rem;
    align-items: center;
    display: flex;
    gap: 1rem;
    overflow: hidden;
  }
  .form_box_input_box_icon {
    font-size: 2rem;
    background-color: var(--icos-color);
    padding: 0.5rem 1rem;
    color: var(--main-bg-color);
    display: grid;
    cursor: pointer;
  }
  .form_box_input_box input {
    width: 90%;
    border: 0;
    background-color: transparent;
    outline: none;
    color: white;
    font-size: 1.3rem;
  }
  .form_box_input textarea {
    width: 100%;
    background-color: transparent;
    outline: none;
    border-radius: 1rem;
    padding: 1rem;
    color: white;
    font-size: 1.3rem;
  }
  .form_box_input_social {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .form_box_btn button {
    margin-left: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #0077ff;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .form_box_btn {
    padding-top: 2rem;
  }
  @media screen and (max-width: 35em) {
    .form_box_input_social {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (min-width: 425px) and (max-width: 768px) {
    .form_box_input_social {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Profile;
