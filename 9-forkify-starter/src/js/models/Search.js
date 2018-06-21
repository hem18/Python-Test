import axios from 'axios';
import { key, corsProxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const jsonData = await axios(`${corsProxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = JSON.parse(jsonData.data.body);
        } catch (error) {
            alert(error);
        }   
    }
}