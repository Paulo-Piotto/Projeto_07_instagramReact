export default function SugestaoPrincipal(props) {
    return (
      <div class="usuario">
        <img src={props.profile} />
        <div class="texto">
          <strong>{props.user}</strong>
          {props.name}
        </div>
      </div>
    );
  }
  