interface UserLogin {
    id: number;
    usuario: string;
    senha: string;
    tipo: string;
    token?: string|null
}

export default UserLogin;

