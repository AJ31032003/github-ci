import { Box, Button, Grid, Heading, Image } from '@chakra-ui/react';
import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';

const getData=(da)=>{
  return axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:${da}`)
}

function App() {
  const [data, setdata] = useState([])
  const handleGet=async (args="all")=>{
    getData("all").then(d=>setdata(d.data.items))
  }
  useEffect(() => {
    handleGet()
  },[])
  console.log(data)
  return (
    <div>
      <Box>
        <Button >ALL</Button>
        <Button>Python</Button>
        <Button >CSS</Button>
        <Button >Typescript</Button>
        <Button >JavaScipt</Button>
      </Box>
        {data.map((item)=>(
          <div key={item.id}>
            <Box ml="40px">
            <Image src={item.owner.avatar_url} width="100px" height="100px"/>
            <Heading>
              {item.name}
              </Heading>
              <Heading>
              {item.language}
              </Heading>
              <Heading>
              {item.forks}_forks
              {`     `}
              {item.watchers_count} stars
              </Heading>
            </Box>
          </div>
        ))}
    </div>
  );
}

export default App;
