import ImageButton from "../button/ImageButton";

export default function KakaoLogin() {
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI || "";

  const clientId = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
  const scope = "profile_nickname,profile_image,account_email";

  const stateValue = JSON.stringify({
    provider: "kakao",
    csrfToken: "randomStringForCsrfProtection",
  });
  const encodedState = encodeURIComponent(stateValue);

  // 카카오 로그인 URL
  const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(
    scope
  )}&response_type=code&state=${encodedState}`;

  const handleKakaoLogin = () => {
    window.location.href = authUrl;
  };

  return (
    <ImageButton
      imageSrc="/icons/social-icons/kakao.svg"
      onClick={handleKakaoLogin}
      text="카카오 계정으로 로그인"
    />
  );
}
