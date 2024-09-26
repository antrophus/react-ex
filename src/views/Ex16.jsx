import React from 'react';

const Ex16 = () => {
    /*---라우터 관련-------------------------------*/
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    /*---일반 변수--------------------------------*/
    /*---일반 메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    const name = '정우성';
    const no1 = 3;
    const no2 = 5;

    // 안녕하세요 정우성입니다. 3*5=15 입니다.
    
    const str = '안녕하세요 ' + name + '입니다. ' + no1 + '*' + no2 + '=' +no1*no2+ '입니다.';
    console.log(str);

    const str2 = `(백틱)안녕하세요 ${name}입니다. ${no1}*${no2}=${no1*no2} 입니다.`
    console.log(str2);

    return (
        <>
            <p>안녕</p>
        </>
    );
};

export default Ex16;