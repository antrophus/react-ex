import React from 'react';

const Ex17 = () => {
    /*---라우터 관련-------------------------------*/
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    /*---일반 변수--------------------------------*/
    /*---일반 메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드-------*/


    const strArray = ['정우성','이효리','유재석'];

    // strArray.map();
    // strArray.includes();
    // strArray.filter();

    /* includes() */
    let result = strArray.includes('이효리'); // 배열에 '이효리'가 있니?
    let result2 = strArray.includes('함민규'); // 배열이 '함민규'가 있니?
    console.log(result); // true 
    console.log(result2); //  false

    /* filter() */
    let newArray = strArray.filter((name)=>{
        return name !== '정우성' // true 새로운 배열에 추가
    });
    console.log(newArray); 

    return (
        <>
            <p>안녕</p>
        </>
    );
};

export default Ex17;