window.onload = ()=>{

    mapAlgeria = new Map(Map.ALGERIA_ANGLE_MAP);

    let val = await mapAlgeria.load();

    console.log(val);

}