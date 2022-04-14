//SingUp.js
import React, { useState } from "react";
import "./SignUp.css";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Login() {
  const [startDate, setStartDate] = useState(new Date());
  //   const [selected, setSelected] = React.useState();

  //   let footer = <p>Please pick a day.</p>;
  //   if (selected) {
  //     footer = <p>You picked {format(selected, "PP")}.</p>;
  //   }
  //const [startDate, setStartDate] = useState(new Date());
  //   const years = range(1990, getYear(new Date()) + 1, 1);
  //   const months = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];

  return (
    <>
      <div id="signup_content">
        <Card>
          <CardContent>
            <h3>
              <label for="id">ID(Email)</label>
            </h3>
            <div class="box_id">
              <span class="box int_id">
                <input type="text" id="idEamil1" class="int" maxlength="20" />
              </span>
              <span class="step_url">@</span>
              <span class="box int_id">
                <input type="text" id="idEmail2" class="int" maxlength="20" />
              </span>
              <select class="signupList" name="emailSelect">
                <option value="naver.com">naver.com</option>
                <option value="daum.net">daum.net</option>
                <option value="google.com">google.com</option>
                <option value="">직접입력</option>
              </select>
              <input type="checkbox" id="idCheck" name="idCheck" />
              <label for="idCheck"></label>
            </div>
            <h3>
              <label for="pw">비밀번호</label>
            </h3>
            <span class="box int_pw">
              <input
                type="text"
                id="pw"
                name="pwCheck"
                class="int"
                maxlength="20"
              />
            </span>
            <h3>
              <label for="pw">비밀번호 재확인</label>
            </h3>
            <span class="box int_pw">
              <input
                type="text"
                id="pwCheck"
                name="pwCheck"
                class="int"
                maxlength="20"
              />
            </span>
            <h3>
              <label for="userName">이름</label>
            </h3>
            <span class="box int_pw">
              <input
                type="text"
                id="userName"
                name="userName"
                class="int"
                maxlength="20"
              />
            </span>
            <h3>
              <label for="nicName">닉네임</label>
            </h3>
            <span class="box int_pw">
              <input
                type="text"
                id="nicName"
                name="nicName"
                class="int"
                maxlength="20"
              />
            </span>
            <h3>
              <label for="gender">성별</label>
            </h3>
            <div class="genderCheck">
              <input type="radio" id="gender" name="gender" />
              <label for="gender">남성</label>
              <input type="radio" id="gender" name="gender" />
              <label for="gender">여성</label>
            </div>
            <h3>
              <label for="job">직업</label>
            </h3>
            <select class="signupList" name="jobList">
              <option value="">--선택--</option>
              <option value="학생">학생</option>
              <option value="군인">군인</option>
              <option value="주부">주부</option>
              <option value="아빠">아빠</option>
              <option value="기타">기타</option>
            </select>
            <h3>
              <label for="birth">생년월일</label>
            </h3>
            <DatePicker
              class="datepickerInput"
              selected={startDate}
              dateFormat="yyyy.MM.dd"
              onChange={(date) => {
                this.setStartDate({ startDate: date });
              }}
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Login;
