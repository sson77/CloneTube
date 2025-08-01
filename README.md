<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>CloneTube 1차 프로젝트</h1>
  <section>
    <h2>📌프로젝트 소개</h2>
    <li> 테섭 사이트 구축 : <a href="https://sson.dothome.co.kr/dev/First_Project/youtube_list.html" target="_blank"> 1차 프론트앤드 프로젝트 바로보기</a> </li> <br/>
    <li> GitHub Pages 배포 : <a href="https://sson77.github.io/CloneTube/" target="_blank">  https://sson77.github.io/CloneTube/</a> </li> <br/>
    <li> 프로젝트 소개는 문서 작성 중 입니다..✍️ </li> 
  </section><br/>

  
  <section>
    <h2>📌주제</h2>
    <p>📺 유튜브 영상 클론 및 인터랙션 구현</p>
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
      <li>문서 작성 중 입니다.✍️</li>
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
      <li><code>📁 youtube_view.html</code>: 상세 페이지</li>     
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
    <p>문서 작성 중 입니다.✍️ </p>
  </section><br/>

</body>
</html>
