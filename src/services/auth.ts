import {firebase} from '../services/firebase'

interface Response {
    user: {
        name:string;
        pais:string;
        email?:string | null;
        id?:string | null;
    }
}

export  function signIn(email:string,password:string):Promise<Response>{

    return new Promise(resolve => {
        setTimeout(() => {
           firebase.auth().signInWithEmailAndPassword(email,password).then(response => {
            firebase.database().ref(`/users/${response.user?.uid}`).once('value').then(dados => {
                console.log(dados.val())
                resolve({
                    user: {
                        name:dados.val().nome,
                        pais:dados.val().pais,
                        email:dados.val().email,
                    },
                   })
               })   
            })
          
          
        },2000)
    })
}