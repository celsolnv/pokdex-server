import { PokemonUser } from './../entities/PokemonUser';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(PokemonUser)
export class PokemonUserRepository extends Repository<PokemonUser>{}