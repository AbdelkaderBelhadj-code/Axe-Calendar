import { grades } from 'src/app/models/grade';

export class Employee {
    id!: number;
    fullName!: string;
    grade! : grades ;
}