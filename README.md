<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>CloneTube 1차 프로젝트</h1>
  <section>
    <h2>📌프로젝트 소개</h2>
    <li>테섭 사이트 구축 : <a href="https://sson.dothome.co.kr/dev/First_Project/youtube_list.html" target="_blank"> 1차 프론트앤드 프로젝트 바로보기</a> </li> <br/>
    <li>GitHub Pages 배포 : <a href="https://sson77.github.io/CloneTube/" target="_blank">  https://sson77.github.io/CloneTube/</a> </li> <br/>
    <li>프로젝트 명: YouTube 클론 웹 애플리케이션 </li> 
    <li>프로젝트 개요: <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 본 프로젝트는 YouTube의 주요 기능을 클론하여, 영상 목록 조회, 영상 상세 보기,<br/> 
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사용자 인터랙션(댓글, 좋아요/싫어요),<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;반응형 UI 등을 구현한 웹 애플리케이션입니다.<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;실제 YouTube의 UI/UX를 참고하여 HTML, CSS, JavaScript, Bootstrap 등의 기술을 활용하였으며,<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;유튜브 임베드 기능을 통해 실제 영상 재생 환경을 구성하였습니다.<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;총 3단계에 걸쳐 기능을 점진적으로 확장하며 클론 프로젝트를 완성하였고,<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GitHub에 버전 관리 및 배포를 함께 진행했습니다.</li><br/>
    <li>주요 구현 내용: <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 메인 페이지 UI 구성 (네비게이션 바, 사이드바, 썸네일 카드 등)<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 메인 페이지 UI 구성 (네비게이션 바, 사이드바, 썸네일 카드 등)<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 영상 클릭 시 상세 페이지로 이동 및 유튜브 임베드 영상 재생<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 댓글 등록, 좋아요/싫어요 버튼 상태 반영 등 사용자 인터랙션 기능<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 반응형 재생 목록 디자인 구현 (선택)<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- URL 파라미터 처리 및 iframe 활용<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- GitHub에 소스 코드 관리 및 Netlify 등으로 결과물 배포<br/> </li>
  </section><br/>

  
  <section>
    <h2>📌주제</h2>
    <p>📺 유튜브 영상 클론 및 인터랙션 구현</p>
    <p><a href="https://www.youtube.com/watch?v=6Z_SUUobEvs"><img src="https://img.youtube.com/vi/6Z_SUUobEvs/0.jpg" style="width:60%"></a><br/>
    시연영상_01(음성포함)</p><br/>
    <p><a href="https://www.youtube.com/watch?v=DLqPZUur3cA"><img src="https://img.youtube.com/vi/DLqPZUur3cA/0.jpg" style="width:60%"></a><br/>
    시연영상_02(음성포함)</p><br/>
    <p><a href="https://www.youtube.com/watch?v=BvZvuj72yzU"><img src="https://img.youtube.com/vi/BvZvuj72yzU/0.jpg" style="width:60%"></a><br/>
    시연영상</p>
  </section><br/>
  <section>
    <h2>📌요구사항</h2>
    <h3>1단계</h3>
    <h4>가. 메인 화면</h4>
    <ul>
      <li>
        상단 네비게이션 바 (로고, 검색창, 사용자 아이콘)
        <ul>
          <li>a. 로고 클릭시 홈페이지 상태 리로드</li>
          <li>b. 검색창에서 키워드 입력 검색 가능 (추가 구현 사항으로, 검색 기능은 구현되지 않아도 됨)</li>
          <li>c. 사용자 아이콘 클릭시 계정 정보 (새로운 UI 구현, 사용자 정보 UI 클릭시 특정 링크로의 연결은 구현되지 않아도 됨)</li>
        </ul>
      </li>
      <li>
        좌측 사이드바 (홈, 구독 아이콘 포함)
        <ul>
          <li>a. 홈 클릭시 홈페이지 상태 리로드</li>
          <li>b. 구독 아이콘 클릭시 구독 관련 페이지 (실제 유튜브상의 구독 페이지와 같은 UI로 구현)</li>
        </ul>
      </li>
      <li>
        영상 썸네일 카드 영역 카드 8개 이상
        <ul>
          <li>썸네일, 영상 제목, 채널명, 조회수, 업로드 날짜 표시</li>
          <li>마우스 호버 시 카드 애니메이션 (확대 등)</li>
        </ul>
      </li>
    </ul>
  </section>
   <section> 
    <h2>2단계</h2>
  <h3>가. 영상 상세 페이지 구현 및 URL 구조 설계</h3>
  <ul>
    <li>각 영상 클릭 시 <code>video.html?videoId=1</code> 형식의 페이지로 이동</li>
    <li>JS로 <code>videoId</code> 파라미터 읽기</li>
    <li>상세 페이지에는 다음 정보 표시
      <ul>
        <li>a. 영상 iframe (YouTube 임베드)</li>
        <li>b. 제목, 채널명, 조회수, 업로드일</li>
        <li>c. 설명 영역</li>
      </ul>
    </li>
  </ul>
  </section>
  <section>
    <h3>3단계</h3>
    <h4>가. 사용자 인터랙션 (아래 기능 중 2가지 이상 구현)</h4>
    <ul>
      <li>a. 댓글 작성 기능 (로컬 저장 X 가능)</li>
      <li>b. 좋아요 / 싫어요 버튼 상태 반영</li>
      <li>c. 우측 재생 목록 반응형 디자인</li>
    </ul>
  </section>
    <section>
    <h4>추가 요구사항</h4>
    <ul>
      <li>코드는 Github Repository를 생성하여 작업합니다.</li>
      <li>인터랙션에서의 코드 작업 후, 1~3의 한 번씩 commit, push 합니다.</li>
      <li>구현한 결과물을 배포합니다.</li>
    </ul>
  </section>
  <section>
    <h2>2-3. 결과물 배포하기</h2>
    <p>구현 완료한 결과물을 <strong>GitHub Pages</strong>로 배포합니다.</p>
    <p>
      배포가 성공적으로 이루어졌다면 
      <span class="highlight">https://{Github 계정}.github.io/{프로젝트명}</span> 
      경로로 접속이 가능합니다.
    </p>
  </section><br/>
  <section>
    <h2>💡 주요 기능</h2>
    <ul>
      <li>1. 유튜브 영상 클론 및 인터랙션 구현</li>
      <li>2. 유튜브 키워드 검색 기능  </li> 
      <li>3. 댓글 기능 구현 </li>
      <li>4. 좋아요 +1, 싫어요-1 구현 </li>     
      <li>5. Bootstrap5.0 활용한 반응형 웹 구현 </li>
      <li>6. 메인, 상세, 구독, 재생목록 페이지 구현 </li>
      <li>7. 상단 HEADER , SIDER, PROFILE MENU 구현 </li>
      <li>8. 상단 햄버거 버튼 메뉴 노출, 미노출 구현 </li> 
    </ul>
  </section><br/>

  <section>
    <h2>🛠 기술 스택</h2>
    <ul>
      <li>Front-End: HTML, CSS, JavaScript</li>
      <li>라이브러리: Bootstrap </li>
    </ul>
  </section><br/>

  <section>
    <h2>📁 프로젝트 구조</h2>
    <ul>
      <li><code>📁 index.html</code>: GitHub Pages 메인(리스트) 페이지</li>   
      <li><code>📁 youtube_list.html</code>: 메인(리스트) 페이지</li>  
      <li><code>📁 subscribe.html</code>: 구독 페이지</li>       
      <li><code>📁 video.html</code>: 상세 페이지</li>     
      <li><code>📁 img/</code>: 이미지 파일</li>
      <li><code>📁 css/</code>: Bootstrap 스타일시트</li>
      <li><code>📁 js/</code>: JavaScript 파일</li>
      <li><code>📁 common/</code>: 공통 파일</li>
    </ul>
  </section><br/>

  <section>
    <h2>💻 실행 방법</h2>
    <pre><code>
