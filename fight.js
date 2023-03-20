// function createCharacters(name, atk, def, hp){ // 플레이어와 몬스터 생성 함수
//     this.name = name;
//     this.atk = atk;
//     this.def = def;
//     this.hp = hp;
// }

function createCharacters(name, atk, def, hp, stealSuccessPer, level, money) { // 플레이어와 몬스터 생성 함수
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.stealSuccessPer = stealSuccessPer; // 이확률은 내 훔치기 성공확률에서 -연산을 해주게된다.
    this.level = level;
    this.money = money;
}

function mainPlayerCharacter(name, atk, def, hp, crit, money, stealPer) {
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.crit = crit;
    this.money = money;
    this.stealPer = stealPer;
}

//                                          atk def  hp crit money stealPer 기본 20%
let player = new mainPlayerCharacter("병주", 100, 10, 100, 0.5, 1000, 20);
//                                       atk def hp stealSuccessPer level(난이도정도로 생각) money
let muheon = new createCharacters("무헌", 20, 10, 50, 0, 10, 1000);
let professor = new createCharacters("교수", 20, 10, 200, 5, 20, 1000);
let boss_lee = new createCharacters("학과장", 20, 10, 200, 10, 100, 10000);
let hyunwook = new createCharacters("현욱", 20, 10, 200, 10, 10, 1000);
let ahyeon = new createCharacters("아현", 20, 10, 200, 10, 5, 1000);
let jisup = new createCharacters("지섭", 20, 10, 200, 10, 1, 1000);
let megacoffee = new createCharacters("메가커피", 20, 10, 200, 10, 30, 1000);

// let player = new createCharacters("병주",20,10,100);
// let muheon = new createCharacters("무헌",20,10,100);
// let professor = new createCharacters("교수",20,10,100);
// let boss_lee = new createCharacters("학과장",20,10,500);
// let hyunwook = new createCharacters("현욱",20,10,100);
// let ahyeon = new createCharacters("아현",20,10,100);
// let jisup = new createCharacters("지섭",20,10,100);
// let megacoffee = new createCharacters("메가커피",20,10,200);

let monster = [muheon, professor, hyunwook, ahyeon, jisup, megacoffee, boss_lee]; // 몬스터 배열
let rndindex = parseInt(Math.random()*6); // 몬스터 랜덤으로 뽑기

let monsterNameSetting = document.querySelector('.monsterNameTag');
let monsterHpSetting = document.querySelector('.monsterHpNumber');

let playerName = document.querySelector('.playerNameTag');
playerName.innerHTML = player.name;

let playerHP = document.querySelector('.playerHpNumber');
playerHP.innerHTML = player.hp;

let playerLocation = document.querySelector('.playerImage');
playerLocation.innerHTML= `<div class="playerImg" style="background-image: url(https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/N5O9VZloiM90vzj8wYZsZE71Kq4.jpg)";></div>`;

let monsterLocation = document.querySelector('.monsterImage');
function imageSelect(){
    if(monster[0].name === "무헌"){
        monsterLocation.innerHTML = `<div class="muheonImg"></div>`;
    }else if(monster[0].name === "교수"){
        monsterLocation.innerHTML = `<div class="professorImg"></div>`;
    }else if(monster[0].name === "아현"){
        monsterLocation.innerHTML = `<div class="ahyeonImg"></div>`;
    }else if(monster[0].name === "현욱"){
        monsterLocation.innerHTML = `<div class="hyunwookImg"></div>`;
    }else if(monster[0].name === "지섭"){
        monsterLocation.innerHTML = `<div class="jisupImg"></div>`;
    }else if(monster[0].name === "메가커피"){
        monsterLocation.innerHTML = `<div class="megacoffeeImg"></div>`;
    }else{
        monsterLocation.innerHTML = `<div class="bossImg"></div>`;
    }
}
// imageSelect();

let res = [];
function gameplay(){
    res = [];
    let number = monster[0];
    monster.splice(0, 1);
    res.push(number);
    console.log(monster);
}


let monsterInitialHp = monster[0].hp; // 몬스터의 전투 시작 전 체력

