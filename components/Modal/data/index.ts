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
  };
}

interface WorksType {
  [key: string]: {
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
    };
  };
}

const workContents: WorksType = {
  ["Coin-Tracker"]: {
    detail:
      "Coinpaprika에서 무료로 제공 되는 API를 가공하여 1위~100위까지의 코인 리스트들을 보여주고, 개별 코인 페이지에서는 현재 가격 그래프와 시장 상황을 확인 해볼 수 있습니다.",
    contribution: { team: "1인 개인 프로젝트", contribute: "100%" },
    stack: "React , Typescript, Recoil, React-query, Styled-components",
    point: [
      "styled-components 라이브러리로 Dark / Light 모드 구현",
      "React / Typescript 병행 사용",
      "Chart.js 라이브러리로 데이터 시각화 구현",
      "Recoil로 전역 상태관리",
      "React-query 사용으로 Api data 캐싱, 불필요한 데이터 호출 방지",
      "Code spliting을 하며 지속적인 리팩토링 진행",
    ],
    source: {
      git: "https://github.com/jiyun-par/coin-tracker",
      link: "https://jiyun-par.github.io/coin-tracker/",
    },
  },
  ["Portfolio"]: {
    detail:
      "개인 이력과 작업물들을 보여주는 페이지입니다. 포트폴리오인 만큼 Next.js를 활용하여 SEO 최적화에 신경썼습니다.",
    contribution: { team: "1인 개인 프로젝트", contribute: "100%" },
    stack: "NextJS , Typescript, Redux, Styled-components, MUI, Framer-motion",
    point: [
      "styled-components 라이브러리로 Dark / Light 모드 구현",
      "meterial-ui로 감각적인 디자인",
      "NextJS / Typescript 병행 사용",
      "Redux로 전역 상태 관리",
      "Framer-motion 활용하여 모션 적용",
      "Redux Selector, Dispatch custom hook 생성으로 편리하게 호출",
    ],
    source: {
      git: "https://github.com/jiyun-par/portfolio",
      link: "june-portfolio.vercel.app",
    },
  },
  ["Oz-Training"]: {
    detail:
      "홈트족을 돕기위한 운동동기부여 서비스 입니다. 프로젝트 리딩 경험, 팀협업 경험을 쌓기 위해 직접 팀 빌딩을 하여 프로젝트를 리딩 하고 있습니다.",
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
    source: {
      git: "https://github.com/Oz-Training-Club/oz-training",
      link: "",
      notion: "https://oz-training.notion.site/22d39bd0360940d3bcddd177cbd3141d",
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
      "Class를 사용하여 모듈식으로(UI 컴포넌트화) 작업",
      "Node.js와 Express를 활용한 간단한 서버 구축",
      "input interface에서 작성한 데이터를 post로 서버에 전송",
      "file-system 웹팩을 활용하여, 전달받은 데이터를 기반으로 JSON 파일 추출",
      "작업자의 작업 편의성 및 작업속도 50%이상 향상",
    ],
    source: {
      git: "https://github.com/jiyun-par/export-json-module",
      link: "",
    },
  },
};
export default workContents;
