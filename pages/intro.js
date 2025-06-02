import { useEffect, useState } from 'react';

export default function Intro() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollText, setShowScrollText] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 컨텐츠 표시
    setTimeout(() => {
      setVisible(true);
    }, 1000);

    // 스크롤 텍스트는 조금 더 늦게 표시
    setTimeout(() => {
      setShowScrollText(true);
    }, 2000);

    let scrollTimeout;
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // 스크롤이 시작되면
      if (scrollPosition > 50 && !scrolled) {
        setIsScrolling(true);
        setScrolled(true);
        
        // 부드럽게 두 번째 섹션으로 스크롤
        window.scrollTo({
          top: windowHeight,
          behavior: 'smooth'
        });

        // 스크롤 애니메이션이 끝날 때까지 대기
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
      // 위로 스크롤할 때
      else if (scrollPosition < windowHeight / 2 && scrolled) {
        setIsScrolling(true);
        setScrolled(false);
        
        // 부드럽게 첫 번째 섹션으로 스크롤
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

        // 스크롤 애니메이션이 끝날 때까지 대기
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [scrolled, isScrolling]);

  const footprintStyle = {
    width: 'auto',
    height: '60px',
    filter: 'brightness(0) invert(1)', // 이미지를 흰색으로 변경
  };

  return (
    <div style={{
      height: '200vh',
      backgroundColor: '#FF6B00',
      position: 'relative',
      overflow: 'hidden',
      scrollSnapType: 'y mandatory'
    }}>
      {/* 첫 번째 섹션 */}
      <div style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        scrollSnapAlign: 'start'
      }}>
        {/* 발자국 애니메이션 */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'footsteps 3s linear infinite',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          <div style={{ transform: 'translateX(-20px) rotate(180deg)' }}>
            <img 
              src="/2d/foot1.png" 
              alt="발자국1" 
              style={{
                ...footprintStyle,
                opacity: 0.7,
                animation: 'footSwitch 0.6s infinite'
              }}
            />
          </div>
          <div style={{ transform: 'translateX(20px) rotate(180deg)' }}>
            <img 
              src="/2d/foot2.png" 
              alt="발자국2" 
              style={{
                ...footprintStyle,
                opacity: 0.5,
                animation: 'footSwitch 0.6s infinite 0.3s'
              }}
            />
          </div>
          <div style={{ transform: 'translateX(-20px) rotate(180deg)' }}>
            <img 
              src="/2d/foot1.png" 
              alt="발자국3" 
              style={{
                ...footprintStyle,
                opacity: 0.3,
                animation: 'footSwitch 0.6s infinite 0.6s'
              }}
            />
          </div>
        </div>

        {/* 메인 컨텐츠 */}
        <div style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 2s ease-in',
          zIndex: 2
        }}>
          <h1 style={{ 
            color: 'white',
            fontSize: '3rem',
            textAlign: 'center'
          }}>
            Intro 페이지
          </h1>
        </div>

        {/* 스크롤 안내 텍스트 */}
        <div style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: showScrollText && !scrolled ? 1 : 0,
          transition: 'opacity 1s ease-in',
          animation: showScrollText && !scrolled ? 'bounce 2s infinite' : 'none',
          zIndex: 2
        }}>
          <p style={{
            color: 'white',
            fontSize: '1.2rem',
            textAlign: 'center'
          }}>
            스크롤을 내려주세요
            <br />
            ↓
          </p>
        </div>
      </div>

      {/* 두 번째 섹션 */}
      <div style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        scrollSnapAlign: 'start'
      }}>
        <img 
          src="/2d/int.png"
          alt="Intro Image"
          style={{
            maxWidth: '80%',
            maxHeight: '80vh',
            opacity: scrolled ? 1 : 0,
            transform: `translateY(${scrolled ? 0 : '100px'})`,
            transition: 'all 1s ease-out',
          }}
        />
      </div>

      <style jsx global>{`
        @keyframes footsteps {
          0% {
            transform: translate(-50%, -100%);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, 100vh);
            opacity: 0;
          }
        }

        @keyframes footSwitch {
          0%, 100% {
            content: url('/2d/foot1.png');
            filter: brightness(0) invert(1);
          }
          50% {
            content: url('/2d/foot2.png');
            filter: brightness(0) invert(1);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-20px);
          }
          60% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
} 