import React, { useState } from 'react';


const Ex08 = () => {

    /* --상태관리 관련변수들(화면에 렌더링)-- */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    /* --이벤트 관련 함수들-- */
    // 이메일 입력할 때
    const handleEmailChange = (event) => {
        console.log(event.target.value, "현재 text 창의 value 값을 setEmail(화면반영)을 통해서 변수에 반영");
        console.log("email 변수의 값을 읽어서 value 에 반영");
        setEmail(event.target.value);
    };

    // 비밀번호 입력할 때
    const handlePasswordChange = (e) => {
        console.log("패스워드입력");
        console.log(e.target.value);
        setPassword(e.target.value);
    };

    //로그인할때
    const handleLogin = (e) => {
        //이벤트 잡는다
        console.log("전송버튼 클릭");
        e.preventDefault(); // form 이벤트를 취소
        console.log("e.preventDefault() 기본기능 못하게 함");
        console.log(e.target);
        
        //데이터 수집
        const formValue = {
            email: email,
            password: password
            //...추가로 넣을 데이터
        };
        console.log("formValue : ", formValue); // formValue 에서 email, password 값 확인

        //전송
        //axios


    };

    return (
        <>
            <form action='/ex01' method='get' onSubmit={handleLogin}>
                <div>
                    <label htmlFor="txt-email">이메일</label>
                    <input id="txt-email" type="text" name="" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label htmlFor="txt-password">비밀번호</label>
                    <input id="txt-password" type="password" name="" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">로그인</button>
            </form>
        </>
    );
};

export default Ex08;