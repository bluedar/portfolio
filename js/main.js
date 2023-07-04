//프로필 카드 스크롤 이벤트
const profile_card = document.querySelector(".profile_card");
window.addEventListener("scroll", function () {
  const windowWidhth = (window.innerWidth / 100) * 56 * 2.5;
  if (window.innerHeight / 2 + this.window.scrollY > windowWidhth) {
    profile_card.classList.add("on");
  } else {
    profile_card.classList.remove("on");
  }
});

// 프로필 카드를 클릭하면 상세정보창으로 스크롤되는 이벤트
profile_card.addEventListener("click", () => {
  const scrollPage1 = document.querySelector("#scrollPage1");
  const position =
    scrollPage1.getBoundingClientRect().top - (window.innerWidth / 100) * 8;
  const positionScroll = window.scrollY + position;
  window.scrollTo({ top: positionScroll, behavior: "smooth" });
});

// 상세정보창 스크롤이벤트
const Introduce = document.querySelector(".Introduce");
window.addEventListener("scroll", function () {
  const windowWidhth = (window.innerWidth / 100) * (56 * 3.5 - 8);
  const windowWidhth2 = (window.innerWidth / 100) * 56 * 2.5;
  if (window.innerHeight / 2 + this.window.scrollY > windowWidhth) {
    Introduce.classList.add("stop");
  } else {
    Introduce.classList.remove("stop");
  }
  if (window.innerHeight / 2 + this.window.scrollY < windowWidhth2) {
    Introduce.classList.add("on");
    Introduce.classList.remove("stop");
  } else {
    Introduce.classList.remove("on");
  }
});

Introduce.addEventListener("click", () => {
  document.querySelector(`#scrollPage2`).scrollIntoView({ behavior: "smooth" });
});

// 스킬창 스크롤 이벤트
const skill_wrap = document.querySelector(".skill_wrap");
window.addEventListener("scroll", function () {
  const windowWidhth = (window.innerWidth / 100) * (56 * 5);
  const windowWidhth2 = (window.innerWidth / 100) * (56 * 4.5);
  if (window.innerHeight / 2 + this.window.scrollY > windowWidhth) {
    skill_wrap.classList.add("on");
  }
  if (window.innerHeight / 2 + this.window.scrollY < windowWidhth2) {
    skill_wrap.classList.remove("on");
  }
});

// 네브 버튼 스크롤 이동
const asideMenuItems = document.querySelectorAll(
  "aside > nav > ul > li > button"
);
const headerMenuItems = document.querySelectorAll(
  "header > nav > ul > li > button"
);

const navBtn = (menuItems) => {
  menuItems.forEach(function (menuItem, index) {
    menuItem.onclick = function (e) {
      e.preventDefault();
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove("on");
      });
      menuItem.classList.add("on");
      const scrollPage1 = document.querySelector("#scrollPage1");
      const position =
        scrollPage1.getBoundingClientRect().top - (window.innerWidth / 100) * 8;
      const positionScroll = window.scrollY + position;
      //
      if (index === 1) {
        window.scrollTo({ top: positionScroll, behavior: "smooth" });
      } else {
        document
          .querySelector(`#scrollPage${index}`)
          .scrollIntoView({ behavior: "smooth" });
      }
    };
  });
};

navBtn(asideMenuItems);
navBtn(headerMenuItems);

// 사이트페이지 스크롤 이벤트
const screens = document.querySelectorAll(".screen");
const controlBtns = document.querySelectorAll(".controlBtn");
const info_wrap = document.querySelectorAll(".info_wrap");
const line = document.querySelectorAll(".line");
screens.forEach((screen, index) => {
  window.addEventListener("scroll", function () {
    const windowWidhth = (window.innerWidth / 100) * 56 * (7 + 2 * index);
    const windowWidhth2 = (window.innerWidth / 100) * 56 * (6.5 + 2 * index);
    if (window.innerHeight / 2 + this.window.scrollY > windowWidhth) {
      setTimeout(() => {
        screen.classList.add("on");
        info_wrap[index].classList.add("on");
      }, 300);
      setTimeout(() => {
        controlBtns[index].classList.add("on");
      }, 600);
      setTimeout(() => {
        line[index].classList.add("on");
      }, 800);
    }
    if (window.innerHeight / 2 + this.window.scrollY < windowWidhth2) {
      screen.classList.remove("on");
      controlBtns[index].classList.remove("on");
      info_wrap[index].classList.remove("on");
      line[index].classList.remove("on");
    }
  });
});

const controlBtnClick = (index) => {
  // line[index].classList.remove("on");
  // setTimeout(() => {
  //   line[index].classList.add("on");
  // }, 600);
};

let siteIntroIndex;
let siteIntroMaxIndex;

const siteIntros = document.querySelectorAll(".siteIntro");

siteIntros.forEach((siteIntro, setIndex) => {
  if (!siteIntro) {
    return;
  }
  const prevBtn = siteIntro.querySelector(".prevBtn");
  const nextBtn = siteIntro.querySelector(".nextBtn");

  const ULs = siteIntro.querySelectorAll("ul");
  const LiArr = ULs[0].querySelectorAll("li");
  const LisLength = LiArr.length;
  if (LisLength === 1) {
    prevBtn.classList.add("on");
    nextBtn.classList.add("on");
  }

  //현재 온 되어있는 인덱스 값을 변수에 담아둔다.

  prevBtn.addEventListener("click", () => {
    ULs.forEach((ul) => {
      const Lis = ul.querySelectorAll("li");
      Lis.forEach((li, index) => {
        if (li.classList.contains("on")) {
          li.classList.remove("on");
          siteIntroIndex = index;
        }
      });
      siteIntroMaxIndex = Lis.length - 1;
      siteIntroIndex = siteIntroIndex - 1;
      if (siteIntroIndex < 0) {
        siteIntroIndex = siteIntroMaxIndex;
      }
      Lis[siteIntroIndex].classList.add("on");
    });

    controlBtnClick(setIndex);
  });

  nextBtn.addEventListener("click", () => {
    ULs.forEach((ul) => {
      const Lis = ul.querySelectorAll("li");
      Lis.forEach((li, index) => {
        if (li.classList.contains("on")) {
          li.classList.remove("on");
          siteIntroIndex = index;
        }
      });
      siteIntroMaxIndex = Lis.length - 1;
      siteIntroIndex = siteIntroIndex + 1;
      if (siteIntroIndex > siteIntroMaxIndex) {
        siteIntroIndex = 0;
      }
      Lis[siteIntroIndex].classList.add("on");
    });

    controlBtnClick(setIndex);
  });
});
