import { firebaseConfig } from './firebaseConfig'

export async function firestore() {
    if (process.browser) {
        console.log('client')
        return window.db
    } else {
        const firebase = await import('firebase')
        //let app = firebase.initializeApp(firebaseConfig)
        //return app.firestore()
        console.log('firebase', firebase)
        console.log('server')

        if (firebase.apps.length == 0) {
            let app = firebase.initializeApp(firebaseConfig)
            return app.firestore()
        }
        else {
            return firebase.apps[0].firestore()
        }

    }
}