let playerInitialHp = player.hp; // 플레이어의 전투 시작 전 체력


let playerHpSetting = document.querySelector('.playerHpNumber');

let monsterHpBarLength = 400;
let playerHpBarLength = 400;
// console.log(typeof(hpBarLength));

let monsterHpChange = document.querySelector('.monsterHpBarImage');
monsterHpChange.style.width = `${monsterHpBarLength}px`;

let playerHpChange = document.querySelector('.playerHpBarImage');
playerHpChange.style.width = `${playerHpBarLength}px`

let monsterHpBarLengthChange;
// console.log(monsterHpBarLengthChange);
monsterHpBarLengthChange = monsterHpBarLength * ((player.atk - monster[0].def) / monsterInitialHp);

let playerHpBarLengthChange;
// console.log(playerHpBarLengthChange);
playerHpBarLengthChange = playerHpBarLength * ((monster[0].atk - player.def) / playerInitialHp);


function monsterHpBarChange(){
    monsterHpBarLength = monsterHpBarLength - monsterHpBarLengthChange;
    if(monsterHpBarLength < 0){
        monsterHpBarLength = 0;
    }
    monsterHpChange.style.width = `${monsterHpBarLength}px`;
}

function playerHpBarChange(){
    playerHpBarLength = playerHpBarLength - playerHpBarLengthChange;
    if(playerHpBarLength < 0){
        playerHpBarLength = 0;
    }
    playerHpChange.style.width = `${playerHpBarLength}px`;
}

let playerAttackingAnimation = document.querySelector('.playerImage');
let monsterHitAnimation = document.querySelector('.monsterImage');
let playerHitAnimation = document.querySelector('.playerImage');
let monsterAttackingAnimation = document.querySelector('.monsterImage');

function monsterAppear(){
    monsterNameSetting.innerHTML = monster[0].name;
    monsterHpSetting.innerHTML = monster[0].hp;
    imageSelect();
    console.log(monster[0].name);
    console.log(monster[0].hp);
}
// monsterAppear();

function mainPlayerCharactesDie() {
    if (player.hp === 0)//플레이어가 죽는조건
    {   
        //플레이어가 가진것을 초기화한다. 돈제외
        player.atk = 10;
        player.def = 10;
        player.hp = 100;
        player.crit = 0.5;
        player.exp = 0;
        player.stealPer = 5;
        return true
    }
    // } else return false
}
// mainPlayerCharactesDie();

// function MonstersDie(monsObj) {
//     if (monsObj.hp === 0) { // 
//         console.log("몬스터죽음");
//         getExp();
//         return true
//     } else (monsObj.hp !== 0)
//     {
//         console.log("몬스터살아있음");
//         return false
//     }

// }

// function MonsterDie(){
//     if(AppearIndex[i].hp === 0){
//         monsterNameSetting.innerHTML = AppearIndex[i+1].name;
//         monsterHpSetting.innerHTML = AppearIndex[i+1].hp;
//     }else if(AppearIndex[6].hp === 0){
//         alert("축하합니다. 게임을 클리어 하셨습니다.")
//     }
// }
// MonsterDie();

// function playerAttack(){
//     // for(i = 0; i <= 6; i++){
//     //     AppearIndex[i].hp = AppearIndex[i].hp - player.atk + AppearIndex[i].def;
//     //     monsterHpSetting.innerHTML = AppearIndex[i].hp;
//     //     console.log(AppearIndex[i].def);
//     //     if(AppearIndex[i].hp === 0){
//     //         setTimeout(() => {
//     //             alert(`${AppearIndex[i].name}을(를) 처치하였습니다.`)
//     //         }, 500);
            
//     //     }

//     // }
//     let i = 1;
//     // monsterAppear(0);
//     temp = AppearIndex[0];
    // AppearIndex[0].hp = AppearIndex[0].hp - player.atk + AppearIndex[0].def;
    // monsterHpSetting.innerHTML = AppearIndex[0].hp;
