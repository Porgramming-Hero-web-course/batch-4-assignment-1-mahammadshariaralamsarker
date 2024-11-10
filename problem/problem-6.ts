interface Profile {
    name: string,
    age:number,
    email:string,
}
function updateProfile(profile:Profile, updates:{name?:string,age?:number,email?:string}){
    return { ...profile , ...updates}
}
