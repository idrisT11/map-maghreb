
const HTML_ID_CONTAINER = 'MAP_LOADER';
const path_tunisia_angle = 'tunisie.svg';
const path_algeria_angle = 'algeria_post_2019.svg';

class Map{
    static TUNISIA_ANGLE_MAP = 0;
    static ALGERIA_ANGLE_MAP = 1;

    constructor(mapRef){
        this.ref = mapRef;
        this.src = this.getSourceFromRef(mapRef);

    }


    getSourceFromRef(ref){
        
        let path = './SVG_MAPS/';

        
        switch (ref) {
            case Map.TUNISIA_ANGLE_MAP:
                path += path_tunisia_angle;
                break;

                
            case Map.ALGERIA_ANGLE_MAP:
                path += path_algeria_angle;
                break;
        
            default:
                console.error("Maghreb-Maps Error: Incorrect map reference");
                path = null;
        }

        return path;
    }


    async load(){
        let container = document.getElementById('MAP_LOADER');

        if (container == null) {
            console.error("Maghreb-Maps Error: Before loading, you have to create an HTML\
            with the ID : MAP_LOADER that will contain the map.");
            return;
        }


       return fetch(this.src)
        .then(
            response => response.text()
        )
        .then(rawSvg=>{
            console.log(rawSvg);
            var parser = new DOMParser();
            var svgMap = parser.parseFromString(rawSvg, "image/svg+xml");

            let wilayas = svgMap.getElementsByClassName('wilaya');

            console.log(wilayas);
        })
        .catch((error)=>{
            console.error("An error has occured while fetching the map on the server");
        });

    }


}

