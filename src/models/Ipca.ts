import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('ipcas')
class Ipca {
    @PrimaryColumn('timestamp')
    date: Date;

    @Column()
    year: number;

    @Column()
    month: number;

    @Column('decimal')
    value: number;
}

export default Ipca;