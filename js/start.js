function includeHTML(el, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(el).innerHTML = data;
    });
}
//includeHTML("header", "header.html");
//includeHTML("footer", "footer.html");

function search(event) {
  event.preventDefault(); // 기본 폼 제출 방지

  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    const encodedQuery = encodeURIComponent(query); // 사용자가 입력한 검색어를 URL에 안전하게 넣기 위한 인코딩 처리
    window.location.href = `https://www.youtube.com/results?search_query=${encodedQuery}`;
  }
  return false;
}


 function show_Menu() {
    document.getElementById("menu1").style.display = "block";
  }

function deleteVideo(button) {
  // 버튼의 부모 요소를 찾아서 삭제
  const videoCard = button.closest('.col');
  if (videoCard) {
    // 페이드아웃 효과를 위한 애니메이션
    videoCard.style.transition = 'opacity 0.3s ease';
    videoCard.style.opacity = '0';
    
    // 애니메이션 후 요소 제거
    setTimeout(() => {
      videoCard.remove();
    }, 300);
  }
}
