import React, { useState } from 'react';

const Ex18 = () => {
    /*---라우터 관련-------------------------------*/
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [blood, setBlood] = useState('');
    const [telecom, setTelecom] = useState('');
    const [desc, setDesc] = useState('');
    const [hobbys, setHobbys] = useState([]);

    /*---일반 변수--------------------------------*/
    /*---일반 메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    // 아이디
    const handleId = (e) => {
        setId(e.target.value);
    };

    //패스워드
    const handlePw = (e) => {
        setPw(e.target.value);
    };

    //혈액형 이벤트 : onchange를 동일한 변수로 지정(동시에 여러 선택지중 하나의 값만 가짐)
    const handleBlood = (e) => {
        setBlood(e.target.value);
    };

    //취미
    const handleHobby = (e) => {
        const thisValue = e.target.value;
        
        if (hobbys.includes(thisValue)) {//배열에 있으면 삭제
            console.log("배열에서제거");

            //방금선택된 값이 제거된 배열
            const newHobbys = hobbys.filter((hobby) => ( hobby !== thisValue ));
            setHobbys(newHobbys);

        } else {//배열에 없으면 추가
            console.log("배열에 추가"); 

            //방금선택된 값이 배열에 추가
            const newHobbys = [...hobbys, thisValue];
            setHobbys(newHobbys);
        };
    };

    //통신사 이벤트
    const handleTelecom = (e) => {
        setTelecom(e.target.value);
    };

    //자기소개 이벤트
    const handleDesc = (e) => {
        setDesc(e.target.value);
        console.log(e.target.value);
    };

    //전송
    const handleJoin = (e) => {
        e.preventDefault(); // form submit 방지
        const userVo = {
            id: id,
            password: pw,
            blood: blood,
            telecom: telecom,
            hobbys: hobbys,
            desc: desc
        };
        console.log(userVo);
    
    };



    

    return (
        <>
            <form action="" method="" onSubmit={handleJoin}>
                <div>
                    <label htmlFor="id">아이디</label>
                    <input type="text" id="txt-id" name="" value={id} onChange={handleId} />
                </div>
                <div>
                    <label htmlFor="pw">패스워드</label>
                    <input type="password" id="txt-pw" name="" value={pw} onChange={handlePw} />
                </div>
                <div>
                    <span>혈액형</span>
                    <label htmlFor='rdo-a'>A형</label>
                    <input type="radio" id="rdo-a" name="blood" value="a" onChange={handleBlood}></input>
                    <label htmlFor='rdo-b'>B형</label>
                    <input type="radio" id="rdo-b" name="blood" value="b" onChange={handleBlood}></input>
                    <label htmlFor='rdo-o'>O형</label>
                    <input type="radio" id="rdo-o" name="blood" value="o" onChange={handleBlood}></input>
                    <label htmlFor='rdo-ab'>AB형</label>
                    <input type="radio" id="rdo-ab" name="blood" value="ab" onChange={handleBlood}></input>
                </div>
                <div>
                    <span>취미: </span>

                    <label htmlFor='chk-book'>독서</label>
                    <input type="checkbox" id="chk-book" name="" value="book" onChange={handleHobby}></input>

                    <label htmlFor='chk-trip'>여행</label>
                    <input type="checkbox" id="chk-trip" name="" value="trip" onChange={handleHobby}></input>

                    <label htmlFor='chk-movie'>영화</label>
                    <input type="checkbox" id="chk-movie" name="" value="movie" onChange={handleHobby}></input>
                </div>
                <div>
                    <label htmlFor='sel-telecom'>이동통신사</label>

                    <select name="telecom" id="sel-telecom" onChange={handleTelecom}>
                        <option value="">선택하세요</option>
                        <option value="skt">SKT</option>
                        <option value="lg">LGU+</option>
                        <option value="kt">KT</option>
                        <option value="etc">알뜰통신</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="txt-desc">자기소개</label><br />
                    <textarea id="txt-desc" name="" value={desc} onChange={handleDesc}></textarea>
                </div>
                <button button="submit">제출</button>
            </form>
        </>
    );
};

export default Ex18;