git clone https://github.com/sson77/CloneTube.git
    </code></pre>
  </section><br/>

  <section>
    <h2>🏷 관련 태그</h2>
    <div class="tags">
      <span>#웹프로젝트</span><br/>
      <span>#프론트앤드 프로젝트</span><br/> 
      <span>#반응형 디자인</span> <br/>
      <span>#HTML</span><br/>
      <span>#CSS</span><br/>
      <span>#JavaScript</span><br/>
      <span>#Bootstrap</span><br/>
    </div>
  </section><br/>

  <section>
    <h2>❗ 어려웠던 점 및 느낀 점</h2>
    <p>  - Bootstrap을 활용한 사용자 화면(UI/UX) 프론트엔드 개발은 보다 직관적이고 효율적인 방식으로 구현할 수 있었으며, 공수 시간을 절감하는 데에도 큰 도움이 되는 **매우 실용적인 프레임워크라는 인상을 받았습니다.<br/><br/>
       - 단순한 클론 개발을 넘어, 개인적으로 선호하는 영상이나 채널을 소개하고 클립을 저장하는 형태로 **개인 취향이 반영된 큐레이션 중심의 웹사이트를 구성하고자 했습니다. 그 점에서 이 프로젝트는 단순한 구현을 넘어선 의미가 있었습니다.
      <br/><br/>

