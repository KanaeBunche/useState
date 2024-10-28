import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './UseState/Home';
import CounterApp from './UseState/CounterApp';
import DynamicCounterApp from './UseState/DynamicBackground';
import TextInputStore from './UseState/TextInputStore';
import ToggleVisibility from './UseState/ToggleVisibility';
//use state
// User information 

const user =
  { id:1,
    name: 'Jesus Christ', 
    image: "Headshot/lamb.jpeg" ,
    followersInital: 500,
    likes: 4000
  };

export default function App() {
const [followers, setFollowers]= useState(user.followersInital);
const [isFollowing, setIsFollowing] = useState(false)

const toggleFollowers = () =>{
  if(isFollowing){
    setFollowers(followers -1 );
} else {
  setFollowers(followers + 1);
} setIsFollowing(!isFollowing)

};

return (
  <Router>
    <Routes>
      <Route path="/" element={<Home user={user} followers={followers} toggleFollowers={toggleFollowers} isFollowing={isFollowing} />} />
      <Route path="/counter" element={<CounterApp />} />
      <Route path="/dynamic-counter" element={<DynamicCounterApp />} />
      <Route path="/text-input" element={<TextInputStore />} />
      <Route path="/toggle-visibility" element={<ToggleVisibility />} />
    </Routes>
  </Router>
);
}
     

