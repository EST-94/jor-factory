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
          title: process.env.REACT_APP_KAKAO_SHARE_TITLE,
          description: process.env.REACT_APP_KAKAO_SHARE_DESCRIPTION,
          imageUrl: process.env.REACT_APP_PREFIX + process.env.REACT_APP_SHAREIMG,
          link: {
            mobileWebUrl: process.env.REACT_APP_PREFIX,
            webUrl: process.env.REACT_APP_PREFIX,
          },
        },
        buttons: [
          {
            title: process.env.REACT_APP_KAKAO_SHARE_BTN_TITLE,
            link: {
              mobileWebUrl: process.env.REACT_APP_PREFIX,
              webUrl: process.env.REACT_APP_PREFIX,
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
      <div class="cta">
      <img id="kakao_btn" src="/image/kakao.png" alt="kakao-share-icon" />
        <p>카카오톡으로 페이지 공유하기</p> 
      </div>
      </button>

    </div>
  )
}

export default KakaoShareButton