function Label({ text, classes }) {
  const eng_to_fr = {
    new: "Nouveaux",
    accepted: "Accepté",
    completed: "Complété",
    rejected: "Rejetée",
  };
  return <span className={`${classes}`}>{eng_to_fr[text]}</span>;
}

export default Label;
