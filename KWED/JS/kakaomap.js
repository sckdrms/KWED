const axios = require('axios'); // HTTP 요청을 위한 axios 라이브러리

exports.handler = async function(event, context) {
  // Netlify 환경 변수에서 카카오맵 API 키 가져오기
  const KAKAO_API_KEY = process.env.KAKAO_API_KEY;

  try {
    // 예시: 카카오맵 장소 검색 API 호출
    const response = await axios.get('https://dapi.kakao.com/v2/local/search/keyword.json', {
      headers: {
        'Authorization': `KakaoAK ${KAKAO_API_KEY}`
      },
      params: {
        query: '검색어' // 클라이언트로부터 받은 검색어나 기타 파라미터
      }
    });

    // API 응답 반환
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    // 오류 처리
    return {
      statusCode: error.response.status,
      body: error.response.statusText
    };
  }
};