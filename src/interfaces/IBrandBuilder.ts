import Brand from "../models/brand/Brand";

export interface IBrandBuilder{
    name: string;
    logo: string;

    setName(name: string): IBrandBuilder
    setLogo(logo: string): IBrandBuilder

    build(): Brand
}