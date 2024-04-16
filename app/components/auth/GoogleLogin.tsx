import ImageButton from "../Button/ImageButton";

export default function GoogleLogin() {
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI || "";

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const scope = "email profile";
  //"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";

  const stateValue = JSON.stringify({
    provider: "google",
    csrfToken: "randomStringForCsrfProtection",
  });

  const encodedState = encodeURIComponent(stateValue);

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(
    scope
  )}&response_type=code&state=${encodedState}`;

  const handleGoogleLogin = () => {
    window.location.href = authUrl;
  };

  return (
    <ImageButton
      imageSrc="icons/social-icons/google.svg"
      onClick={handleGoogleLogin}
      text="구글 계정으로 로그인"
    />
  );
}
