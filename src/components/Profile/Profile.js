import React, { useEffect, useState } from "react";
import "./Profile.scss";
import { GrLogout } from "react-icons/gr";
import MainPic from "../../assets/MainPic.png";
import RedLogo from "../../assets/RedLogo.png";
import axios from "axios";
import { SERVER } from "../../config/config.json";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const [type, setType] = useState(0);
  const [name, setName] = useState();
  const [nickName, setNickName] = useState();
  const history = useHistory();

  const Token = sessionStorage.getItem("authorization");

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const res = await axios.get(`${SERVER}/auth/my`, {
        headers: {
          authorization: Token,
        },
      });
      const userData = res.data.data.userInfo;
      setName(userData.name);
      setNickName(userData.nickName);
    } catch (err) {
      console.log(err);
    }
  };

  const LogOut = () => {
    sessionStorage.clear();
    history.push("/");
  };

  const getMyLike = async () => {
    try {
      const res = await axios.get(`${SERVER}/like/my`, {
        headers: {
          authorization: Token,
        }
      });
      console.log(res.data.data.posts);
    } catch (err) {
      console.log(err);
    }
    setType(0);
  }

  const getCalendar = async () => {
    try {
      const res = await axios.get(`${SERVER}/calendar`);
      console.log(res.data.data.calendar)
    } catch (err) {
      console.log(err);
    }
    setType(1);
  }

  const getMyPost = async () => {
    try {
      const res = await axios.get(`${SERVER}/community/my`, {
        headers: {
          authorization: Token
        }
      });
      console.log(res.data.data.posts);
    } catch (err) {
      console.log(err);
    }
    setType(2);
  }

  return (
    <>
      <div className="Profile">
        <img src={MainPic} alt="subPic" className="MainPic2" />
        <div className="ProfileForm">
          <img src={RedLogo} alt="subPic" className="RedLogo" />
          <div className="nameInfo">
            <div>
              <span className="name">{name}</span>
            </div>
            <div>
              <span className="nickName">{nickName}</span>
            </div>
          </div>
          <span className="logoutIcon">
            <GrLogout />
          </span>
          <button className="logoutBtn" onClick={LogOut}>
            ????????????
          </button>
        </div>
        <nav className="ProfileMenu">
          <ul className="ProfileUl">
            <li className="ProfileLi">
              <button className="ProfileA" onClick={getMyLike}>
                MY ?????????
              </button>
            </li>
            <li className="ProfileLi">
              <a className="ProfileA" onClick={getCalendar}>
                ?????????
              </a>
            </li>
            <li className="ProfileLi">
              <a className="ProfileA" onClick={getMyPost}>
                ??? ?????????
              </a>
            </li>
          </ul>
        </nav>
        <div className="underMenu">
          <span className="uspan1">????????? ????????? ????????????</span> <br />
          <span className="uspan2">?????? ?????? ?????? ????????? ??????????????????!</span> <br />
          <button className="addBtn">?????? ????????????</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
