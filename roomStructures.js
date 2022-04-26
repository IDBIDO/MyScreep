


for(var name in Game.rooms) {               //energy in romms
    const idSourceLink1 = Memory.rooms[name].sourceLink1;
    //const idSourceLink2 = Memory.rooms[name].sourceLink2;
    const idCenterLink = Memory.rooms[name].centerLink;
    const idUpgradeLink = Memory.rooms[name].upgradeLink;

    const linkSource1 =  Game.getObjectById(idSourceLink1);
    //const linkSource2 =  Game.getObjectById(idSourceLink2);
    const linkCenter =  Game.getObjectById(idCenterLink);
    const linkUpgrade =  Game.getObjectById(idUpgradeLink);

    if (linkSource1.store >= 500) {
        linkSource1.transferEnergy(linkCenter, 500);
    }

    //if (linkSource2.store >= 500) 
    //    linkSource2.transferEnergy(linkCenter, 500)
    
    if (linkCenter.store >= 500) {
        linkCenter.transferEnergy(linkUpgrade, 500);
    }



}