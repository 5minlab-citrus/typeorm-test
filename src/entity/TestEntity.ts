import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'test' })
export class TestEntity {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({ type: Date, nullable: true, default: null })
	public receivedAt: Date | null;

	@Column({ type: 'boolean', default: null, nullable: true })
	public online: boolean | null;
}
