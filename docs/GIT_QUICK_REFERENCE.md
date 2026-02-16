# Git 빠른 참조 카드

## 🚨 잘못 커밋했을 때 - 빠른 대처법

### 1️⃣ 커밋 메시지만 수정
```bash
git commit --amend -m "올바른 메시지"
```

### 2️⃣ 마지막 커밋에 파일 추가
```bash
git add <파일명>
git commit --amend --no-edit
```

### 3️⃣ 마지막 커밋 취소 (변경사항 유지)
```bash
git reset --soft HEAD~1
```

### 4️⃣ 마지막 커밋 취소 (변경사항도 삭제) ⚠️
```bash
git reset --hard HEAD~1
```

### 5️⃣ 이미 Push한 커밋 되돌리기
```bash
git revert HEAD
git push origin <브랜치명>
```

### 6️⃣ 특정 파일만 복원
```bash
git restore <파일명>
```

---

## 📊 Reset 종류 비교

| 명령어 | 커밋 취소 | Staging | Working Directory |
|--------|-----------|---------|-------------------|
| `--soft` | ✅ | ✅ 유지 | ✅ 유지 |
| `--mixed` (기본) | ✅ | ❌ 취소 | ✅ 유지 |
| `--hard` | ✅ | ❌ 취소 | ❌ 삭제 |

---

## 🎯 상황별 해결책

### 잘못된 브랜치에 커밋했어요!
```bash
git branch 올바른브랜치명
git reset --hard HEAD~1
git checkout 올바른브랜치명
```

### 여러 커밋을 하나로 합치고 싶어요
```bash
git reset --soft HEAD~3
git commit -m "합친 커밋 메시지"
```

### 특정 커밋의 파일만 가져오고 싶어요
```bash
git checkout <커밋해시> -- <파일명>
git commit -m "파일 복원"
```

---

## 💡 자주 사용하는 명령어

### 상태 확인
```bash
git status              # 현재 상태
git log --oneline -5    # 최근 5개 커밋
git diff                # 변경사항 확인
```

### 임시 저장 (Stash)
```bash
git stash              # 임시 저장
git stash pop          # 복원
git stash list         # 목록 보기
```

### 실수 복구
```bash
git reflog             # 모든 작업 이력
git reset --hard HEAD@{1}  # 특정 시점으로 복구
```

---

## ⚠️ 주의사항

- **Force Push**는 개인 브랜치에서만!
- **Hard Reset**은 변경사항이 영구 삭제됩니다!
- 협업 시에는 **revert**를 사용하세요!
- 중요한 작업 전에는 **백업 브랜치**를 만드세요!

---

더 자세한 내용은 [Git 커밋 가이드](GIT_GUIDE.md)를 참조하세요.
