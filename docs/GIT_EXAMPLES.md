# 커밋 취소 실습 예제

## 시나리오: 잘못된 커밋을 취소하고 싶어요!

이 문서는 실제 예제를 통해 커밋을 취소하는 방법을 설명합니다.

---

## 📝 예제 1: 마지막 커밋 취소하기

### 상황
방금 커밋했는데 실수를 발견했어요! 아직 push는 하지 않았습니다.

### 해결 방법

#### 1. 현재 상태 확인
```bash
git log --oneline -3
```

출력 예:
```
abc1234 (HEAD -> feature) 잘못된 커밋 메시지
def5678 이전 커밋
ghi9012 더 이전 커밋
```

#### 2. 커밋 취소 (변경사항 유지)
```bash
git reset --soft HEAD~1
```

#### 3. 확인
```bash
git status
```

이제 변경사항이 Staged 상태로 돌아갑니다. 파일을 수정하고 다시 커밋하세요!

```bash
# 파일 수정 후
git add .
git commit -m "올바른 커밋 메시지"
```

---

## 📝 예제 2: 특정 커밋 찾아서 취소하기

### 상황
여러 커밋 중 특정 커밋 (예: 87246b7)만 취소하고 싶어요.

### 1단계: 커밋 찾기

```bash
# 전체 커밋 히스토리 확인
git log --oneline --all -20

# 또는 특정 패턴으로 검색
git log --all --oneline --grep="키워드"

# 또는 작성자로 검색
git log --all --oneline --author="이름"
```

### 2단계: 커밋 상세 정보 확인

```bash
git show 87246b7
```

### 3단계: 커밋 취소 방법 선택

#### 방법 A: Revert (권장 - 안전)
새로운 커밋을 만들어서 해당 커밋의 변경사항을 되돌립니다.

```bash
git revert 87246b7
```

#### 방법 B: Reset (주의 필요)
커밋을 히스토리에서 제거합니다. **아직 push하지 않은 경우에만** 사용하세요!

```bash
# 해당 커밋까지 되돌리기
git reset --hard 87246b7^

# 또는 해당 커밋 직전으로
git reset --hard 87246b7~1
```

---

## 📝 예제 3: Push한 커밋 취소하기

### 상황
이미 GitHub에 push한 커밋을 취소해야 합니다.

### ✅ 안전한 방법 (협업 시 권장)

```bash
# 1. 취소할 커밋 확인
git log --oneline -5

# 2. Revert로 취소
git revert 87246b7

# 3. Push
git push origin <브랜치명>
```

### ⚠️ 강제 방법 (개인 브랜치만!)

```bash
# 1. 로컬에서 커밋 취소
git reset --hard 87246b7^

# 2. 강제 Push
git push -f origin <브랜치명>
```

---

## 📝 예제 4: 커밋을 찾을 수 없을 때

### 상황
커밋 해시 87246b7을 찾을 수 없어요!

### 해결 방법

#### 1. Reflog 확인 (로컬의 모든 작업 기록)
```bash
git reflog
```

출력 예:
```
abc1234 HEAD@{0}: commit: 최신 커밋
def5678 HEAD@{1}: commit: 이전 커밋
87246b7 HEAD@{5}: commit: 찾던 커밋!
```

#### 2. 원격 브랜치 확인
```bash
# 모든 원격 브랜치 가져오기
git fetch --all

# 모든 브랜치의 커밋 보기
git log --all --oneline | grep 87246b7
```

#### 3. 특정 브랜치에서 찾기
```bash
# 모든 브랜치 목록
git branch -a

# 특정 브랜치의 히스토리 확인
git log origin/main --oneline | grep 87246b7
```

---

## 📝 예제 5: 여러 커밋을 한 번에 취소

### 상황
마지막 3개의 커밋을 모두 취소하고 싶어요.

```bash
# 커밋 히스토리
git log --oneline -5
# abc1234 커밋3 (잘못됨)
# def5678 커밋2 (잘못됨)
# ghi9012 커밋1 (잘못됨)
# jkl3456 이전 커밋 (여기로 돌아가고 싶음)
```

