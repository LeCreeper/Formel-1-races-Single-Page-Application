import axios from 'axios';

//her kaldes basis delen af URL'en vi skal bruge. dvs. uden API stien.
//Det interessante er at der kan medtages parametre, headere til f.eks. at verificere før der hentes.  
export default axios.create( {
    baseURL: 'http://ergast.com'
    
} )


