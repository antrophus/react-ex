import React, { useState } from 'react';

const Ex10 = () => {

    /* --상태관리 관련변수들(화면에 렌더링)-- */

    const [isLogin, setIsLogin] = useState(false);

    // (조건식? 참이면: 거짓이면)

    /* --일반 메소드-- */

    /* --생명주기 + 이벤트 관련 메소드-- */
    //버튼클릭 메소드
    const handleLogin = (e) => {
        console.log("클릭");

        setIsLogin(!isLogin);

        // if(isLogin===true){
        //     setIsLogin(false)
        // } else {
        //     setIsLogin(true);
        // }
    };

    return (
        <>
            <button type="button" onClick={handleLogin}>로그인 상태변화</button>
            {
                (isLogin === true) ? (
                    <ul>
                        <li>로그인된 화면</li>
                        <li>로그아웃 버튼</li>
                        <li>회원정보수정화면이동</li>
                    </ul>
                ) : (

                    <ul>
                        <li>로그인 안된 화면</li>
                        <li>로그인 버튼</li>
                        <li>회원가입화면이동</li>
                    </ul>
                )
            }
        </>
    );
};

export default Ex10;