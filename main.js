// 挂载 creep 管理模块
require('creepApi')
// 挂载 creep 拓展
require('mount.creep')
//Game.spawns.Base2-1.spawnCreep([WORK, CARRY, MOVE], 'Harvester2-1', { memory: { configName: 'harvester2-1' }， { room: 'W31N6' }})
//creepApi.add('colonizer1', 'colonizer', '5bbcab449099fc012e63330e')

//Game.spawns.Base21.spawnCreep([WORK,CARRY, MOVE], 'Harvester22', { memory: {configName: 'harvester22', room: 'W31N6'}})
//creepApi.add('harvester22', 'harvester', '62654d5857a3be715cb9c5a1')




module.exports.loop = function() {
    
    // 遍历所有 creep 并执行上文中拓展的 work 方法

    //delete Memory.creepConfigs['repairer1'];
    //delete Memory.creepConfigs['repairer2'];
    //delete Memory.creepConfigs['repairer3'];
    //delete Memory.creepConfigs['colonizer1'];

    //delete Memory.creeps['Colonizer2'];
    //delete Memory.creepConfigs['colonizer2'];

    //delete Memory.creeps['Repairer2'];
    //delete Memory.creeps['Repairer3'];
    //delete Memory.room

    //const sites = Game.rooms['W31N7'].find(FIND_CONSTRUCTION_SITES);
    //for (const site of sites) { site.remove(); }

    //for (var name in Memory.creeps) {
    //    Memory.creeps[name].room = 'W31N7'
    //}
    
    /* DELETE MEMORY */
    //delete Memory.creeps['Upgrader3'].configname
    //delete Memory.creeps['Transporter2']
    //delete Memory.creepConfigs['transporter2']

    /*CHANGE SOURCEID:*/
    //Memory.creepConfigs['builder21'].args[0] = '62654d5857a3be715cb9c5a1'
    //Memory.creepConfigs['upgrader22'].args[0] = '62654d5857a3be715cb9c5a1'
   
    //creepApi.add('harvester21', 'harvester', '625f44a79abb8d7195762506')

    //arg = ['625c4fa893344a0ec6984c58', '625ffa5e88e8f0678d95c7df']
    /*  ADD MEMORY LINK  */
        //Memory.rooms = {}
        //Memory.rooms.W31N7 = {}
        //Memory.rooms['W31N7'].sourceLink1    = '625c4fa893344a0ec6984c58'
        //Memory.rooms['W31N7'].upgradeLink    = '62647794ce791f49b94016ab'
        //Memory.rooms['W31N7'].centerLink    = '625ffa5e88e8f0678d95c7df'
        
   
    for(var name in Game.rooms) {               //energy in romms
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
        var controllerProcess = Game.rooms[name].controller.progress/Game.rooms[name].controller.progressTotal;
        console.log('Room "'+name+'" has '+controllerProcess.toFixed(3)+ 'progress' );

    }


    
    if (Game.cpu.bucket == 10000) Game.cpu.generatePixel();
    const tic = Game.time;
    if (tic % 50 == 0) {
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
             break;
         }
     }
    }

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

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
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

    Object.values(Game.creeps).forEach(creep => creep.work())
}
