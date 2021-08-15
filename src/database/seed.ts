import '../setup';
import { getCustomRepository } from 'typeorm';
import { PokemonRepository } from './../repositories/PokemonRepository';
import axios, { AxiosInstance } from 'axios';
import connectDatabase from "../database";
async function seedDatabase(){
    const api = axios.create({
        baseURL:"https://pokeapi.co/api/v2"
    });

    async function listPokemonsLinks(api:AxiosInstance){
        const pokemons = await api.get("/pokemon?limit=20");

        return pokemons.data.results;
    }
    async function loadingCharacterPokemon(pokemonsLinks:IPokemonsLinks[]){
        const AllPokemons = pokemonsLinks.map(async (item)=>{
            let pokemonCharacter = await axios.get(item.url);
            const infoPokemons:IPokemonCharacter = pokemonCharacter.data;
            
            const pokemonFormate = {
                name: infoPokemons.name,
                number: infoPokemons.id,
                image:infoPokemons.sprites.other.dream_world.front_default,
                weight:infoPokemons.weight,
                height:infoPokemons.height,
                baseExp:infoPokemons.base_experience,
                description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.  `
            }

            return pokemonFormate
        });
        return await Promise.all(AllPokemons);
    }
    async function savePokemons(pokemons:IPokemon[]){
        const pokemonRepository = getCustomRepository(PokemonRepository);

        await Promise.all(pokemons.map( async(pokemonItem)=>{
            const pokemon = pokemonRepository.create({
                ...pokemonItem
            });
            await pokemonRepository.save(pokemon);
        }))

        return true;
    }

    const listOfPokemons = await listPokemonsLinks(api);
    const pokemons = await loadingCharacterPokemon(listOfPokemons);
    const successSavePokemons = await savePokemons(pokemons);
    if (successSavePokemons) console.log("finalmente!!!");

    // console.log("Final => ", pokemons);

}
async function init () {
    await connectDatabase();
}
init().then(()=>{
    seedDatabase();
})

interface IPokemonsLinks{
    name:string;
    url:string;
}
interface IPokemonCharacter{
    name:string;
    id:number;
    base_experience:number;
    weight:number;
    height:number;
    sprites:{
        other:{
            dream_world:{
                front_default:string;
            }
        }
    };
    species:{
        url:string;
    }

}
interface IPokemon{
    name: string;
    number:number;
    image:string;
    weight:number;
    height:number;
    baseExp:number;
    description:string;
}