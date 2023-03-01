import { useState } from 'react';

function AddFoodForm(props) {
  // all state

  const [inputName, setinputName] = useState('');
  const [inputImage, setinputImage] = useState('');
  const [inputCalories, setinputCalories] = useState('');
  const [inputServings, setinputServing] = useState(0);
  const [isDisplayForm, setisDisplayForm] = useState(false);

  //all function

  const handleChangeName = (event) => {
    console.log(event.target.value);
    setinputName(event.target.value)
  };
  const handleChangeImage = (event) => {
    console.log(event.target.value);
    setinputImage(event.target.value)
  };
  const handleChangeCalories = (event) => {
    console.log(event.target.value);
    setinputCalories(event.target.value)
  };
  const handleChangeServing = (event) => {
    console.log(event.target.value);
    setinputServing(event.target.value)
  };

const handleSubmitForm = (event) =>{
event.preventDefault()


const newRecipies ={
    name: inputName,
    calories: inputCalories,
    image: inputImage,
    servings: inputServings
}
console.log(newRecipies)

props.setFoodStat((actualState)=>{
return [newRecipies , ...actualState ]
})
props.setfoodStatToDisplay((actualState)=>{
return [newRecipies , ...actualState ]
})

}


const changeDisplayForm =()=>{
    if(isDisplayForm === false){
        setisDisplayForm(true)
    }else {
        setisDisplayForm(false)
    }
}

  return (
    <div>

<button onClick={()=>changeDisplayForm()}>{isDisplayForm === false ? ("Show the form"):("Hide the form")}</button>
<br />
<br />

    {isDisplayForm === true ? (

        <form   onSubmit={handleSubmitForm}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleChangeName} />

        <br /><br />

        <label htmlFor="image">Image</label>
        <input 
        type="text" 
        name="image" 
        onChange={handleChangeImage}
        />

        <br /><br />

        <label htmlFor="calories">Calories</label>
        <input 
        type="text" 
        name="calories" 
        onChange={handleChangeCalories}
        />

        <br /><br />

        <label htmlFor="servings">Servings</label>
        <input 
        type="number" 
        name="servings" 
        onChange={handleChangeServing}
        />

        <br />
        <br />

        <button>Create</button>
      </form>
    ):null}

    </div>
  );
}

export default AddFoodForm;
