import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const shownImages = new Array(10).fill(0);
let check  = 0; // if,check == 0 then only score will increase
let time = 2000;

function Test() {   


    const navigate = useNavigate();
    const images = [
        require('./image-1.jpg'),
        require('./image-2.jpg'),
        require('./image-3.jpg'),
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [changeCount, setChangeCount] = useState(0);
    const [changeScore, setChangeScore] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [myArray, setMyArray] = useState([]);
    let id = 5;


    function markImageAsShown(index) {
        shownImages[index] = 1;
    };
    function moveToScore() {
        id = changeScore;
        navigate("/Score", {state : {id : id}});
    }
    

    useEffect(() => {
        if (changeCount >= 6) {
            console.log(myArray);
            moveToScore();
        }

        let nextImageIndex = Math.floor(Math.random() * images.length);
        if (nextImageIndex === currentImageIndex) {
            nextImageIndex = (currentImageIndex + 1) % images.length;
        }

        const timer = setTimeout(() => {
            setCurrentImageIndex(nextImageIndex);
            setChangeCount(changeCount + 1);
            markImageAsShown(currentImageIndex); // mark the currentImage as marked
            check = 0;
        }, time);

        return () => clearTimeout(timer);
    }, [changeCount]);

    const handleClick_seen = () => {
        if (shownImages[currentImageIndex] === 1 && check === 0) {
            setChangeScore(changeScore + 1);
        }
        else if (check === 0) {
            setChangeScore(changeScore - 1);
        }
        
        if (startTime !== null && check !== 1) {
            const endTime = performance.now();
            const timeDifference = endTime - startTime - changeCount*time;
            setMyArray([...myArray,timeDifference]);
      
            // Log or use the time difference as needed
            console.log(changeCount*3);
            console.log(timeDifference);
            console.log(performance.now());
            console.log("______________")
        }
        check = 1;
    };

    const handleClick_notseen = () => {
        if (shownImages[currentImageIndex] === 0 && check === 0) {
            setChangeScore(changeScore + 1);
        } else if (check === 0) {
            setChangeScore(changeScore - 1);
        }
        if (startTime !== null && check !== 1) {
            const endTime = performance.now();
            const timeDifference = endTime - startTime - changeCount*time;
            setMyArray([...myArray,timeDifference]);
      
            // Log or use the time difference as needed
            console.log(changeCount*3);
            console.log(timeDifference);
            console.log(performance.now());
            console.log("______________")
        }
        check = 1;
    };

    React.useEffect(() => {
        setStartTime(performance.now());
    }, []);

    React.useEffect(() => {
        for(let i = 0; i < 10; i++){
            shownImages[i] = 0;
        }
    }, []);

    return (
        <div className='min-h-screen bg-gradient-to-r from-gray-800 to-white flex flex-col items-center justify-center'>
            <h1 className="text-3xl font-bold text-white mb-4">Test Page</h1>
            <img src={images[currentImageIndex]} alt="Dynamic" className="shadow-lg mb-4" style={{ height: '200px', width: '350px' }} />
            <br></br>
            <div>
                <button type='button' className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={handleClick_seen}>Already Seen</button>
                <button type='button' className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={handleClick_notseen}>Not Seen</button>
            </div>
            <h2 className="text-xl font-medium text-white mt-4">Your current score is: {changeScore}</h2>
        </div>
    );
}

export default Test
