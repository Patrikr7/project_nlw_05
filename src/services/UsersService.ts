import { getCustomRepository, Repository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";

class UsersService {
    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        // Verifica se o usuário existe
        const userExists = await this.usersRepository.findOne({ email });
        
        // Se existir, retornar o usuário
        if (userExists) {
            return userExists;
        }
        
        const user = this.usersRepository.create({ email });

        await this.usersRepository.save(user);
        
        // Se não existir, salvar no DB.
        return user;
    }

    async findByEmail(email:string){
        const user = await this.usersRepository.findOne({ email });

        return user;
    }
}

export { UsersService }
