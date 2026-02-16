# 기여 가이드 (Contributing Guide)

CloneTube 프로젝트에 기여해 주셔서 감사합니다! 🎉

이 문서는 프로젝트에 기여하는 방법과 Git 워크플로우를 설명합니다.

---

## 📋 목차

1. [시작하기](#시작하기)
2. [개발 워크플로우](#개발-워크플로우)
3. [커밋 컨벤션](#커밋-컨벤션)
4. [Pull Request 가이드](#pull-request-가이드)
5. [코딩 스타일](#코딩-스타일)

---

## 시작하기

### 1. 저장소 포크 및 클론

```bash
# 저장소 클론
git clone https://github.com/sson77/CloneTube.git
cd CloneTube

# 원본 저장소를 upstream으로 추가
git remote add upstream https://github.com/sson77/CloneTube.git
```

### 2. 로컬 환경 설정

```bash
# 의존성 설치 (필요한 경우)
npm install
```

---

## 개발 워크플로우

### 1. 새로운 기능 개발하기

```bash
# 최신 코드 가져오기
git checkout main
git pull upstream main

# 새로운 브랜치 생성
git checkout -b feature/새로운기능명
```

### 2. 코드 작성 및 테스트

- 코드를 작성합니다
- 변경사항을 테스트합니다
- 관련 문서를 업데이트합니다

### 3. 커밋하기

```bash
# 변경사항 확인
git status
git diff

# 파일 스테이징
git add <파일명>

# 커밋 (컨벤션에 맞춰 작성)
git commit -m "feat: 새로운 기능 설명"
```

### 4. Push 및 PR 생성

```bash
# 원격 저장소에 푸시
git push origin feature/새로운기능명
```

그 다음 GitHub에서 Pull Request를 생성합니다.

---

## 커밋 컨벤션

### 커밋 메시지 형식

```
<타입>: <제목>

<본문> (선택사항)

<꼬리말> (선택사항)
```

### 타입

- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 수정
- **style**: 코드 포맷팅, 세미콜론 누락 등 (기능 변경 없음)
- **refactor**: 코드 리팩토링
- **test**: 테스트 코드 추가/수정
- **chore**: 빌드 프로세스, 보조 도구 변경 등
- **design**: CSS 등 사용자 UI 디자인 변경

### 예시

```bash
# 좋은 예
feat: 동영상 재생목록 기능 추가
fix: 댓글 삭제 버튼 오류 수정
docs: README에 설치 방법 추가
design: 메인 페이지 반응형 레이아웃 개선

# 나쁜 예
update code
fixed bug
코드 수정
```

### 제목 작성 규칙

- 50자 이내로 작성
- 명령문 형태 사용 ("추가했다" ❌ → "추가" ✅)
- 마침표 사용 안 함
- 한글 또는 영어 사용 가능

### 본문 작성 (선택사항)

- 무엇을, 왜 변경했는지 설명
- 어떻게 변경했는지는 코드를 보면 알 수 있으므로 생략 가능
- 72자마다 줄바꿈

### 꼬리말 (선택사항)

```
Fixes #이슈번호
Closes #이슈번호
Resolves #이슈번호
```

---

## Pull Request 가이드

### PR 생성 전 체크리스트

- [ ] 최신 main 브랜치와 병합 충돌이 없는지 확인
- [ ] 코드가 정상적으로 작동하는지 테스트
- [ ] 커밋 메시지가 컨벤션을 따르는지 확인
- [ ] 불필요한 파일이 포함되지 않았는지 확인
- [ ] 관련 문서가 업데이트되었는지 확인

### PR 제목 및 설명

#### 제목
커밋 컨벤션과 동일한 형식 사용:
```
feat: 동영상 재생목록 기능 추가
```

#### 설명 템플릿
```markdown
## 변경 내용
- 추가된 기능이나 수정된 버그 설명

## 변경 이유
- 왜 이 변경이 필요한지 설명

## 테스트 방법
- 어떻게 테스트했는지 설명

## 스크린샷 (UI 변경 시)
- 변경 전후 스크린샷 첨부

## 관련 이슈
- Closes #이슈번호
```

---

## 코딩 스타일

### HTML

- 들여쓰기: 2 스페이스
- 태그와 속성은 소문자 사용
- 속성값은 큰따옴표 사용

```html
<!-- 좋은 예 -->
<div class="container">
  <h1 id="title">제목</h1>
</div>

<!-- 나쁜 예 -->
<DIV class='container'>
<h1 id=title>제목</h1>
</DIV>
```

### CSS

- 들여쓰기: 2 스페이스
- 클래스명: kebab-case 사용
- 색상: 가능하면 hex 코드 사용

```css
/* 좋은 예 */
.video-card {
  background-color: #ffffff;
  padding: 16px;
}

/* 나쁜 예 */
.videoCard {
  background-color: white;
  padding:16px;
}
```

### JavaScript

- 들여쓰기: 2 스페이스
- 변수명: camelCase 사용
- 상수명: UPPER_SNAKE_CASE 사용
- 세미콜론 사용

```javascript
// 좋은 예
const MAX_VIDEO_COUNT = 10;
let videoTitle = 'CloneTube';

function playVideo(videoId) {
  // 코드
}

// 나쁜 예
const maxvideocount = 10
let video_title = 'CloneTube'

function PlayVideo(video_id) {
  // 코드
}
```

---

## 잘못 커밋했을 때

실수로 잘못 커밋한 경우, 다음 문서를 참고하세요:

- 📚 [Git 커밋 가이드](docs/GIT_GUIDE.md) - 상세한 설명
- 🚨 [Git 빠른 참조 카드](docs/GIT_QUICK_REFERENCE.md) - 빠른 해결법

---

## 이슈 제기

버그를 발견하거나 새로운 기능을 제안하고 싶다면 [이슈](https://github.com/sson77/CloneTube/issues)를 생성해 주세요.

### 이슈 작성 템플릿

#### 버그 리포트
```markdown
## 버그 설명
버그에 대한 명확한 설명

## 재현 방법
1. '...'로 이동
2. '...'를 클릭
3. 아래로 스크롤하여 '...'를 확인
4. 오류 발생

## 예상 동작
어떻게 동작해야 하는지 설명

## 스크린샷
가능하다면 스크린샷 첨부

## 환경
- OS: [예: Windows 10]
- 브라우저: [예: Chrome 120]
- 버전: [예: v1.0.0]
```

#### 기능 제안
```markdown
## 제안하는 기능
명확한 기능 설명

## 동기
왜 이 기능이 필요한지 설명

## 대안
고려한 다른 대안이 있다면 설명

## 추가 정보
기타 참고 자료나 스크린샷
```

---

## 리뷰 프로세스

1. PR 생성 시 자동으로 리뷰어가 지정됩니다
2. 리뷰어는 코드를 검토하고 피드백을 제공합니다
3. 필요한 경우 수정 요청을 받을 수 있습니다
4. 모든 피드백이 해결되면 PR이 병합됩니다

### 피드백 받았을 때

```bash
# 코드 수정
git add <수정된파일>
git commit -m "refactor: 리뷰 피드백 반영"
git push origin feature/브랜치명
```

---

## 유용한 Git 명령어

### 브랜치 관리

```bash
# 브랜치 목록 보기
git branch

# 브랜치 삭제
git branch -d <브랜치명>

# 원격 브랜치 삭제
git push origin --delete <브랜치명>
```

### 최신 코드 동기화

```bash
# upstream에서 최신 코드 가져오기
git fetch upstream

# main 브랜치 업데이트
git checkout main
git merge upstream/main

# 작업 브랜치에 최신 코드 반영
git checkout feature/브랜치명
git rebase main
```

### Stash 활용

```bash
# 작업 중인 변경사항 임시 저장
git stash

# 다른 브랜치 작업 후 다시 복원
git stash pop
```

---

## 질문이 있으신가요?

- 💬 [Discussions](https://github.com/sson77/CloneTube/discussions)에서 질문하기
- 📧 이메일: [이메일 주소]
- 📚 [Git 커밋 가이드](docs/GIT_GUIDE.md) 참고

---

## 기여자 행동 강령

- 서로 존중하고 배려합시다
- 건설적인 피드백을 제공합시다
- 열린 마음으로 다양한 의견을 받아들입시다
- 협력하여 더 나은 프로젝트를 만듭시다

---

다시 한번 기여해 주셔서 감사합니다! 🎉

궁금한 점이 있다면 언제든지 이슈나 디스커션을 통해 질문해 주세요.
