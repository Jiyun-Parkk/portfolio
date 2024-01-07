export interface WorkType {
  detail: string;
  contribution: {
    team: string;
    contribute: string;
  };
  stack: string;
  point: string[];
  source: {
    git: string;
    link?: string;
    notion?: string;
    npm?: string;
  };
  report?: {
    title: string;
    link: string;
  }[];
}

interface WorksType {
  [key: string]: WorkType;
}

const workContents: WorksType = {
  ["Shroop"]: {
    detail: `슈룹은 안전거래를 할 수 있는 중고거래 플랫폼입니다. <br />슈룹이 생각하는 안전거래는 아래와 같습니다.<br /><br />☝️ 직거래가 아닌 비대면 온라인 거래를 한다.<br />☝️ 비대면 거래지만 신뢰성 있는 상품을 구매할 수 있다.<br />☝️ 비대면 거래지만 신뢰성 있는 금전 거래를 할 수 있다`,
    contribution: {
      team: "4인 개인 프로젝트",
      contribute: "25%",
    },
    stack: `Frontend: Vue.js, Vuetify, Pinia<br /> Backend: Spring boot, Gradle, JPA <br /> Test: cypress <br /> Infra: AWS EC2, RDS, S3`,
    point: [
      "이미지 최적화 및 성능 개선",
      "서비스 메인 프레임 구축",
      "관리자 메인 프레임 구축",
      "이미지 첨부, 삭제, 수정 기능 구현",
      "반응형 구현",
      "상품 CRUD API 개발",
      "상품 좋아요 API 개발",
      "구매내역 조회 API 페이징 처리",
      "RestDocs 생성 환경 세팅 & 문서화",
      "프론트엔드 배포 & CI/CD 구축",
      "백엔드 배포 & CI/CD 구축",
      "프론트 & 백엔드 https 적용",
    ],
    report: [
      {
        title: "슈룹 회고1 - 기획 및 브레인스토밍",
        link: "https://www.junedevblog.com/blog/woori-fisa/final-project-1e",
      },
      {
        title: "슈룹 회고2 - 화면설계서 작성 및 ERD 설계",
        link: "https://www.junedevblog.com/blog/woori-fisa/final-project-2",
      },
      {
        title: "슈룹 회고 3 - 화면 완료, 403에러 해결",
        link: "https://www.junedevblog.com/blog/woori-fisa/final-project-4",
      },
    ],
    source: {
      git: "https://github.com/EASYPEACH/shroop",
    },
  },
  ["Late Pass"]: {
    detail:
      "우리FISA 클라우드 서비스 개발 교육생은 지각을 하면 노래를 불러야 합니다.노래 부르기를 면제 하기 위해서는 강사님이 만든 퀴즈를 선착순으로 맞추고 지각면제권을 얻어야 합니다. 우리FISA 교육색들의 지각면제권을 발급하기 위한 퀴즈 플랫폼입니다.",
    contribution: {
      team: "4인 개인 프로젝트",
      contribute: "25%",
    },
    stack: `Frontend: Vue.js, Vuetify, Pinia<br />Backend: Spring boot, JPA<br /> Infra: EC2, RDS`,
    point: [
      "서비스 페이지, 관리자 페이지 UI 개발",
      "HTTP Session을 이용한 로그인 기능 구현",
      "퀴즈 생성 및 관리 기능 구현",
    ],
    source: {
      git: "https://github.com/woorifisa-service-dev/backend-2nd-LatePass",
    },
  },
  ["Chat Dog"]: {
    detail:
      "Chatgpt API를 활용하여 여러가지 분야를 상담해주는 서비스 입니다. 생년월일을 기재하여 운세를 봐주는 포춘독, 요리법을 알려주는 레시피독, 다이어트 식단을 짜주는 칼로리독, 다양한 주류 정보를 알려주는 드렁큰독이 있습니다.",
    contribution: {
      team: "1인 개인 프로젝트",
      contribute: "100%",
    },
    stack: "NextJS , Typescript, Recoil, Styled-components",
    point: [
      "Next.JS로 SEO 최적화 (챗독 검색시 구글 최상단 노출)",
      "Chatgpt API 활용으로 최신 기술 적용 경험",
      "Next.JS 내장 API 구현으로 chat 기능 구현",
    ],
    source: {
      git: "https://github.com/Jiyun-Parkk/chatDog",
      link: "https://aichatdog.com/",
    },
  },
  ["룰루트레이닝"]: {
    detail: `집에서도 쉽고 재미있게 필라테스를 할 수 있도록 도와주는 '필라테스 트레이닝' 서비스 입니다. <br /><br />서비스 컨셉과 디자인은 필라테스 운동복 브랜드인 '룰루'에서 벤치마킹 하여, '룰루'브랜드에서 출시한 서비스인 것 처럼 고안 해보았습니다.  <br /><br />이제는 필라테스도 검증된 강사의 영상을 보고 집에서 편하게 운동해 볼 수 있습니다. 운동을 완료하면 기준에 따라 완료 뱃지를 수여하고, 일일 소모 칼로리를 계산해주어 더 적극적으로 운동 할 수 있도록 동기부여를 해줍니다.`,
    contribution: {
      team: "4인 팀프로젝트 (프론트개발자 3명 , 기획자 1명)",
      contribute: "기획 50% 회원가입기능 구현 100%",
    },
    stack: "NextJS , Typescript, Recoil, React-query, Styled-components, Firebase",
    point: [
      "재사용 가능한 컴포넌트를 간단한 코드로 구현하기 위해 지속적인 코드 리뷰 진행",
      "사용자 편의를 고려한 UI/UX 기획",
      "NextJS / Typescript 병행 사용",
      "Recoil로 전역 상태관리",
      "Firebase Auth 활용하여 로그인/회원가입 기능 구현",
      "Firebase Database 활용하여 유저 세부정보 저장",
    ],
    report: [
      {
        title: "로그인 인증체크 로직",
        link: "https://june-dev.vercel.app/blog/next-js/nextjs-firebase",
      },
      {
        title: "EventTarget 속성 error 해결",
        link: "https://june-dev.vercel.app/blog/react/errors/formTypeerror",
      },
      {
        title: "Recoil hydrate error 해결",
        link: "https://github.com/lulutraining/lulutraining/issues/66",
      },
    ],
    source: {
      git: "https://github.com/lulutraining/lulutraining",
      link: "",
      notion: "https://lulutraining.notion.site/22d39bd0360940d3bcddd177cbd3141d",
    },
  },
  ["Juju-Weather"]: {
    detail:
      "제주도의 도시별 날씨를 확인하고, 날씨에 따른 옷차림을 추천해드립니다. 그리고 따로 검색하지 않아도 제주도의 핫 플레이스의 리스트를 한번에 볼 수 있습니다. 뿐만 아니라 한라산 코스별 입하산 허용시간 정보를 알려드립니다.",
    contribution: {
      team: "2인 팀프로젝트 (프론트개발자 2명)",
      contribute: "날씨에 따른 옷차림 추천 기능 구현 / 프론트개발 기여도 60%",
    },
    stack: "ReactJS , Typescript, Redux, Redux-tookit",
    point: [
      "useAxios 훅으로 api fetch 간편화",
      "반응형 제작 mobile / laptop / desktop",
      "darkmode / lightmode 구현",
      "ReactJS / Typescript 병행 사용",
      "Redux/Redux-tookit으로 전역 상태관리",
      "Redux-tookit Thunk로 API pending 전 로딩 상태 구현",
    ],
    source: {
      git: "https://github.com/jeju-weather/jeju-weather",
      link: "https://jeju-weather.github.io/jeju-weather/",
    },
  },
  //["Coin-Tracker"]: {
  //  detail:
  //    "Coinpaprika에서 무료로 제공 되는 API를 가공하여 1위~100위까지의 코인 리스트들을 보여주고, 개별 코인 페이지에서는 현재 가격 그래프와 시장 상황을 확인 해볼 수 있습니다.",
  //  contribution: { team: "1인 개인 프로젝트", contribute: "100%" },
  //  stack: "React , Typescript, Recoil, React-query, Styled-components",
  //  point: [
  //    "styled-components 라이브러리로 Dark / Light 모드 구현",
  //    "React / Typescript 병행 사용",
  //    "Chart.js 라이브러리로 데이터 시각화 구현",
  //    "Recoil로 전역 상태관리",
  //    "React-query 사용으로 Api data 캐싱, 불필요한 데이터 호출 방지",
  //    "Code spliting을 하며 지속적인 리팩토링 진행",
  //  ],
  //  source: {
  //    git: "https://github.com/Jiyun-Parkk/coin-tracker",
  //    link: "https://jiyun1937.github.io/coin-tracker/",
  //  },
  //},
  ["Portfolio"]: {
    detail:
      "개인 이력과 작업물들을 보여주는 페이지입니다. 포트폴리오인 만큼 Next.js를 활용하여 SEO 최적화에 신경썼습니다.",
    contribution: { team: "1인 개인 프로젝트", contribute: "100%" },
    stack: "NextJS , Typescript, Redux, Styled-components, MUI, Framer-motion",
    point: [
      "styled-components 라이브러리로 Dark / Light 모드 구현",
      "NextJS / Typescript 병행 사용",
      "Redux로 전역 상태 관리",
      "Framer-motion 활용하여 모션 적용",
      "Redux Selector, Dispatch custom hook 생성으로 편리하게 호출",
    ],
    source: {
      git: "https://github.com/Jiyun-Parkk/portfolio",
      link: "june-portfolio.vercel.app",
    },
  },
  ["Export-JSON"]: {
    detail:
      "대량의 텍스트 데이터를 Input Interface에서 편하게 작성하고, 바로 JSON 파일로 추출할 수 있는 프로젝트 입니다. 매달 발송하는 다국어 프로젝트의 글로벌 텍스트를 더 편하고 빠르게 작업 할 수 있는 방법에 대해 고민하게 되면서 개발한 프로젝트 입니다.",
    contribution: {
      team: "1인 개인 프로젝트",
      contribute: "100%(회사 프로젝트 작업환경에 기여)",
    },
    stack: "HTML , CSS, Javascript, Node.js, Express",
    point: [
      "npm package 배포, 보일러플레이트로 제작",
      "npx create-export-json my-app 으로 설치",
      "Class를 사용하여 모듈식으로(UI 컴포넌트화) 작업",
      "Node.js와 Express를 활용한 간단한 서버 구축",
      "input interface에서 작성한 데이터를 post로 서버에 전송",
      "file-system 웹팩을 활용하여, 전달받은 데이터를 기반으로 JSON 파일 추출",
      "작업자의 작업 편의성 및 작업속도 50%이상 향상",
    ],
    source: {
      git: "https://github.com/Jiyun-Parkk/export-json-module",
      npm: "https://www.npmjs.com/package/create-export-json",
    },
  },
};
export default workContents;
