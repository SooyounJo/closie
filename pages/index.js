export default function Home() {
  const requestFullScreen = () => {
    try {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } catch (error) {
      console.log('전체화면 전환 중 오류:', error);
    }
  };

  const imageStyle = {
    height: 'calc(5vw + 35px)',
    width: 'auto',
    maxHeight: '75px',
    display: 'block',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const hoverImageStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, calc(-50% - 55px)) rotate(0deg)',
    height: 'calc(5vw + 35px)',
    width: 'auto',
    maxHeight: '75px',
    opacity: 1,
    transition: 'all 0.6s ease-in-out',
    transformOrigin: 'center',
    pointerEvents: 'none'
  };

  const handleMouseEnter = (baseImg, hoverImg) => {
    requestAnimationFrame(() => {
      baseImg.style.transform = 'scale(1.2)';
      hoverImg.style.transform = 'translate(-50%, calc(-50% - 55px)) rotate(360deg)';
    });
  };

  const handleMouseLeave = (baseImg, hoverImg) => {
    requestAnimationFrame(() => {
      baseImg.style.transform = 'scale(1)';
      hoverImg.style.transform = 'translate(-50%, calc(-50% - 55px)) rotate(0deg)';
    });
  };

  const handleImageClick = (e, path) => {
    e.stopPropagation(); // 전체화면 이벤트 중지
    window.location.href = path;
  };

  return (
    <div 
      onClick={requestFullScreen}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FF6B00',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
    >
      {/* 메인 비디오 컨테이너 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'fill',
            backgroundColor: 'transparent'
          }}
        >
          <source src="/2d/closiemain.mp4" type="video/mp4" />
          비디오를 재생할 수 없습니다.
        </video>
      </div>

      {/* 하단 이미지 컨테이너 */}
      <div style={{
        position: 'absolute',
        bottom: 'calc(8% + 30px)',
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: 'calc(5vw + 50px)',
        zIndex: 2
      }}>
        {/* 이미지 1 컨테이너 */}
        <div style={{ position: 'relative' }}>
          <img 
            src="/2d/1.png" 
            alt="1" 
            style={imageStyle}
            onClick={(e) => handleImageClick(e, '/intro')}
            onMouseEnter={(e) => handleMouseEnter(e.target, e.target.nextSibling)}
            onMouseLeave={(e) => handleMouseLeave(e.target, e.target.nextSibling)}
          />
          <img 
            src="/2d/1-1.png" 
            alt="1-1" 
            style={hoverImageStyle}
          />
        </div>

        {/* 이미지 2 컨테이너 */}
        <div style={{ position: 'relative' }}>
          <img 
            src="/2d/2.png" 
            alt="2" 
            style={imageStyle}
            onClick={(e) => handleImageClick(e, '/map')}
            onMouseEnter={(e) => handleMouseEnter(e.target, e.target.nextSibling)}
            onMouseLeave={(e) => handleMouseLeave(e.target, e.target.nextSibling)}
          />
          <img 
            src="/2d/2-1.png" 
            alt="2-1" 
            style={hoverImageStyle}
          />
        </div>

        {/* 이미지 3 컨테이너 */}
        <div style={{ position: 'relative' }}>
          <img 
            src="/2d/3.png" 
            alt="3" 
            style={imageStyle}
            onClick={(e) => handleImageClick(e, '/funeral')}
            onMouseEnter={(e) => handleMouseEnter(e.target, e.target.nextSibling)}
            onMouseLeave={(e) => handleMouseLeave(e.target, e.target.nextSibling)}
          />
          <img 
            src="/2d/3-1.png" 
            alt="3-1" 
            style={hoverImageStyle}
          />
        </div>
      </div>
    </div>
  );
} 