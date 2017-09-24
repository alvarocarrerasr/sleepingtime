import defaultProperties from './defaultProperties.json';

export class LocalStorage{
    localStorageBrowser = window.localStorage;
    getProperty(propertyId:string){
        const defaultProperty=defaultProperties[propertyId];
        if(!this.hasLocalStorage()){
            return defaultProperty;
        }
        return this.localStorageBrowser[propertyId] || defaultProperty;

    }
    setProperty(propertyId:string, value:string){
        this.localStorageBrowser[propertyId]=value;
    }
    hasLocalStorage(){
        return this.localStorageBrowser !== undefined;
    }
}