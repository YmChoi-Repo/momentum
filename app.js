const playerName = "ym";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "no"

const player = {
  name: "ym",
  points: 10,
  fat : true,
};


console.log(player);
// 오브젝트 정의

player.points = player.points + 15;
console.log(player.points);
// 만약 player 값을 수정해주고 싶다면! 함수로 선언해주면 된다(이후로부턴 다음강의에 나오는거 같당..)
