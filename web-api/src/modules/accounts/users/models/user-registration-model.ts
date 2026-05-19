import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

/**
 * Model for user registration
 */
export class UserRegistrationModel {
    /**
     * The username of the user
     */
    @IsOptional()
    @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
    username: string;

    /**
     * The email of the user
     */
    @IsEmail({}, { message: 'El correo electrónico no es válido' })
    @IsNotEmpty({ message: 'El correo electrónico es requerido' })
    @IsString({ message: 'El correo electrónico debe ser una cadena de texto' })
    email: string;

    /**
     * The password of the user
     */
    @IsNotEmpty({ message: 'La contraseña es requerida' })
    @IsString({ message: 'La contraseña debe ser una cadena de texto' })
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    password: string;

    /**
     * The first name of the user
     */
    @IsNotEmpty({ message: 'El nombre es requerido' })
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    names: string;

    /**
     * The last name of the user
     */
    @IsOptional()
    @IsString({ message: 'El apellido debe ser una cadena de texto' })
    lastNames: string;
}
