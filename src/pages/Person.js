import React, { useEffect, useState } from 'react';
import { Flex ,Text} from '../ui-components/index.js';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from '../api/constants.js';

const ENDPOINTS = {
    getUserInfo: () => `${BASE_URL}/users`,
}

const NotFound = () => {
    let { id } = useParams();

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [avatar, setAvatar] = useState("")

    useEffect(async () => {
        try {
            let API_ENDPOINT = `${ENDPOINTS.getUserInfo()}/${id}`;
            const res = await axios.get(API_ENDPOINT);
            if (res.data && res.data !== 'undefined') {
                setName(res.data.name)
                setLocation(res.data.location)
                setAvatar(res.data.avatar_url)
            }
            else {
                throw res;
            }

        }
        catch (error) {
            console.log("ERROR: ", error)
        }
    }, [])
    return (
        <Flex justifyContent="center" >
            <img alt="add-icon" style={{ margin: "12px" }} width={40} height={40} src={avatar} />
            <Flex flexDirection="column" justifyContent="center" >
                <Text>{name}</Text>
                <Text>{location}</Text>
            </Flex>

        </Flex>
    );
};

export default NotFound;
