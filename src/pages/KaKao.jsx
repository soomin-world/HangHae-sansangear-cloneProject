import { Navigate } from "react-router-dom";
import { kakao } from "../core/api/axios";
import { setCookie } from "../shared/Cookie";

const Kakao = () => {
  let code = new URL(window.location.href).searchParams.get("code");

  kakao
    .kakaoLogin(code)
    .then((res) => {
      console.log(res);
      if (res.data.statusCode === 200) {
        const KakaoToken = res.headers.authorization;

        setCookie("KaKao", KakaoToken);
        alert(res.data.msg);
        Navigate("/");
      }
    })
    .catch((error) => {
      if (error.response.data.status === 500) {
        console.log("소셜로그인실패 ㅠ", error);
        Navigate("/login");
      }
    });

  return <div>난카카오페이지</div>;
};

export default Kakao;