//     if(AppearIndex[0].hp === 0){
//         setTimeout(() => {
//             alert(`${temp.name}을(를) 처치하였습니다.`)
//         }, 1500);
//         return 0;
//     }
//     AppearIndex[0] = AppearIndex[i];
//     i++;
//     monsterAppear(i);
//     // monster[rndindex].hp = monster[rndindex].hp - player.atk + monster[rndindex].def;
//     // monsterHpSetting.innerHTML = monster[rndindex].hp;
//     // if(monster[rndindex].hp === 0){
//     //     setTimeout(() => {
//     //         alert(`${monster[rndindex].name}을(를) 처치하였습니다.`)
//     //     }, 500);
//     //     rndMonsterAppear();
//     // }
// }

// monsterAppear();
function playerAttackTest(){
    monster[0].hp = monster[0].hp - player.atk + monster[0].def;
    if(monster[0].hp < 0){
        monster[0].hp = 0;
    }
    monsterHpSetting.innerHTML = monster[0].hp;
    // if(monster[0].hp <= 0){
    //     player.money = player.money + monster[0].money;
    //     console.log(player.money);
    //     setTimeout(() => {
    //         alert(`${monster[0].name}을(를) 처치하였습니다.`)
    //     }, 500);
    //     // gameplay();
    //     // setTimeout(() => {
    //     //     location.href = "http://127.0.0.1:5500/kah/main.html"
    //     // }, 1000);
    // }
}

function monsterAttack(){
    // for(i = 0; i <= 6; i++){
    //     player.hp = player.hp - AppearIndex[i].atk + player.def;
    // }
    // playerHpSetting.innerHTML = player.hp;
    // console.log(AppearIndex[i].atk);

    player.hp = player.hp - monster[0].atk + player.def;
    if(player.hp < 0){
        player.hp = 0;
    }
    playerHpSetting.innerHTML = player.hp;
    // if(player.hp <= 0){
    //     setTimeout(() => {
    //         alert("응 사망. 더 강해져서 와라");
    //     }, 500);
    //     // alert("사망하셨습니다. 다시 도전하세요.")
    //     setTimeout(() => {
    //         location.href = "http://127.0.0.1:5500/kah/main.html";
    //     }, 1000);
    // }
}

function playerAttackAnimation(){
    playerAttackingAnimation.style.animation = "attackingMotion 1s ease";
}

function monsterAttackAnimation(){
    monsterAttackingAnimation.style.animation = "monsterAttackingMotion 1s ease";
}

function monsterHit(){
    monsterHitAnimation.style.animation = "MotionWhenHit 0.5s ease";
}

function playerHit(){
    playerHitAnimation.style.animation = "MotionWhenHit 0.5s ease";
}

// function buttonClickAttack(){
//     if(playerAttack() === 0){
//         playerAttackAnimation(); 
//         setTimeout(() => {
//             monsterHit();
//         }, 1000);
//         setTimeout(() => {
//             monsterHpBarChange();
//         }, 1500);
//         setTimeout(() => {
//             playerAttack();
//         }, 1500);
//     }else{
//         playerAttackAnimation(); 
//         setTimeout(() => {
//             monsterHit();
//         }, 1000);
//         setTimeout(() => {
//             monsterHpBarChange();
//         }, 1500);
//         setTimeout(() => {
//             playerAttack();
//         }, 1500);
//         setTimeout(() => {
//             monsterAttackAnimation();
//         }, 3000);
//         setTimeout(() => {
//             playerHit();
//         }, 4000);
//         setTimeout(() => {
//             playerHpBarChange();
//         }, 4500);
//         setTimeout(() => {
//             monsterAttack();
//         }, 4500);
//     }

function buttonClickAttackTest(){
    playerAttackAnimation(); 
    setTimeout(() => {
        monsterHit();
    }, 1000);
    setTimeout(() => {
        monsterHpBarChange();
    }, 1500);
    setTimeout(() => {
        playerAttackTest();
    }, 1500);
    if(monster[0].hp === 0){
        return;
    }
    setTimeout(() => {
        monsterAttackAnimation();
    }, 3000);
    setTimeout(() => {
        playerHit();
    }, 4000);
    setTimeout(() => {
        playerHpBarChange();
    }, 4500);
    setTimeout(() => {
        monsterAttack();
    }, 4500);
}

