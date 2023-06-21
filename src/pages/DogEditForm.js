// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// const DogEditForm = ({ dog, handleUpdateDog }) => {
//   const [name, setName] = useState(dog.name);
//   const [age, setAge] = useState(dog.age);
//   const [breed, setBreed] = useState(dog.breed);
//   const [sex, setSex] = useState(dog.sex);
//   const [image, setImage] = useState(dog.image);
//   const history = useHistory();

//   const updateDog = () => {
//     const updatedDog = {
//       name: name,
//       age: age,
//       breed: breed,
//       sex: sex,
//       image: image,
//     };
//     handleUpdateDog(dog.id, updatedDog);
//     history.push(`/dogshow/${dog.id}`);
//   };

//   return (
//     <div>
//       <h1>Edit Dog</h1>
//       <form>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         <label>Age:</label>
//         <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
//         <label>Breed:</label>
//         <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
//         <label>Sex:</label>
//         <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
//         <label>Image:</label>
//         <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
//         <button type="button" onClick={updateDog}>Update</button>
//       </form>
//     </div>
//   );
// };

// export default DogEditForm;