## 🔍 Bootstrap 부트스크랩 자체가 반응형 웹이다 ❓❓❓

맞습니다. **부트스트랩(Bootstrap)** 자체가 **반응형 웹 디자인(Responsive Web Design)**을 기본으로 지원하도록 설계되어 있습니다.

### 📌 부트스트랩이 반응형 웹인 이유:

1. **그리드 시스템**
    - 부트스트랩은 12열 기반의 **유연한 그리드 시스템**을 제공합니다.
    - `col-`, `col-sm-`, `col-md-`, `col-lg-`, `col-xl-`, `col-xxl-` 등의 클래스를 통해 화면 크기에 따라 자동으로 레이아웃을 조정합니다.
2. **미디어 쿼리(Media Queries)**
    - 부트스트랩은 다양한 디바이스 크기에 맞춰 미리 정의된 **브레이크포인트(breakpoints)**를 사용합니다.
    - 예: 모바일(<576px), 태블릿(≥768px), 데스크탑(≥992px) 등
3. **반응형 유틸리티 클래스**
    - `d-none`, `d-sm-block`, `m-0`, `p-3` 등 다양한 반응형 관련 유틸리티 클래스를 제공합니다.
    - 특정 해상도에서 요소를 숨기거나 보여주는 것도 쉽게 설정할 수 있습니다.
4. **반응형 컴포넌트**
    - 네비게이션 바(navbar), 모달(modal), 카드(card) 등 거의 모든 컴포넌트가 자동으로 반응형으로 작동하도록 설계되어 있습니다.

### ✅ 결론:

> 부트스트랩은 "반응형 웹 개발을 쉽게 하도록" 만든 프레임워크입니다. 따로 반응형 옵션을 추가하지 않아도, 기본적으로 모바일부터 데스크탑까지 다양한 화면에 적응하도록 설계되어 있습니다.
> 

## 🔍 **Bootstrap** 부트스크랩 몇 버전까지 반응형 웹이야❓❓❓

부트스트랩(Bootstrap)은 **버전 3부터 반응형 웹을 공식적으로 지원**하기 시작했고, **이후 모든 버전(4, 5, 최신 버전)**까지 **기본적으로 반응형 웹 디자인을 지원**합니다.

---

### ✅ 각 버전별 반응형 웹 지원 요약

| 버전 | 반응형 웹 지원 여부 | 주요 특징 |
| --- | --- | --- |
| **v2.x** | ❌ 기본은 고정 폭, 반응형은 선택 옵션 | `responsive.css`를 별도로 추가해야 했음 |
| **✅ v3.x** | ✅ 기본 반응형 지원 시작 | 모바일 우선(mobile-first) 도입, `col-xs`, `col-sm` 등 도입 |
| **✅ v4.x** | ✅ 향상된 반응형 기능 | Flexbox 기반 그리드 시스템, 유틸리티 클래스 강화 |
| **✅ v5.x** | ✅ 최신 반응형 지원 | 더 많은 브레이크포인트(`xxl` 추가), IE 지원 제거, CSS 커스터마이징 강화 |
| **✅ 최신 버전 (v5.3~)** | ✅ 반응형 완전 지원 | CSS 변수 도입, 다크모드 등 최신 웹 트렌드 반영 |

---

### 📌 정리:

> ✅ Bootstrap 3부터 현재 최신 버전까지 모두 반응형 웹을 기본 지원합니다.
> 
> 
> ✅ 최신 버전일수록 반응형 기능이 더 유연하고 강력합니다.
>    </p>
  </section><br/>

  <section>
    <h2>📁 프로젝트 결과보고서</h2>
    <ul>
     <li><a href="https://docs.google.com/presentation/d/1dxxUZckGd5elEyiXbQbkL5EyzqoD3-kA/edit?usp=sharing&ouid=116392357837924649713&rtpof=true&sd=true">📁프로젝트 결과보고서 웹 문서뷰 보기</a></li> 
      <li><a href="https://github.com/sson77/CloneTube/tree/main/docs">📁프로젝트 결과보고서 링크</a></li> 
    </ul>
  </section><br/>
</body>
</html>











