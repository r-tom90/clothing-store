import "./categories.styles.scss";

function App() {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 1,
      title: "Pants",
    },
    {
      id: 1,
      title: "Dress",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
