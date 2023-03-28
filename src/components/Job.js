const Job = (props) => {
  return (
    <article className={props.className}>
      <h2>{props.Title}</h2>
      <span>
        {props.contractType} - {props.country} - {props.city}
      </span>
    </article>
  );
};
export default Job;
