import { useEffect } from "preact/hooks";
import Cookie from "https://esm.sh/js-cookie@3.0.5";

interface PropsType {
  id: string;
}

function setCookie(cookieName: string, cookieValue: string) {
  const existingValue = Cookie.get(cookieName);

  if (!existingValue || !existingValue.includes(cookieValue)) {
    let newValue = existingValue ? `${existingValue},${cookieValue}` : cookieValue;
    document.cookie = `${cookieName}=${newValue};path=/`;
    window.location.href = name;
  }
}

export default function StampPage(props: PropsType) {
  const { id } = props;

  useEffect(() => {
    // スタンプCookieの設定
    setCookie("stamp", id);

    // stamp.tsxにリダイレクト
    window.location.href = "/stamp";
  }, [id]);

  return null;
}
