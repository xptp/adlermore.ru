import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "prerender-status-code";
    meta.content = "404";
    document.head.appendChild(meta);

    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(timer);
      document.head.removeChild(meta);
    };
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404 — Страница не найдена</h1>
      <p>Извините, такой страницы не существует.</p>
      <p>Вы будете перенаправлены на главную через 5 секунд...</p>
      <button onClick={() => navigate("/")}>Вернуться на главную</button>
    </div>
  );
}
