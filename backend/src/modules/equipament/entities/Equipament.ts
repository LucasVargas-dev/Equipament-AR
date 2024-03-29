import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('equpaments')
export default class Equipament {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Exclude()
  @Column()
  nome: string;

  @Exclude()
  @Column()
  codigo: number;

  @Exclude()
  @Column()
  tag: number;

  @Exclude()
  @Column()
  modelo: string;

  @Exclude()
  @Column()
  fabricante: string;

  @Exclude()
  @Column()
  fornecedor: string;

  @Exclude()
  @Column({ nullable: true })
  dataInstalacao: Date;

  @Exclude()
  @Column({ nullable: true })
  dataTerminoGarantia: Date;

  @Column({ nullable: true })
  anotacoes: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
