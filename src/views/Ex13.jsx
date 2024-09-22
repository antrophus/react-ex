import React from 'react';

const Ex13 = () => {
    /* --상태관리 관련변수들(화면에 렌더링)-- */

    //일반 변수들

    /* --일반 메소드-- */

    /* --생명주기 + 이벤트 관련 메소드-- */

    const personList = [
        {no: 1, name: '정우성', hp: '010-1111-1111'}, 
        {no: 2, name: '이효리', hp: '010-2222-2222'}, 
        {no: 3, name: '유재석', hp: '010-3333-3333'}, 
        {no: 4, name: '강호동', hp: '010-4444-4444'}, 
        {no: 5, name: '서장훈', hp: '010-5555-5555'}
    ];
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>pk</td>
                        <td>이름</td>
                        <td>핸드폰</td>
                    </tr>
                </thead>
                <tbody>
                    {personList.map((person, index) => (
                        <tr>
                            <td>{person.no}</td>
                            <td>{index}</td>
                            <td>{person.name}</td>
                            <td>{person.hp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Ex13;