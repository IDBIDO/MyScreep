

// 检查任务队列
Spawn.prototype.work = function() {

    for(var name in Memory.creeps) {             //clean memory
         if(!Game.creeps[name]) {
             var configname = Memory.creeps.name.configName

             var roleName = Memory.creepConfigs.configname.role


             Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], name, { memory: { configName: roleName }})
             //delete Memory.creeps[name];
             //console.log('Clearing non-existing creep memory:', name);
         }
     }
     //Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], 'firstUpgrader', { memory: { configName: 'upgrader1' }})
     //creepApi.add('upgrader1', 'upgrader', '5bbcaa7d9099fc012e631786')

     //Memory.creeps[]
     //Memory.creepConfigs[]

}
////////////////COLONIZER  VERSION BETA
   //delete Memory.creeps['colonizer'];
   if (!Game.creeps['colonizer']) {
    delete Memory.creeps['colonizer'];
    //Game.spawns.Base.spawnCreep([WORK, CARRY, MOVE], 'colonizer')
    Game.spawns.Base.spawnCreep([WORK, WORK, WORK, WORK,  CARRY,CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,  MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], 'colonizer')

}

const target = Game.getObjectById('625ebc4aa3d173e7bd5aaec5')
const creepp = Game.creeps['colonizer']

// 获取能量的逻辑
// ...
const source = Game.getObjectById('5bbcab449099fc012e63330e')
if (creepp.store.getFreeCapacity() != 0) {
    if (creepp.harvest(source) == ERR_NOT_IN_RANGE) creepp.moveTo(source, {visualizePathStyle: {stroke: '#fffaaa'}})
}
else {
    // 建造 spawn
    if(target) {
        if(creepp.build(target) == ERR_NOT_IN_RANGE) {
            creepp.moveTo(target)
        }
    }
}
