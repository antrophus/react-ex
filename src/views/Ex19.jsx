import React, {useState, useEffect} from 'react';

const Ex19 = () => {
    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [blood, setBlood] = useState('');
    const [hobbys, setHobbys] = useState([]);
    const [telecom, setTelecom] = useState('');
    const [desc, setDesc] = useState('');


    /*---일반 변수--------------------------------*/
    /*---일반 메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    //'적용'클릭시 데이터 불러오기
    const handleClick = () => {
        console.log('클릭');

        const userVo = {
            id: 'cls2024.moon',
            pw: '1234abc',
            blood: 'a',
            hobbys: ['book'],
            telecom: 'etc',
            desc: '정우성입니다'
        }
        setId(userVo.id);
        setPw(userVo.pw);
        setBlood(userVo.blood);
        setHobbys(userVo.hobbys);
        setTelecom(userVo.telecom);
        setDesc(userVo.desc);
    };

    //Id 값이 변경될 때
    const handleId = (e) => {
        setId(e.target.value);
    };

    //마운트 되었을때
    useEffect(()=>{
        const userVo = {
            id: 'cls2024.sun',
            pw: '1234abc',
            blood: 'o',
            hobbys: ['trip', 'movie'],
            telecom: 'kt',
            desc: '황일영입니다'
        }
        setId(userVo.id);
        setPw(userVo.pw);
        setBlood(userVo.blood);
        setHobbys(userVo.hobbys);
        setTelecom(userVo.telecom);
        setDesc(userVo.desc);
    },[]);

    return (
        <>
            <button type="button" onClick={handleClick}>적용</button>
            <form action="" method="">
                <div>
                    <label htmlFor="id">아이디: </label>
                    <input type="text" id="txt-id" name="" value={id} onChange={handleId}/>
                </div>
                <div>
                    <label htmlFor="pw">패스워드: </label>
                    <input type="password" id="txt-pw" name="" value={pw} />
                </div>
                <div>
                    <span>혈액형: </span>
                    <label htmlFor='rdo-a'>A형</label>
                    <input type="radio" id="rdo-a" name="" value="a" checked={blood === 'a'}></input>

                    <label htmlFor='rdo-b'>B형</label>
                    <input type="radio" id="rdo-b" name="" value="b" checked={blood === 'b'}></input>

                    <label htmlFor='rdo-o'>O형</label>
                    <input type="radio" id="rdo-o" name="" value="o" checked={blood === 'o'}></input>

                    <label htmlFor='rdo-ab'>AB형</label>
                    <input type="radio" id="rdo-ab" name="" value="ab" checked={blood === 'ab'}></input>
                </div>
                <div>
                    <span>취미: </span>
                    <label htmlFor='chk-book'>독서</label>
                    <input type="checkbox" id="chk-book" name="" value="" checked={hobbys.includes('book')}></input>

                    <label htmlFor='chk-trip'>여행</label>
                    <input type="checkbox" id="chk-trip" name="" value="" checked={hobbys.includes('trip')}></input>

                    <label htmlFor='chk-movie'>영화</label>
                    <input type="checkbox" id="chk-movie" name="" value="" checked={hobbys.includes('movie')}></input>
                </div>
                <div>
                    <label htmlFor='sel-telecom'>이동통신사: </label>
                    <select name="" id="sel-telecom" value={telecom}>
                        <option value="">선택하세요</option>
                        <option value="skt">SKT</option>
                        <option value="lg">LGU+</option>
                        <option value="kt">KT</option>
                        <option value="etc">알뜰통신</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="txt-desc">자기소개: </label><br />
                    <textarea id="txt-desc" name="" value={desc}></textarea>
                </div>
                <button button="submit">제출</button>
            </form>
        </>
    );
};

export default Ex19;