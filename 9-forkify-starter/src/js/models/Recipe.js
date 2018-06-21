import axios from 'axios';
import { key, corsProxy } from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const result = await axios(`${corsProxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
             = JSON.parse(jsonData.data.body.recipe);
            this.author = 
            console.log(result);
        } catch (error) {
            console.log(error);
        }   
    }
}