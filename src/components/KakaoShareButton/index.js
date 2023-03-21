import React, { useEffect } from 'react'
import './index.css';

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton()
  }, [])

  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY)
      }

      kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '이봐요, 정신이 들어요?',
          description: '내가.. 도시락 반찬이라구..?',
          imageUrl: 'https://amilunchbox.netlify.app/image/shareLinkImg.jpg',
          // imageUrl: 'http://localhost:3000/image/shareLinkImg.jpg',
          link: {
            mobileWebUrl: "https://amilunchbox.netlify.app",
            webUrl: "https://amilunchbox.netlify.app",
          },
        },
        buttons: [
          {
            title: '페이지로 이동하기',
            link: {
              mobileWebUrl: "https://amilunchbox.netlify.app",
              webUrl: "https://amilunchbox.netlify.app",
            },
          }
        ],
      })
    }
  }

  return (
    <div className="kakao-share-button" onClick={() => createKakaoButton()}>
      {/* Kakao share button */}
      <button id="kakao-link-btn"> 
      <img id="kakao_btn" src="/image/kakao.png" alt="kakao-share-icon" />
        <p>카카오톡으로 페이지 공유하기</p> </button>

    </div>
  )
}

export default KakaoShareButton