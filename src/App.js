
// import './App.css';
// import { ChipComponents } from './chipComponent/ChipComponents';

// function App() {
//   return (
//     <>
//       <ChipComponents/>
//     </>
//   );
// }

// export default App;

//APP.js

import { useState } from 'react';
// import Doremon from "../src/component/Doremon.jpeg";
// import Nobi from "../src/component/Nobita.jpeg";
import './App.css';
// import { ChipComponents } from './chipComponent/ChipComponents';

import ChipComponents from './chipComponent/ChipComponents';
// import Dp from "D:/ReactProjects/SearchBar/searchbar/src/Mustang.jpg";


function App() {

  const [inputData, setInputData] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [availableData, setAvailableData] = useState([
    {
      name: "Shyam",
      email: "Shyam@gmail.com",
      // ImageUrl: Dp,
      ImageUrl: " "
    },
    {
      name: "Neha",
      email: "neha@gmail.com",
      // image: Nobi,
      ImageUrl: " "
    },
    {
      name: "Dota",
      email: "dota@gmail.com",
      // image: Doremon,
      ImageUrl: " "
    },
    {
      name: "Java",
      email: "java@gmail.com",
      // image: Dp,
      ImageUrl: " "
    },
    {
      name: "Salman",
      email: "Salman@gmail.com",
      // image: Nobi,
      ImageUrl: " "
    },
    {
      name: "Harry",
      email: "Harry@gmail.com",
      // image: Dp,
      ImageUrl: " "
    },

    {
      name: "Charan",
      email: "charan@gmail.com",
      // image: Doremon,
      ImageUrl: " "
    },
    {
      name: "Dev",
      email: "dev@gmail.com",
      // image: Dp,
      ImageUrl: " "
    }
  ]);


  const handleinputData = (e) => {
    setInputData(e.target.value)
  }

  const handleSelectUser = (name, image, email) => {
    setSelectedUser((prevData) => [...prevData, { name, image, email }]);
    setAvailableData((prevData) => prevData.filter((user) => user.name !== name));
  };

  const handleRemoveUser = (dataToRemove) => {
    setSelectedUser((prevData) =>
      prevData.filter((data) => data.name !== dataToRemove.name)
    );
    setAvailableData((prevData) => [...prevData, { name: dataToRemove.name, image: dataToRemove.image }]);
  };

  return (
    <>
      <header>
        <h1 className='heroText'>
          Pick Users
        </h1>
      </header>

      <section className='datasection'>
        <div className='dataContainer' >

          {selectedUser.map((data, index) => (
            <div key={index} className='selectedData'>
              <img className='selectedImage' src={data.image} alt={data.name} />
              <span>{data.name}</span>
              <button className='removeUserButton' onClick={() => handleRemoveUser(data)}>X</button>
            </div>
          ))}

          <div className='dataandInputContainer'
            onMouseOver={() => {
              setIsInputFocused(true)
            }}

            onMouseOut={() => {
              setIsInputFocused(false)
            }}
          >

            <input type='text'
              name='name'
              id='name'
              value={inputData}
              onChange={handleinputData}
              placeholder='Add new User....'
            />

            {isInputFocused && (
              <ChipComponents
                searchData={inputData}
                onSelectUser={handleSelectUser}
                availableData={availableData}
                setIsInputFocused={setIsInputFocused}
              />
            )}
          </div>

        </div>
      </section >

    </>
  );
}

export default App;
