import Mercury from "@postlight/mercury-parser";

export abstract class UserApi {
    const url="https://trackchanges.postlight.com/building-awesome-cms-f034344d8ed";
    Mercury.parse(url).then(result => console.log(result));
}