import Image from "next/image";
import ReactDOM from "react-dom";

type ModalFrameProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function LoginModal({ children, onClick }: ModalFrameProps) {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null; // modal-root가 존재하지 않으면 null을 반환합니다.

  return ReactDOM.createPortal(
    <div
      onClick={onClick}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-9999 bg-[#222222]/80 backdrop-blur-sm"
    >
      <div className="relative bg-white py-[60px] w-[600px] h-auto rounded-[10px] overflow-hidden">
        <div className="absolute top-5 right-5" onClick={onClick}>
          <Image
            src={"/icons/web-icons/close.svg"}
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/icons/web-icons/symbol.svg"
            alt="close"
            width={50}
            height={50}
          />
        </div>
        <Blank height="40px" />
        <div className="flex justify-center flex-col items-center">
          <div className="text-[28px] text-[#2B2B2B]">
            키키에 오신 것을 환영합니다
          </div>
          <div className="text-[16px] text-[#2B2B2B]">
            지금 로그인하고 나만의 단축키 모음집을 만드세요.
          </div>
          <Blank height="40px" />
          <GoogleLogin />
          <Blank height="10px" />
          <KakaoLogin />
          <Blank height="40px" />
          <div className="w-[390px] font-normal text-[#A5A5A5] text-sm">
            로그인은 개인의 정보 보호 정책 및 서비스 약관에 동의하는 것을
            의미하며, 서비스 이용을 위해 이메일과 이름, 프로필 이미지를
            수집합니다.
          </div>
        </div>
      </div>
    </div>,
    modalRoot // 여기서는 modalRoot가 null이 아니라고 확신할 수 있습니다.
  );
}
