const clusters_grid = document.getElementById("clusters_grid");
const state = {
    1 : "#31CA8D", //Green - Working correct
    2 : "#FACA15", //Yellow - minor issues
    3 : "#C20F2D", //Red - Big problems
    4 : "#002E83"  //Blue - Not deployed
}


//-------CLUSTERS---------//
const clusters = [
    state[3], //Cluster 1
    state[4], //Cluster 2
    state[4], //Cluster 3
    state[4], //Cluster 4
]

//--Graph clusters--//
Array.from(clusters).forEach((cluster, i)=>{
    const li = document.createElement('li');
    li.style.backgroundColor = cluster;
    li.style.boxShadow       = `0 0 3px 6px ${cluster}`;

    const h5 = document.createElement('h3');
    h5.textContent = i+1;

    li.appendChild(h5);

    clusters_grid.appendChild(li);
});
