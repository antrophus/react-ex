import React from 'react';

const Ex09 = () => {

    const isLogin = true;

    /* --상태관리 관련변수들(화면에 렌더링)-- */

    // (조건식? 참이면: 거짓이면)



    /* --일반 메소드-- */


    /* --생명주기 + 이벤트 관련 메소드-- */
    return (
        <>
            {/*삼항 조건식*/}
            { (isLogin===true)? ("*로그인된화면") : ("*로그인안된화면") }
            <br/>

            {
                (isLogin===true)?(
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

export default Ex09;