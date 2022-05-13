// 挂载 creep 管理模块
require('creepApi')
// 挂载 creep 拓展
require('mount.creep')
//Game.spawns.Base2-1.spawnCreep([WORK, CARRY, MOVE], 'Harvester2-1', { memory: { configName: 'harvester2-1' }， { room: 'W31N6' }})
//creepApi.add('colonizer1', 'colonizer', '5bbcab449099fc012e63330e')

//Game.spawns.Base21.spawnCreep([WORK,CARRY, MOVE], 'Harvester22', { memory: {configName: 'harvester22', room: 'W31N6'}})
//creepApi.add('harvester22', 'harvester', '62654d5857a3be715cb9c5a1')


//Game.spawns.Base.spawnCreep([MOVE], 'Colonizer1', { memory: {configName: 'colonizer1', room: 'W31N7'}})
//creepApi.add('colonizer1', 'colonizer', '5bbcaafd9099fc012e6329ae')

/*  HARVESTER CREATION
    Game.spawns.Base41.spawnCreep([WORK, WORK, CARRY, MOVE], 'Harvester41', { memory: {configName: 'harvester41', room: 'W37N7'}})
    creepApi.add('harvester41', 'harvester', '627d4397061b1e55b16f291f')
*/

/*  TRANSPORTER CREATION
    Game.spawns.Base31.spawnCreep([CARRY, CARRY, CARRY, MOVE], 'Transporter31', { memory: {configName: 'transporter31', room: 'W36N3'}})
    creepApi.add('transporter31', 'transporter', '6272331c2fd82844d57ef75c')
*/

/*  UPGRADER CREATION
    Game.spawns.Base41.spawnCreep([WORK,WORK, CARRY, MOVE], 'Upgrader41', { memory: {configName: 'upgrader41', room: 'W37N7'}})
    creepApi.add('upgrader41', 'upgrader', '627d4397061b1e55b16f291f')
*/

/*  BUIDER CREATION
    Game.spawns.Base41.spawnCreep([WORK, CARRY, CARRY,CARRY, MOVE], 'Builder41', { memory: {configName: 'builder41', room: 'W37N7'}})
    creepApi.add('builder41', 'builder', '627d4397061b1e55b16f291f')
*/

/*  REPAILER CREATION
    Game.spawns.Base31.spawnCreep([WORK, CARRY, CARRY,MOVE, MOVE], 'Repairer31', { memory: {configName: '31', room: 'W36N3'}})
    creepApi.add('repairer31', 'repairer', '627496272056adbd3dfa1495')
*/

/* CENTRAL MANAGER
    Game.spawns.Base.spawnCreep([CARRY, CARRY, CARRY, CARRY, MOVE], 'CentralManager', { memory: {configName: 'centralManager1', room: 'W37N1'}})
    creepApi.add('centralManager1', 'centralManager', '625ffa5e88e8f0678d95c7df')
*/

/*  MINER CREATION
    Game.spawns.Base.spawnCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], 'Miner2', { memory: {configName: 'miner2', room: 'W31N6'}})
    creepApi.add('miner2', 'miner', '5bbcb1d040062e4259e93387')


*/
/*  COLONIZER CREATION
    Game.spawns.Base.spawnCreep([ TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,WORK, WORK,WORK, WORK,WORK, WORK,WORK, WORK,CARRY,CARRY,CARRY,CARRY, MOVE, MOVE, MOVE, MOVE,MOVE, MOVE, MOVE, MOVE,MOVE, MOVE, MOVE, MOVE, MOVE,MOVE, MOVE, MOVE, MOVE,MOVE, MOVE], 'Colonizer', { memory: {configName: 'colonizer', room: 'W31N7'}})
    creepApi.add('colonizer', 'colonizer', '5bbcb1d040062e4259e93387')


*/

//Game.spawns.Base.spawnCreep([ TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE, MOVE, MOVE, MOVE,MOVE, MOVE, MOVE, MOVE,MOVE, MOVE, MOVE, MOVE, MOVE,MOVE, MOVE, MOVE, MOVE,MOVE, MOVE, MOVE, MOVE,MOVE, MOVE, MOVE, MOVE, CLAIM], 'claimer', { memory: {configName: 'claimer', room: 'W31N7'}})

