import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('ipcas')
class Ipca {
    @PrimaryColumn('date')
    date: Date;

    @Column()
    year: number;

    @Column()
    month: number;

    @Column('decimal')
    value: number;
}

export default Ipca;