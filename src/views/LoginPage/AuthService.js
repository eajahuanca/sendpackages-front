import { post, get } from '../../utils/request';

class AuthService{

    /**
     * Envio de Solicitud al servidor para
     * obtener un token
     * @param {string} username 
     * @param {string} password 
     */
    static login(username, password){
        return post('/seguridad/api/get_token/', {username, password});
    }

    /**
     * Retorna la infomacion del usuario
     */
    static geInformationUser(){
        return get('/seguridad/api/me/');
    }
}

export default AuthService;