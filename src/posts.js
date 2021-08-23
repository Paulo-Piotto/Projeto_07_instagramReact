import Post from "./post";

const timeline = [
  {
    user: "meowed",
    profile: "assets/img/meowed.svg",
    pic: "assets/img/gato-telefone.svg"
  },
  {
    user: "barked",
    profile: "assets/img/barked.svg",
    pic: "assets/img/dog.svg"
  }
];

export default function Posts() {
  return (
    <div class="posts">
      {timeline.map((post) => (
        <Post user={post.user} profile={post.profile} pic={post.pic} />
      ))}
    </div>
  );
}
