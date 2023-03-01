function FoodBox(props) {
  const deletecontact = (event) => {
    // console.log(event);
    props.deleteNeawArr(event)
  };

  return (
    <div className="ContainerFoodBox">


{props.foods.length === 0 ? (
  <h2>OUUPPPSS THERE IS NOTHING TO SHOW</h2>
):(
  props.foods.map((eachElement) => {
        return (
          <div
            key={eachElement.name}
            style={{ border: '1px solid rgba(194, 194, 194, 0.197)' }}
          >
            <h3
              style={{
                padding: ' 1rem 3rem',
                borderBottom: '1px solid rgba(194, 194, 194, 0.197)',
                margin: '0',
              }}
            >
              {eachElement.name}
            </h3>
            <div
              style={{
                padding: '2rem 3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center ',
              }}
            >
              <img src={eachElement.image} alt="" width="100px" />
              <p>Calories: {eachElement.calories}</p>
              <p>Serving: {eachElement.servings}</p>
              <button onClick={() => deletecontact(eachElement.name)}>
                Delete
              </button>
            </div>
          </div>
        );
      })
)}


    </div>
  );
}

export default FoodBox;
