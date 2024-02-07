// 우리 며칠째 버튼 누르면, d-day 계산 및 결과 표시
// Form : 폼 

// 1. DOM 탐색
const dday_form = document.querySelector("#dday_form");

// 2. DOM event bind(부착)
dday_form.addEventListener("submit", function (e) {
    e.preventDefault(); // form의 화면 갱신 처리를 중지
    // 3-1. 오늘 날짜
    let nowDay = new Date(); // Monday 29 Jan 11:53:24 +0900 GMT ..

    const userDate = document.querySelector("#first_date").value;

    let theDay = new Date(userDate);    // 처음 사귄 날을 theDay에 삽입

    let nowTime = nowDay.getTime();
    let theTime = theDay.getTime();

    let passedTime = nowTime - theTime;

    passedTime = Math.round(passedTime / (1000 * 60 * 60 * 24)); // ms를 일(day)로 환산

    // #passDay DOM 탐색 
    const passDay = document.querySelector("#passedDay");
    const resultDiv = document.querySelector("#result");
    const man = document.querySelector("#man_name").value;
    const woman = document.querySelector("#woman_name").value;
    const inputDay = document.querySelector("#inputDay");
    const name_field1 = document.querySelector("#name1");
    const name_field2 = document.querySelector("#name2");
    const specialDay1 = document.querySelector("#special1");
    const specialDay2 = document.querySelector("#special2");
    const friend = document.querySelector("#friend");

    // 친목질
    var msg = new Array();
    
    if(man === "강수헌" | woman === "강수헌") {
        msg.push('강수헌');
        } 
    if(man === "성상훈" | woman === "성상훈") {
        msg.push('성상훈');
        } 
    if(man === "서지범" | woman === "서지범") {
        msg.push('서지범');
        }
    if(msg.length > 0) {
        friend.innerText = "이상준의 친구 " + msg.join(', ') + "님 안녕하세요!"
    }
    console.log(msg)
    // Set the innerText of the friend element with the constructed message
    //friend.innerText = msg ? msg : '';
    // #passDay DOM 조작
    passDay.innerText = passedTime;
    inputDay.innerText = userDate

    // 날짜 연산하기-덧셈뺄셈
    let afterDay1 = new Date(theDay.getTime());
    afterDay1.setDate(afterDay1.getDate() + 300);
    afterDay1 = Math.round((afterDay1.getTime() - nowTime) / (1000 * 60 * 60 * 24));

    let afterDay2 = new Date(theDay.getTime());
    afterDay2.setFullYear(afterDay2.getFullYear() + 1);
    afterDay2 = Math.round((afterDay2.getTime() - nowTime) / (1000 * 60 * 60 * 24));

    specialDay1.innerText = afterDay1.toLocaleString(); // 300일
    specialDay2.innerText = afterDay2.toLocaleString(); // 1년

    // console.dir(resultDiv);
    name_field1.innerText = man;
    name_field2.innerText = woman;
    resultDiv.classList.remove("d-none");
    // 300일, 1주년 기념일 filed에 Date를 출력!
    // 새로운 기능들 추가 (계획)
    // 광고수익 : google Ads
});

/* 3. 이벤트 처리기(=함수)
function showDday(e){
    e.preventDefault(); // form의 화면 갱신 처리를 중지
    // 3-1. 오늘 날짜
    var now = new Date(); // Monday 29 Jan 11:53:24 +0900 GMT ..

    const userDate = document.querySelector("#first_date");

    console.log(now);
    console.log(userDate);
}
*/