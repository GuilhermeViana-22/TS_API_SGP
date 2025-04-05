import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ length: 100 })
    name: string;

    @Column({ length: 100, unique: true })
    email: string;  

    @Column({ length: 100 })
    password: string;
    
    @Column({ type: 'int', nullable: true })
    tipo: number;

    @Column({ length: 50, nullable: true })
    situacao: string;

    @Column({ length: 50, nullable: true })
    status: string;

    @Column({ type: 'text', nullable: true })
    log: string;
    // Adicione outros campos conforme necessário
    // Exemplo:
    // @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  
}
