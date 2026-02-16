# Git 커밋 가이드

## 잘못 커밋했을 때 대처 방법

이 문서는 Git에서 실수로 잘못 커밋했을 때 이를 해결하는 다양한 방법을 설명합니다.

> 💡 **빠른 참조가 필요하신가요?** [Git 빠른 참조 카드](GIT_QUICK_REFERENCE.md)를 확인하세요!

---

## 📌 목차
1. [커밋 메시지만 수정하기](#1-커밋-메시지만-수정하기)
2. [마지막 커밋에 파일 추가/수정하기](#2-마지막-커밋에-파일-추가수정하기)
3. [커밋 취소하기 (로컬)](#3-커밋-취소하기-로컬)
4. [특정 커밋 되돌리기](#4-특정-커밋-되돌리기)
5. [이미 Push한 커밋 취소하기](#5-이미-push한-커밋-취소하기)
6. [특정 파일만 이전 상태로 되돌리기](#6-특정-파일만-이전-상태로-되돌리기)

---

## 1. 커밋 메시지만 수정하기

### 상황
마지막 커밋의 메시지만 잘못 작성한 경우

### 해결 방법
```bash
git commit --amend -m "수정된 커밋 메시지"
```

### 주의사항
- 이미 원격 저장소에 push한 경우, force push가 필요할 수 있습니다
- 다른 사람과 협업 중인 브랜치에서는 사용을 피하세요

---

## 2. 마지막 커밋에 파일 추가/수정하기

### 상황
마지막 커밋에 파일을 빼먹었거나 수정이 필요한 경우

### 해결 방법
```bash
# 파일 수정 또는 추가
git add <파일명>

# 이전 커밋에 합치기
git commit --amend --no-edit
```

### 커밋 메시지도 함께 수정하려면
```bash
git commit --amend -m "새로운 커밋 메시지"
```

---

## 3. 커밋 취소하기 (로컬)

### 3-1. 커밋 취소 + 변경사항 유지 (Soft Reset)

커밋은 취소하되, 변경된 파일은 Staged 상태로 유지

```bash
git reset --soft HEAD~1
```

### 3-2. 커밋 취소 + 변경사항을 Unstaged로 유지 (Mixed Reset)

커밋도 취소하고, 변경사항은 Working Directory에만 유지

```bash
git reset HEAD~1
# 또는
git reset --mixed HEAD~1
```

### 3-3. 커밋 취소 + 변경사항도 완전히 삭제 (Hard Reset)

⚠️ **주의**: 변경사항이 완전히 사라집니다!

```bash
git reset --hard HEAD~1
```

### HEAD~N 의미
- `HEAD~1`: 최근 1개 커밋 취소
- `HEAD~2`: 최근 2개 커밋 취소
- `HEAD~3`: 최근 3개 커밋 취소

---

## 4. 특정 커밋 되돌리기

### 상황
여러 커밋 중 특정 커밋만 되돌리고 싶은 경우

### 해결 방법
```bash
# 특정 커밋의 변경사항을 되돌리는 새로운 커밋 생성
git revert <커밋해시>
```

### 예시
```bash
# 1. 커밋 히스토리 확인
git log --oneline

# 2. 되돌리고 싶은 커밋 해시 복사 (예: abc1234)
git revert abc1234

# 3. 에디터가 열리면 커밋 메시지 확인 후 저장
```

### 장점
- 히스토리가 유지되어 안전함
- 이미 push한 커밋도 되돌릴 수 있음
- 협업 시 권장되는 방법

---

## 5. 이미 Push한 커밋 취소하기

### 5-1. Revert 사용 (권장)

```bash
# 마지막 커밋을 되돌리는 새로운 커밋 생성
git revert HEAD

# push
git push origin <브랜치명>
```

### 5-2. Force Push (주의 필요)

⚠️ **주의**: 다른 사람과 협업 중인 브랜치에서는 사용하지 마세요!

```bash
# 로컬에서 커밋 취소
git reset --hard HEAD~1

# 강제 push
git push -f origin <브랜치명>
```

### Force Push 시 주의사항
- 다른 팀원의 작업에 영향을 줄 수 있습니다
- 개인 브랜치에서만 사용하세요
- 가능한 `git revert`를 사용하세요

---

## 6. 특정 파일만 이전 상태로 되돌리기

### 상황
여러 파일 중 특정 파일만 이전 커밋 상태로 되돌리고 싶은 경우

### 해결 방법

#### 6-1. Working Directory의 변경사항 취소
```bash
# 아직 커밋하지 않은 변경사항 취소
git checkout -- <파일명>

# 또는 (Git 2.23 이상)
git restore <파일명>
```

#### 6-2. 특정 커밋의 파일로 되돌리기
```bash
# 특정 커밋의 파일 상태로 되돌리기
git checkout <커밋해시> -- <파일명>

# 또는 (Git 2.23 이상)
git restore --source=<커밋해시> <파일명>

# 변경사항 커밋
git commit -m "파일 복원"
```

---

## 📌 상황별 빠른 가이드

| 상황 | 명령어 | 주의사항 |
|------|--------|----------|
| 커밋 메시지만 수정 | `git commit --amend -m "새 메시지"` | Push 전에만 권장 |
| 마지막 커밋에 파일 추가 | `git add <파일>` → `git commit --amend --no-edit` | Push 전에만 권장 |
| 로컬 커밋 1개 취소 (변경사항 유지) | `git reset --soft HEAD~1` | 안전함 |
| 로컬 커밋 1개 취소 (변경사항 삭제) | `git reset --hard HEAD~1` | ⚠️ 복구 불가 |
| Push한 커밋 되돌리기 | `git revert HEAD` | 협업 시 권장 |
| 특정 파일만 복원 | `git restore <파일명>` | 안전함 |

---

## 🔍 유용한 Git 명령어

### 커밋 히스토리 확인
```bash
# 간단한 로그
git log --oneline

# 그래프로 보기
git log --graph --oneline --all

# 최근 5개만
git log --oneline -5
```

### 변경사항 확인
```bash
# Working Directory 변경사항
git status

# 변경된 내용 자세히 보기
git diff

# Staged 변경사항 보기
git diff --staged
```

### Stash (임시 저장)
```bash
# 현재 변경사항 임시 저장
git stash

# 저장된 목록 보기
git stash list

# 가장 최근 stash 복원
git stash pop

# 특정 stash 복원
git stash apply stash@{0}
```

---

## ⚠️ 주의사항

1. **Force Push는 신중하게**: 다른 사람과 협업하는 브랜치에서는 절대 사용하지 마세요
2. **Reset보다 Revert**: 이미 push한 커밋은 `revert`로 되돌리세요
3. **백업하기**: 중요한 작업 전에는 브랜치를 백업하세요
   ```bash
   git branch backup-2024-02-16
   ```
4. **커밋 전 확인**: `git status`와 `git diff`로 항상 확인하세요

---

## 📚 추가 학습 자료

- [Git 공식 문서](https://git-scm.com/doc)
- [Pro Git Book (한글)](https://git-scm.com/book/ko/v2)
- [GitHub Docs](https://docs.github.com/ko)

---

## 💡 팁

### 1. 커밋 전 체크리스트
- [ ] 올바른 브랜치인가?
- [ ] 필요한 파일만 포함되었나?
- [ ] 커밋 메시지가 명확한가?
- [ ] 테스트가 통과하는가?

### 2. 좋은 커밋 메시지 작성법
```
<타입>: <제목>

<본문>

<꼬리말>
```

**타입 예시:**
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드
- `chore`: 빌드, 설정 변경

**예시:**
```
feat: 동영상 댓글 기능 추가

- 댓글 작성 폼 구현
- 댓글 목록 표시 기능
- 댓글 삭제 기능

Closes #123
```

---

## 🆘 문제 해결

### Q1. "Your branch and 'origin/main' have diverged" 에러가 나요
```bash
# 원격 브랜치 내용 확인
git fetch origin

# 두 브랜치 차이 확인
git log HEAD..origin/main

# 원격 브랜치 내용 가져오기
git pull origin main

# 충돌이 있다면 해결 후
git add .
git commit -m "Merge conflict 해결"
```

### Q2. 실수로 hard reset을 했어요!
```bash
# reflog로 이전 상태 찾기
git reflog

# 원하는 시점으로 복구 (예: HEAD@{1})
git reset --hard HEAD@{1}
```

### Q3. 잘못된 브랜치에 커밋했어요!
```bash
# 1. 새로운 브랜치 생성 (현재 위치에서)
git branch <올바른브랜치명>

# 2. 원래 브랜치로 이동
git checkout <원래브랜치명>

# 3. 잘못된 커밋 취소
git reset --hard HEAD~1

# 4. 올바른 브랜치로 이동
git checkout <올바른브랜치명>
```

---

이 가이드가 도움이 되셨기를 바랍니다! 추가 질문이나 개선 사항이 있다면 이슈를 등록해주세요.
