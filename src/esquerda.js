import Posts from "./posts";
import Stories from "./stories";

export default function Esquerda() {
  return (
    <div class="esquerda">
      <Stories />
      <Posts />
    </div>
  );
}