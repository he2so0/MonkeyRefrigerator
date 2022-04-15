//SingUp.js
import React, { useState, useRef } from "react";
import "./SignUp.css";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import BirthPick from "./DatePicker";
import { Button } from "react-bootstrap";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function Login() {
  const [startDate, setStartDate] = useState(new Date());
  const [idCheck, setIdCheck] = useState(false); //아이디 중복 체크
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [gender, setGender] = useState("m");
  const [job, setJob] = useState("");
  const [birth, setBirth] = useState("");

  const idInput = useRef();

  const checkHandler = ({ target }) => {
    //id 중복
    setIdCheck(!idCheck);
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordChk = (e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangeJob = (e) => {
    setJob(e.target.value);
  };
  const onChangeBirth = (e) => {
    alert("##");
  };

  const signUpFormSubmit = (e) => {
    if (!isEmail(id)) {
      alert("아이디(이메일)이 형식에 맞지 않습니다.");
      idInput.current.focus();
    }
  };

  const isEmail = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
  };

  const parentFunction = (data) => {
    console.log(data);
  };

  return (
    <>
      <form>
        <div id="signup_content">
          <Card>
            <CardContent>
              <h3>
                <label for="id">ID(Email)</label>
              </h3>
              <div class="box_id">
                <span class="box int_pw">
                  <input
                    type="text"
                    id="idEamil"
                    class="int"
                    maxlength="20"
                    required
                    ref={idInput}
                    onChange={onChangeId}
                  />
                </span>
                <input
                  type="checkbox"
                  id="idCheck"
                  name="idCheck"
                  checked={idCheck}
                  onChange={(e) => {
                    checkHandler(e);
                  }}
                />
                <label for="idCheck"></label>
              </div>
              <h3>
                <label for="pw">비밀번호</label>
              </h3>
              <div class="box_id">
                <span class="box int_pw">
                  <input
                    type="password"
                    id="pw"
                    name="pwCheck"
                    class="int"
                    maxlength="20"
                    required
                    onChange={onChangePassword}
                  />
                </span>
              </div>
              <h3>
                <label for="pw">비밀번호 재확인</label>
              </h3>
              <div class="pwchk">
                <div class="box_pwchk">
                  <span class="box int_pw">
                    <input
                      type="password"
                      id="pwCheck"
                      name="pwCheck"
                      class="int"
                      maxlength="20"
                      required
                      onChange={onChangePasswordChk}
                    />
                  </span>
                </div>
                {passwordError && (
                  <div style={{ color: "red" }}>
                    비밀번호가 일치하지 않습니다.
                  </div>
                )}
              </div>
              <h3>
                <label for="userName">이름</label>
              </h3>
              <div class="box_id">
                <span class="box int_pw">
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    class="int"
                    maxlength="20"
                    required
                    onChange={onChangeName}
                  />
                </span>
              </div>
              <h3>
                <label for="nickName">닉네임</label>
              </h3>
              <div class="box_id">
                <span class="box int_pw">
                  <input
                    type="text"
                    id="nickName"
                    name="nickName"
                    class="int"
                    maxlength="20"
                    required
                    onChange={onChangeNickName}
                  />
                </span>
              </div>
              <h3>
                <label for="gender">성별</label>
              </h3>
              <div class="box_id">
                <div class="genderCheck">
                  <input
                    type="radio"
                    id="gender"
                    name="gender"
                    value="m"
                    checked={gender == "m"}
                    onChange={onChangeGender}
                  />
                  <label for="gender">남성</label>
                  <input
                    type="radio"
                    id="gender"
                    name="gender"
                    value="f"
                    checked={gender == "f"}
                    onChange={onChangeGender}
                  />
                  <label for="gender">여성</label>
                </div>
              </div>
              <h3>
                <label for="job">직업</label>
              </h3>
              <div class="box_id">
                <select
                  class="signupList"
                  name="jobList"
                  onChange={onChangeJob}
                  required
                >
                  <option value="">--선택--</option>
                  <option value="학생">학생</option>
                  <option value="군인">군인</option>
                  <option value="주부">주부</option>
                  <option value="아빠">아빠</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <h3>
                <label for="birth">생년월일</label>
              </h3>
              <div class="box_id">
                <BirthPick setStartDate={setStartDate} />
              </div>
            </CardContent>
            <Button
              variant="outline-secondary"
              onClick={() => {
                signUpFormSubmit();
              }}
            >
              Secondary
            </Button>{" "}
          </Card>
        </div>
      </form>
    </>
  );
}

export default Login;
