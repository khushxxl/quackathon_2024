// QuestionComponent.jsx
function QuestionComponent({ question, index }) {
  return (
    <div
      key={index}
      className="question"
      style={{
        background: "#212121",
        borderRadius: "10px",
        margin: "20px 0",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "white" }}>{question.quest}</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {question.options.map((option, optionIndex) => (
          <li
            key={optionIndex}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <input
              id={`option-${index}-${optionIndex}`}
              type="radio"
              name={`question_${index}`}
              value={option}
              style={{
                opacity: 0,
                width: 0,
                height: 0,
                position: "absolute",
              }}
            />
            <label
              htmlFor={`option-${index}-${optionIndex}`}
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                color: "white",
                fontSize: "1.25rem",
                border: "2px solid #4B6A9B",
                borderRadius: "4px",
                backgroundColor: "transparent",
                transition: "background-color 0.3s",
                cursor: "pointer",
              }}
            >
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionComponent;
