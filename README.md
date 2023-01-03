## 개인 포트폴리오 사이트

개인 작업물들이 정리되어 있는 포트폴리오 입니다.

## 샘플 화면

![ezgif com-gif-maker](https://user-images.githubusercontent.com/72537762/210368353-61e7b532-365f-4fa8-b108-4f6d51b36d9d.gif)

## 사용 기술

<img src ="https://img.shields.io/badge/nextjs-000000.svg?&style=for-the-badge&logo=next.js&logoColor=white" align="center"/>
<img src ="https://img.shields.io/badge/typescript-1572B6.svg?&style=for-the-badge&logo=typescript&logoColor=white" align="center"/>
<img src ="https://img.shields.io/badge/Redux-764ABC.svg?&style=for-the-badge&logo=Redux&logoColor=white" align="center"/>
<img src ="https://img.shields.io/badge/styled_components-DB7093.svg?&style=for-the-badge&logo=styled-components&logoColor=white" align="center"/>
<img src ="https://img.shields.io/badge/framer_motion-EF2D5E.svg?&style=for-the-badge&logo=framer-motion&logoColor=white" align="center"/>

## 배포

<img src ="https://img.shields.io/badge/vercel-000000.svg?&style=for-the-badge&logo=vercel&logoColor=white" align="center"/>

## Point

    1. styled-components 라이브러리로 Dark / Light 모드 구현
    2. meterial-ui로 감각적인 디자인
    3. NextJS / Typescript 병행 사용
    4. Redux로 전역 상태 관리
    5. Framer-motion 활용하여 모션 적용
    6. Redux Selector, Dispatch custom hook 생성으로 편리하게 호출
    7. mobile / web 반응형 레이아웃

## 고민한 부분

### 1. 콘텐츠 구성

너무 많은 콘텐츠를 보여주는 것보다 필요한 것만 간단하게 구성하는 것이 좋다고 생각했습니다.

- 메인 : 좋아하는 것, 잘하는 것이 무엇인지 간략하게 보여줄 수 있는 인트로 문구를 삽입했습니다.
- 스킬 : 사용할 수 있는 스킬들을 이름만 나열하는 것이 아니라 어떤 부분을 중점을 두고 개발하는지에 대한 내용을 추가했습니다.
- 프로젝트 : 프로젝트마다 페이지로 구성하는 것 보다 팝업으로 간단하게 보는 것이 편할 것 같다고 생각했습니다. 프로젝트 배너를 클릭하면 상세 프로젝트 내용을 확인 할 수 있습니다.

### 2. 컴포넌트 분리

최대한 재사용이 되는 UI만 컴포넌트화 하기 위해 많은 고민을 했고, 너무 자잘한 코드스플리팅은 지양하려 했습니다.

### 3. 상태관리

그동안 `Recoil`라이브러리를 사용하여 상태관리를 했었는데, `Redux`의 필요성도 느끼게 되어 공부를 할 겸 적용해 보았습니다. `Redux`에서 상태값과 setter 함수를 쉽게 호출하기 위해 `custom hook`을 만들어서 사용했습니다.

### 4. 모션 구성

이전의 포트폴리오 프로젝트는 정적으로 만들었었는데, 모션을 추가하여 좀더 생동감 있는 포트폴리오를 구성하고 싶었습니다. `Framer-motion`라이브러리를 활용하여 부드럽고 자연스러운 모션들을 추가하였고, 모션으로 인한 불필요한 컴포넌트 렌더링을 방지하기 위해, `useRef`로 요소를 참조하여 DOM 조작을 최소화 했습니다.
