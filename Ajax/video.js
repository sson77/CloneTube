  // URL 파라미터에서 videoId 가져오기
  const params = new URLSearchParams(window.location.search);
  const videoId = params.get('videoId');
  console.log(videoId);
  // 예시 데이터 (실제 서비스 시 API로 대체)
 const videoData = {
   '1': {
     youtubeId: 'HHmie_P3ykY?si=-QpDfmaeNuKiom5K',
     title: '챗GPT 이렇게 쓰면 뇌 기능이 저하됩니다',
     channel: '장동선의 궁금한 뇌',
     views: 84000,
     uploadDate: '6일 전',
     description: ''
   },
   '2': {
     youtubeId: 'eYx-aUkXFBc',
     title: '상류층과 서민층의 차원이 다른 문',
     channel: 'tvN Joy',
     views: 140000,
     uploadDate: '3일 전',
     description: ''
   },
   '3': {
     youtubeId: 'H2OLJY0iqNU',
     title: '트럼프가 6개월 간 감춘 진짜 돈의 흐름',
     channel: '비디오머그',
     views: 1300000,
     uploadDate: '1개월 전',
     description: ''
   },
   '4': {
     youtubeId: 'w2c1XclG4U0',
     title: '팔란티어 AI 방산 기업 위험한 질주',
     channel: '비디오머그',
     views: 550000,
     uploadDate: '4개월 전',
     description: ''
   },
   '5': {
     youtubeId: 'rSS5yM74zeo',
     title: '스탠포드가 가르치는 AI 시대 창의력 훈련법',
     channel: 'EO Korea',
     views: 760000,
     uploadDate: '2개월 전',
     description: ''
   },
   '6': {
     youtubeId: 'We6QG55wvac',
     title: '폭발물 테러로 꼬리빼기까지 산산조각',
     channel: '디글 클래식',
     views: 90000,
     uploadDate: '1개월 전',
     description: ''
   },
   '7': {
     youtubeId: 'JPQj-uLC--g',
     title: '팀장 하기 싫어요ㅜ 직장인 승진 회피하는 진짜 이유',
     channel: '스브스뉴스',
     views: 330000,
     uploadDate: '2개월 전',
     description: ''
   },
   '8': {
     youtubeId: 'OSAfKWkAUNU',
     title: '돈 없는 사람이 운 좋아지는 유일한 방법',
     channel: '세바시 인생질문',
     views: 370000,
     uploadDate: '3주 전',
     description: ''
   },
   '9': {
     youtubeId: 'rSS5yM74zeo',
     title: '돈 없는 사람이 운 좋아지는 유일한 방법',
     channel: '세바시 인생질문',
     views: 370000,
     uploadDate: '3주 전',
     description: ''
   },
   '10': {
     youtubeId: 'flAinFscVmM',
     title: '한국인이 반드시 가져야 할 방식과 태도',
     channel: '디글',
     views: 370000,
     uploadDate: '3주 전',
     description: ''
   },
   '11': {
     youtubeId: 'qgk7ro45ZPI',
     title: '[#유퀴즈온더블럭] 힘들어도 \'이렇게\' 읽으셔야 합니다 | 서울대 필...',
     channel: '딩글 :Diggle',
     views: 190000,
     uploadDate: '12일 전',
     description: ''
   },
   '12': {
     youtubeId: '10XF_KijZLA',
     title: '‘멸탑 바사삭’ MZ 언어까지 학습한 챗GPT...5년뒤 7억3천만명 쓰게 된다?',
     channel: 'MBCNEWS',
     views: 120000,
     uploadDate: '4일 전',
     description: ''
   },
   '13': {
     youtubeId: '0lJj6IHIYMM',
     title: '백만 유튜브 채널 가진 CEO의 회사는 왜 망했을까?',
     channel: '스브스뉴스 SUBUSUNEWS',
     views: 150000,
     uploadDate: '4일 전',
     description: ''
   },
   '14': {
     youtubeId: '10XF_KijZLA',
     title: '급증하는 멀티탭 화재, 진짜 원인은 따로 있다? | 크랩',
     channel: '크랩 KLAB',
     views: 270000,
     uploadDate: '4일 전',
     description: ''
   },
   '15': {
     youtubeId: 'Yn8H7LokKdQ',
     title: '“착각하지 마세요. 이건 정말 바보 같은 거예요...” 40~50대가 직장에서 살아남는 법',
     channel: '똑똑한 하루',
     views: 190000,
     uploadDate: '7일 전',
     description: ''
   },
   '16': {
     youtubeId: '9uos2eMwUbg',
     title: '일단 시작하고 행동해야 뇌가 바뀐다! | 행동의 뇌과학',
     channel: '차이나는 클라스',
     views: 71000,
     uploadDate: '3일 전',
     description: ''
   },
   '17': {
     youtubeId: 'KbGuc1RrJb4',
     title: '일본은, 뉴스케일파워 원전주 급등… 원전株 주목 다시 돌아온다?',
     channel: '비디오머그 VIDEOMUG',
     views: 230000,
     uploadDate: '1개월 전',
     description: ''
   },
   '18': {
     youtubeId: '9jAPvcrCYCQ',
     title: 'AI 과학자 장동선 박사의 슬픈 과거 이야기… AI 시대에서 우리가 할 일은?',
     channel: '오은영의 족집게 강의',
     views: 46000,
     uploadDate: '2일 전',
     description: ''
   }
 };

const videoJson = JSON.stringify(videoData[videoId]);
console.log(videoJson);

