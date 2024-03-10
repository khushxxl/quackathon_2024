// QuestionComponent.jsx
function QuestionComponent({
  question,
  index,
}: {
  question: any;
  index: number;
}) {
  return (
    <div
      key={index}
      className=""
      style={{
        // background: "#212121",
        borderRadius: "10px",
        margin: "20px 0",
        padding: "20px",
      }}
    >
      <h2
        style={{ color: "white" }}
        className="mb-3 text-xl font-mono font-bold"
      >
        {question.quest}
      </h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {question.options.map((option: any, optionIndex: number) => (
          <div
            key={optionIndex}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <div className="h-5 w-5 rounded-full border-2 mr-3 border-blue-300 cursor-pointer" />
            <div
              className="mt-2 text-md hover:bg-slate-700"
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                color: "white",
                border: "2px solid #4B6A9B",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <h1>{option}</h1>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default QuestionComponent;