/****************************************************************************************/

/*  CHANGE MEMORY CREEPS   
    Memory.creeps['Repairer31'].configName = 'repairer31'
    Memory.creepConfigs['colonizer'].args[0] = '5bbcaaf19099fc012e6327bc'
    Memory.creepConfigs['builder31'].args[0] = '6277bdda2d23e5678a4983f5'

*/


/*  MEMORY ROOM/LINK CREATION
    Memory.rooms['W31N6'] = {}
    Memory.rooms['W31N6'].sourceLink1 = '';
    Memory.rooms['W31N6'].sourceLink2 = '';
    Memory.rooms['W31N6'].upgradeLink = '626d6a2d2740d12ea40527e1'
    Memory.rooms['W31N6'].centerLink = '626d58378cd310f2b6ed7bdc'
*/





module.exports.loop = function() {
    // 遍历所有 creep 并执行上文中拓展的 work 方法
    //Memory.creepConfigs['colonizer'].args[0] = '5bbcaaf19099fc012e6327bc'

    //delete Memory.creepConfigs['upgrader1'];
    //delete Memory.creepConfigs['upgrader3'];
    //delete Memory.creeps['Upgrader1'];
    //delete Memory.creeps['Upgrader3'];


    //delete Memory.creepConfigs['repairer2'];
    //delete Memory.creepConfigs['repairer31'];
    //delete Memory.creepConfigs['colonizer1'];

    delete Memory.creeps['claimer'];
    //delete Memory.creepConfigs['colonizer1'];
    
    //delete Memory.creeps['Repairer2'];
    //delete Memory.creeps['CentralManager2'].roomName;
    //delete Memory.roomName

    //const sites = Game.rooms['W31N7'].find(FIND_CONSTRUCTION_SITES);
    //for (const site of sites) { site.remove(); }

    //for (var name in Memory.creeps) {
    //    Memory.creeps[name].room = 'W31N7'
    //}
    
    /* DELETE MEMORY */
    //Memory.creeps['claimer'].configName = ''
    //Memory.creeps['CentralManager'].room = 'W31N7'
    //delete Memory.creepConfigs['repairer2']

    /*CHANGE SOURCEID:*/
    //Memory.creepConfigs['builder21'].args[0] = '62654d5857a3be715cb9c5a1'
    //Memory.creepConfigs['upgrader2'].args[0] = '6264815534ed8c6d8b8685d9'
    //Memory.creepConfigs['transporter1'].args[0] = '6260985357df5881f6b92663'
    //Memory.creepConfigs[''].args[0] = '6260985357df5881f6b92663'

       //Memory.rooms['W31N7'].upgradeLink = '6264815534ed8c6d8b8685d9'
        //Memory.rooms['W31N7'].sourceLink2 = '62727a99bf05ba1dda277aca'

    //creepApi.add('harvester21', 'harvester', '625f44a79abb8d7195762506')

    //arg = ['625c4fa893344a0ec6984c58', '625ffa5e88e8f0678d95c7df']
    /*  ADD MEMORY LINK  */
        //Memory.rooms = {}
        //Memory.rooms.W31N7 = {}
        //Memory.rooms['W31N7'].sourceLink1    = '625c4fa893344a0ec6984c58'
        //Memory.rooms['W31N7'].upgradeLink    = '62647794ce791f49b94016ab'
        //Memory.rooms['W31N7'].centerLink    = '625ffa5e88e8f0678d95c7df'
    /*
    if(Game.time%7 == 0)

        for(var name in Game.rooms) {               //energy in romms
            console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
            var controllerProcess = Game.rooms[name].controller.progress/Game.rooms[name].controller.progressTotal;
            console.log('Room "'+name+'" has '+controllerProcess.toFixed(3)+ 'progress' );
            //console.log(Game.time%50);

        }
    */
    const creep = Game.creeps['claimer']
    const room = Game.rooms['W37N7']
    //creep.claimController(room.controller)        //W33N6   x  ->      W35N6   x    -> W35N4        -> W36N3
    if (creep) {
        if(!room) {
            creep.moveTo(new RoomPosition(25, 25, 'W37N6'), {visualizePathStyle: {stroke: '#fed200', reusePath: 200}})
            if (creep.room.name == 'W37N6')   creep.moveTo(new RoomPosition(25, 25, 'W37N7'), {visualizePathStyle: {stroke: '#fed200', reusePath: 50}})

        }
        else {
            if (creep.claimController(room.controller) == ERR_NOT_IN_RANGE) {

                creep.moveTo(room.controller)
            }
        }
    }

    

    
    if (Game.cpu.bucket == 10000) Game.cpu.generatePixel();
    const tic = Game.time;
    if (tic % 30 == 0) {
    for(var name in Memory.creeps) {             //name is string 
         if(!Game.creeps[name]) {

             //var configname = Memory.creeps.name[configName]
             var configname = Memory.creeps[name].configName
             //console.log('Creating new creep: ', configname );


             //const creepLogic = creepConfig.role;
             var roleName = Memory.creepConfigs[configname].role
             //console.log('Role of the new creep: ', roleName);
             console.log('Creating new creep:', configname, ', with Role:', roleName );
             //Memory.creeps['firstUpgrader'].configName
             //upgrader1
             
             var room_name = Memory.creeps[name].room
             //console.log('Role of the new creep: ', room_name);
            
              var rcl = Game.rooms[room_name].controller.level
             //console.log('Role of the new creep: ', rcl);
             const body = creepApi.get_body(roleName, rcl)
             
             var list_spawn = Game.rooms[room_name].find(FIND_MY_STRUCTURES, {
                filter: { structureType: STRUCTURE_SPAWN }
            } );
             var spawn_name = list_spawn[0].name
             //console.log('Role of the new creep: ', list_spawn[0].name);

             Game.spawns[spawn_name].spawnCreep(body, name)
             //delete Memory.creeps[name];
             //console.log('Clearing non-existing creep memory:', name);
             //break;
         }
     }
    }

    //TERMINAL: 
    const terminal = Game.getObjectById('62642c392740d1ca26028c4a')
    /*
    if (tic % 200 == 0) {
        if (Memory.rooms['W31N7'].sell != 'null') {
            if (terminal.store.getUsedCapacity(Memory.rooms['W31N7'].sell) > 20000) {
                terminal.send(Memory.rooms['W31N7'].sell, 10000, 'E11S39','LH x 10000 from W31N7');
            }
        }
    }
    */

    /*
    if (tic % 100 == 0){
        const storage = Game.getObjectById('6260985357df5881f6b92663')
        //BUY ENERGY
        if (storage.store[RESOURCE_ENERGY] < 300000) {
            const orders = Game.market.getAllOrders(order =>  order.resourceType == RESOURCE_ENERGY &&
                order.price <= 2.7 && order.type == ORDER_SELL && order.price <= 2.7 &&
                Game.market.calcTransactionCost(1000, 'W31N7', order.roomName) < 200);

                if (orders[0]) Game.market.deal(orders[0].id, 10000, "W31N7");
                
            //const orders = Game.market.getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_GHODIUM});


        }
        //SELL PIXEL
    }
    //if (tic % 500 == 0) Game.market.deal('6276cd9ad940a46bce787843', 1, "W31N7");
*/

    //FACTORY
    if(tic % 20 == 0) {
        const factory = Game.getObjectById('627c8ba45d376ac7bbdb1cc0')
        if (factory.store.getUsedCapacity(RESOURCE_OXYGEN) > 500) {
            factory.produce(RESOURCE_OXIDANT)
        }
    }

    //LINK:
    for(var roomName in Memory.rooms) { 

        const sourceLink1 = Game.getObjectById(Memory.rooms[roomName].sourceLink1)
        const sourceLink2 = Game.getObjectById(Memory.rooms[roomName].sourceLink2)
        const upgradeLink = Game.getObjectById(Memory.rooms[roomName].upgradeLink)
        const centerLink = Game.getObjectById(Memory.rooms[roomName].centerLink)

        if(sourceLink1) //not null
            if (sourceLink1.store.getUsedCapacity(RESOURCE_ENERGY) >= 400) sourceLink1.transferEnergy(centerLink)

        if (sourceLink2)
            if (sourceLink2.store.getUsedCapacity(RESOURCE_ENERGY) >= 400) sourceLink2.transferEnergy(centerLink)
        
        if (centerLink && upgradeLink)
            if (upgradeLink.store.getUsedCapacity(RESOURCE_ENERGY) < 200 && centerLink.store.getUsedCapacity(RESOURCE_ENERGY) >= 400) centerLink.transferEnergy(upgradeLink)
        //console.log(centerLink.store.getUsedCapacity(RESOURCE_ENERGY) );
        //console.log(Memory.rooms[roomName].upgradeLink);
        
    }
   /*
    var lab = Game.getObjectById('6264552220d98ea4573bac78');
    console.log(lab.store[Object.keys(lab.store)[1]]);       // amount of resource
    console.log(Object.keys(lab.store)[1]);             //name of resource
    */

    if (tic % 15 == 0) {
        const labSource1 = Game.getObjectById('627bc9e19d8f3f2faffbdd20');
        const labSource2 = Game.getObjectById('627b9d4192cbd481933b3b8f');

        for (var reactionLabName in Memory.rooms['W31N7'].lab.reactionLabs) {
            const lab = Game.getObjectById(Memory.rooms['W31N7'].lab.reactionLabs[reactionLabName])
            lab.runReaction(labSource1, labSource2)
            
        }
    }
    /*
    Memory.rooms['W31N7'].lab.sourceLab1 = '627b9d4192cbd481933b3b8f'
    Memory.rooms['W31N7'].lab.sourceLab2 = '627bc9e19d8f3f2faffbdd20'

    Memory.rooms['W31N7'].lab.reactionLab. = {}
    Memory.rooms['W31N7'].lab.reactionLabs.reactionLab1 = '627bdf7310256071ad5768af'
    Memory.rooms['W31N7'].lab.reactionLabs.reactionLab2 = '627b7b77a6bb7061ae5c6b7b'
    Memory.rooms['W31N7'].lab.reactionLabs.reactionLab3 = '6264556e2b859800b96f516b'
    Memory.rooms['W31N7'].lab.reactionLabs.reactionLab4 = '6264552220d98ea4573bac78'
    Memory.rooms['W31N7'].lab.reactionLabs.reactionLab5 = '627bb2873da2501775522e90'
    Memory.rooms['W31N7'].lab.reactionLabs.reactionLab6 = '627b60826870777c8d5ac0fe'
    Memory.rooms['W31N7'].lab.reactionLabs.reactionLab7 = '627bf4c4a75405600a1caf24'
    Memory.rooms['W31N7'].lab.reactionLabs.reactionLab8 = '627b96a6a7540521a01c9213'
    */
    //Memory.rooms['W31N7'].lab.mineralSource1 = 'RESOURCE_OXIGEN'
    //Memory.rooms['W31N7'].lab.mineralSource2 = 'RESOURCE_HYDROGEN'

    var tower = Game.getObjectById('62612ece7e57d6298592412d');
    if(tower) {

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }

        else {
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => (structure.hits < structure.hitsMax-400 && structure.structureType == STRUCTURE_ROAD)
            });
            if(closestDamagedStructure) {
                tower.repair(closestDamagedStructure);
            }
        }

    }
    var tower2 = Game.getObjectById('62617d23dd2d664204c3f5a1');
    if(tower2) {

        var closestHostile = tower2.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower2.attack(closestHostile);
        }

        else {
            var closestDamagedStructure = tower2.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => (structure.hits < structure.hitsMax-400 && structure.structureType == STRUCTURE_ROAD)
            });
            if(closestDamagedStructure) {
                tower2.repair(closestDamagedStructure);
            }
        }

    }

    var tower3 = Game.getObjectById('6273ce8fb6aabb8b5512c5d6');
    if(tower3) {

        var closestHostile = tower3.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower3.attack(closestHostile);
        }

        else {
            var closestDamagedStructure = tower3.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => (structure.hits < structure.hitsMax-400 && structure.structureType == STRUCTURE_ROAD)
            });
            if(closestDamagedStructure) {
                tower3.repair(closestDamagedStructure);
            }
        }

    }

    Object.values(Game.creeps).forEach(creep => creep.work())
}
