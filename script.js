// 데이터 초기화
const data = {
    members: ["김민제", "최민기", "이영민", "한지원"], // 담당자 목록
    roles: ["도시락 배달", "오전 셔틀", "오후 셔틀", "카운터 보기"], // 역할 목록
};

// 현재 주차를 계산하는 함수
Date.prototype.getWeek = function () {
    const oneJan = new Date(this.getFullYear(), 0, 1);
    const numberOfDays = Math.floor((this - oneJan) / (24 * 60 * 60 * 1000));
    return Math.ceil((numberOfDays + oneJan.getDay() + 1) / 7);
};

// 역할 업데이트 함수
function updateRoles() {
    const currentWeek = new Date().getWeek(); // 현재 주차
    const weekIndex = currentWeek % data.members.length; // 담당자 순서 계산

    // 이번 주 역할 할당 (각 역할을 한 칸씩 뒤로 미는 방식)
    document.getElementById("counter").textContent = data.members[weekIndex]; // 도시락 배달
    document.getElementById("afternoonShuttle").textContent = data.members[(weekIndex + 1) % data.members.length]; // 오전 셔틀
    document.getElementById("morningShuttle").textContent = data.members[(weekIndex + 2) % data.members.length]; // 오후 셔틀
    document.getElementById("delivery").textContent = data.members[(weekIndex + 3) % data.members.length]; // 카운터 보기

    // 다음 주 역할 할당 (각 역할을 한 칸씩 뒤로 밀어 배정)
    document.getElementById("nextCounter").textContent = data.members[(weekIndex + 1) % data.members.length]; // 도시락 배달
    document.getElementById("nextAfternoonShuttle").textContent = data.members[(weekIndex + 2) % data.members.length]; // 오전 셔틀
    document.getElementById("nextMorningShuttle").textContent = data.members[(weekIndex + 3) % data.members.length]; // 오후 셔틀
    document.getElementById("nextDelivery").textContent = data.members[weekIndex]; // 카운터 보기
}

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", updateRoles);

// 1시간마다 역할 갱신
setInterval(updateRoles, 3600000); // 3600000ms = 1시간
