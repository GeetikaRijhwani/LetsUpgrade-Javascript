window.onload = function()
{
    let bus = [];

    if(localStorage.getItem("bus")==null){
        let stringbus = JSON.stringify(bus);
        localStorage.setItem("bus", stringbus);
    }
}

function displayBus(busarray = undefined)
{

    let bustabledata = "";
    let superheroes; 
    if(busarray==undefined){
        bus = JSON.parse(localStorage.getItem("bus"));
    }else{
        bus = busarray;
    }
    bus.forEach(function(bus, index){
    let currentrow = `<tr>
                    <td>${index+1}</td>
                    <td>${bus.busNo}</td>
                    <td>${bus.busName}</td>
                    <td>${bus.srcSt}</td>
                    <td>${bus.desSt}</td>
                    <td>${bus.passCap}</td>
                    </tr>`;
                    bustabledata = bustabledata + currentrow;
           
    });
    document.getElementsByClassName("tdata")[0].innerHTML = bustabledata; 
    
}
displayBus();


function addBusData(event)
{
    event.preventDefault();
    let busData = {};
    let busNo = document.getElementById('BusNo').value;
    let busName = document.getElementById('BusName').value;
    let srcSt = document.getElementById('SrcStation').value;
    let desSt = document.getElementById('DesStation').value;
    let passCap = document.getElementById('PassCap').value;
    busData.busNo = busNo;
    busData.busName = busName;
    busData.srcSt = srcSt;
    busData.desSt = desSt;
    busData.passCap = passCap;
    
    let bus = JSON.parse(localStorage.getItem("bus"));
    bus.push(busData);
    localStorage.setItem("bus", JSON.stringify(bus));

    displayBus();

    document.getElementById('BusNo').value = "";
    document.getElementById('BusName').value = "";
    document.getElementById('SrcStation').value = "";
    document.getElementById('DesStation').value = "";
    document.getElementById('PassCap').value = "";
}

function searchBySrcst()
{
    let searchSrcst = document.getElementById('searchSrc').value;
    let bus = JSON.parse(localStorage.getItem("bus"));
    let srcdata = bus.filter(function(busData){
       return busData.srcSt.toLowerCase().indexOf(searchSrcst.toLowerCase()) != -1;
    });
    displayBus(srcdata);
}

function searchByDesst()
{
    let searchDesst = document.getElementById('searchDes').value;
    let bus = JSON.parse(localStorage.getItem("bus"));
    let desdata = bus.filter(function(busData){
       return busData.desSt.toLowerCase().indexOf(searchDesst.toLowerCase()) != -1;
    });
    displayBus(desdata);
}