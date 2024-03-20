import Axios from 'axios';

const baseURL = 'http://localhost:3001/api/members';

const getMembers = async () => {
    try {
      const {data} = await Axios.get(baseURL);
        return data;
    } catch (error) {
      console.error('Error fetching members:', error);
      throw error;
    }
};

const getMember = async (id) => {
    try {
      const {data} = await Axios.get(`${baseURL}/${id}`);
        return data;
    } catch (error) {
      console.error('Error fetching member:', error);
      throw error;
    }
};

const addMember = async (member) => {
    try {
      const {data} = await Axios.post(baseURL, member);
        return data;
    } catch (error) {
      console.error('Error adding member:', error);
      throw error;
    }
};

const updateMember = async (id, member) => {
    try {
      const {data} = await Axios.put(`${baseURL}/${id}`, member);
        return data;
    } catch (error) {
      console.error('Error updating member:', error);
      throw error;
    }
};

const deleteMember = async (id) => {
    try {
      const {data} = await Axios.delete(`${baseURL}/${id}`);
        return data;
    } catch (error) {
      console.error('Error deleting member:', error);
      throw error;
    }
};

export default {
    getMembers,
    getMember,
    addMember,
    updateMember,
    deleteMember
};