### 방법 1: Reset (변경사항 유지)
```bash
git reset --soft HEAD~3
# 이제 3개 커밋의 모든 변경사항이 Staged 상태로
git commit -m "수정된 커밋"
```

### 방법 2: Reset (변경사항 삭제)
```bash
git reset --hard HEAD~3
# 3개 커밋과 변경사항이 모두 삭제됨
```

### 방법 3: Revert (각각 되돌리기)
```bash
git revert abc1234
git revert def5678
git revert ghi9012
# 또는
git revert HEAD~2..HEAD
```

---

## 📝 예제 6: 잘못된 브랜치에 커밋했을 때

### 상황
`main` 브랜치에 커밋했는데, `feature` 브랜치에 했어야 했어요!

```bash
# 현재 상태
(main) $ git log --oneline -2
abc1234 잘못 커밋함
def5678 이전 커밋
```

### 해결 방법

```bash
# 1. 현재 위치에 새 브랜치 생성
git branch feature

# 2. main 브랜치에서 커밋 취소
git reset --hard HEAD~1

# 3. feature 브랜치로 이동
git checkout feature

# 4. 확인
git log --oneline -2
# abc1234 잘못 커밋함 (이제 여기에 있어요!)
# def5678 이전 커밋
```

---

## 🔍 디버깅 팁

### 커밋이 정말로 사라졌나요?

```bash
# 최근 30개의 모든 작업 확인
git reflog -30

# 특정 커밋 해시로 복구
git reset --hard <찾은커밋해시>
```

### 파일의 변경 이력 추적

```bash
# 특정 파일의 모든 커밋 보기
git log -- <파일명>

# 특정 파일의 커밋에서 내용 보기
git show 87246b7:<파일경로>
```

### 삭제된 커밋 복구

```bash
# 1. reflog에서 삭제된 커밋 찾기
git reflog

# 2. 해당 커밋을 새 브랜치로 만들기
git branch recovered-branch <커밋해시>

# 3. 확인
git checkout recovered-branch
```

---

## ⚡ 빠른 명령어 치트시트

| 목적 | 명령어 |
|------|--------|
| 마지막 커밋 메시지 수정 | `git commit --amend` |
| 마지막 커밋 취소 (변경사항 유지) | `git reset --soft HEAD~1` |
| 마지막 커밋 취소 (변경사항 삭제) | `git reset --hard HEAD~1` |
| 특정 커밋 되돌리기 | `git revert <커밋해시>` |
| 특정 커밋으로 이동 | `git reset --hard <커밋해시>` |
| 작업 기록 보기 | `git reflog` |
| 삭제된 커밋 찾기 | `git reflog \| grep <키워드>` |

---

## 🆘 여전히 커밋 87246b7을 찾을 수 없나요?

다음을 확인해보세요:

1. **커밋 해시가 정확한가요?**
   - 최소 7자리를 입력했나요? (예: 87246b7)
   - 대소문자가 정확한가요?

2. **올바른 저장소인가요?**
   - 다른 프로젝트의 커밋일 수 있습니다

3. **이미 삭제되었나요?**
   - `git reflog`로 확인하세요

4. **원격에만 있나요?**
   - `git fetch --all` 후 다시 검색하세요

5. **다른 사람의 커밋인가요?**
   - Pull Request나 다른 fork의 커밋일 수 있습니다

---

## 💡 실습 연습

직접 연습해보고 싶다면:

```bash
# 테스트용 브랜치 생성
git checkout -b test-branch

# 테스트 커밋 만들기
echo "test" > test.txt
git add test.txt
git commit -m "테스트 커밋"

# 커밋 취소 연습
git reset --soft HEAD~1

# 확인
git status

# 원래 브랜치로 돌아가기
git checkout -
git branch -D test-branch
```

---

더 자세한 내용은 다음 문서를 참고하세요:
- [Git 커밋 가이드](GIT_GUIDE.md)
- [Git 플로우차트](GIT_FLOWCHART.md)
- [Git 빠른 참조](GIT_QUICK_REFERENCE.md)
