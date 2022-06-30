import React from 'react';
import { Box, Flex } from '../ui-components/index.js';
import { data as users } from '../data/index.js';
import List from '../ui-components/List.js';
import { useNavigate } from "react-router-dom"

const Body = () => {

  const navigate = useNavigate();

  const handleChangeUsername = index => navigate(`/person/${[...users][index]}`)

  return (
    <Box textAlign="center">
      <Flex justifyContent="center" alignItems="center" flexDirection="column">


        {users.map((User, index) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: '200px',
              margin: '20px',
              backgroundColor: 'lightblue',
              cursor: 'pointer',
            }}
            onClick={() => {
              handleChangeUsername(index);
            }}
            key={index}>
            <List key={index} name={User} />
          </div>
        ))}
      </Flex>
    </Box>
  );
};

export default Body;
