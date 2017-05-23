/**
 * Created by Tundaey on 5/23/2017.
 */
export default function auth(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve({
                name: 'Tunde Ganiy',
                avatar: 'https://pbs.twimg.com/profile_images/378800000605536525/891a881bde93a1fc3e289528fb859b96_400x400.jpeg',
                uid: 'tundeganiy'
            })
        }, 2000)
    })
}