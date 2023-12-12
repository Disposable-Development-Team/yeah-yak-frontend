export default function Input(props) {
  const contents = props.contents;
  const status = props.status;
  return (
    <div>
      <input>{contents}</input>
    </div>
  )
}