// function totalGamePlay(){
//     monsterAppear();
//     buttonClickAttackTest();
//     gameplay();
// }
// totalGamePlay();

// function playerAttackGeneral(){
//     if(playerAttack() === 0){
//         playerAttackAnimation(); 
//         setTimeout(() => {
//             monsterHit();
//         }, 1000);
//         setTimeout(() => {
//             monsterHpBarChange();
//         }, 1500);
//         setTimeout(() => {
//             playerAttack();
//         }, 1500);
//     }
//     // playerAttack();
// }

// function monsterAttackGeneral(){
//     setTimeout(() => {
//         monsterAttackAnimation();
//     }, 3000);
//     setTimeout(() => {
//         playerHit();
//     }, 4000);
//     setTimeout(() => {
//         monsterAttack();
//     }, 4500);
//     // monsterAttack();
//     setTimeout(() => {
//         playerHpBarChange();
//     }, 4500);
// }

// function falseButtonClickAttack(){
//     setTimeout(() => {
//         monsterAttackAnimation(); // 몬스터가 공격하는 애니매에션
//     }, 3000);
//     setTimeout(() => {
//         playerHit(); // 플레이어가 맞는 애니메이션
//     }, 4000);
//     setTimeout(() => {
//         monsterAttack(); // 플레이어 hp 숫자 변화
//     }, 4500);
//     // monsterAttack();
//     setTimeout(() => {
//         playerHpBarChange(); // 플레이어 hp bar 변화
//     }, 4500);
// }

// if(AppearIndex[0].hp === 0){

// }
        // playerHpBarChange();
        // setTimeout(monsterAttack() {
            // }, 1000);

function steal(monsterPer) {
    //let SuccessStealPercentage = 100;
    let stealPercentage = parseInt(Math.random() * (player.stealPer - monsterPer));
    let randStealPer = parseInt(Math.random() * 100);

    if (stealPercentage >= randStealPer) {
        alert("훔치기 성공!");
        // console.log("훔치기 성공!");
    } else if (stealPercentage < randStealPer) {
        alert("훔치기 실패ㅠㅠ");
        // console.log("훔치기 실패");
    }
    // 상점에 들어가야할기능
    // if(stealPercentage===maxstealPercentage)
    // {
    //     alertMessage("확률을 100%이상으로 높일수없습니다.");
    // }


}

function buttonClickSteal(){
    playerAttackAnimation();
    setTimeout(() => {
        monsterHit();
    }, 1000);
    setTimeout(() => {
        steal(monster[0].stealSuccessPer);
    }, 2000);
    // setTimeout(() => {
    //     playerAttack();
    // }, 1500);
    // // playerAttack();
    // setTimeout(() => {
    //     monsterHpBarChange();
    // }, 1500);
    // monsterHpBarChange();
    setTimeout(() => {
        monsterAttackAnimation();
    }, 5000);
    setTimeout(() => {
        playerHit();
    }, 6000);
    setTimeout(() => {
        monsterAttack();
    }, 6500);
    // monsterAttack();
    setTimeout(() => {
        playerHpBarChange();
    }, 6500);
}


// function steal(){

// }

// function buttonClickItemUse(){ // 아이템 이용 탭
    
// }

// function itemUse(){

// }

// 1. 몬스터 정보 불러오기 : monsterAppear()
// 2. 싸우기/훔치기/아이템 : buttonclick
// 3. if monster hp = 0 : gameplay() + monsterAppear()
// 4. if player hp = 0 : 메인페이지
// 반복
let i = 0;
while(i < 7){
    monsterAppear();
    // 싸우기
    if(monster[0].hp === 0){
        setTimeout(() => {
            alert(`${monster[0].name}을(를) 처치하였습니다.`)
        }, 500);
        gameplay();
        monsterAppear();
    }
    if(player.hp === 0){
        setTimeout(() => {
            alert("응 사망. 더 강해져서 와라");
        }, 500);
        // alert("사망하셨습니다. 다시 도전하세요.")
        setTimeout(() => {
            location.href = "http://127.0.0.1:5500/kah/main.html";
        }, 1000);
    }
    i++;
}