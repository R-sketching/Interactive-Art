document.getElementById('mood-form').addEventListener('submit', function(e) {
    e.preventDefault(); // 페이지 리로드 방지
    
    const mood = document.getElementById('mood').value; // 선택된 감정
    const interactiveArea = document.getElementById('interactive-area');

    // 감정에 따라 배경색과 형태 변화
    if (mood === 'happy') {
        interactiveArea.style.backgroundColor = '#ffeb3b'; // 밝은 노란색
        interactiveArea.style.borderRadius = '50%'; // 동그란 형태
        interactiveArea.style.transform = 'scale(1.2)';
    } else if (mood === 'sad') {
        interactiveArea.style.backgroundColor = '#3f51b5'; // 파란색
        interactiveArea.style.borderRadius = '0%'; // 직사각형
        interactiveArea.style.transform = 'scale(1)';
    } else if (mood === 'angry') {
        interactiveArea.style.backgroundColor = '#f44336'; // 빨간색
        interactiveArea.style.borderRadius = '20%';
        interactiveArea.style.transform = 'scale(1.5)';
    } else {
        interactiveArea.style.backgroundColor = '#9e9e9e'; // 회색
        interactiveArea.style.borderRadius = '15%';
        interactiveArea.style.transform = 'scale(1)';
    }
});
