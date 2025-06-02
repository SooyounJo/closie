import { useEffect, useState } from 'react';

export default function Intro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 약간의 딜레이를 두고 컨텐츠를 표시
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#FF6B00',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 발자국 애니메이션 */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'footsteps 3s linear infinite',
        zIndex: 1
      }}>
        <div style={{
          width: '20px',
          height: '40px',
          backgroundColor: 'white',
          opacity: 0.7,
          borderRadius: '10px 10px 0 0',
          position: 'relative',
          marginBottom: '40px'
        }}>
          <div style={{
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '30px',
            height: '15px',
            backgroundColor: 'white',
            borderRadius: '50%'
          }} />
        </div>
        <div style={{
          width: '20px',
          height: '40px',
          backgroundColor: 'white',
          opacity: 0.5,
          borderRadius: '10px 10px 0 0',
          position: 'relative',
          marginBottom: '40px'
        }}>
          <div style={{
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '30px',
            height: '15px',
            backgroundColor: 'white',
            borderRadius: '50%'
          }} />
        </div>
        <div style={{
          width: '20px',
          height: '40px',
          backgroundColor: 'white',
          opacity: 0.3,
          borderRadius: '10px 10px 0 0',
          position: 'relative'
        }}>
          <div style={{
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '30px',
            height: '15px',
            backgroundColor: 'white',
            borderRadius: '50%'
          }} />
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
      `}</style>
    </div>
  );
} 