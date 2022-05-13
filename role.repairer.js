/**
 * 升级者配置生成器
 * source: 从指定矿中挖矿
 * target: 将其转移到指定的 roomController 中
 *
 * @param sourceId 要挖的矿 id
 */
module.exports = sourceId => ({
    // 采集能量矿
    source: creep => {
        const source = Game.getObjectById(sourceId)
        if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(source)

        // 自己身上的能量装满了，返回 true（切换至 target 阶段）
        return creep.store.getFreeCapacity() <= 0
    },
    // 升级控制器
    target: creep => {
        //const controller = creep.room.controller
        creep.say('www')

        
        var closestDamagedWall = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => (structure.structureType == STRUCTURE_WALL && structure.hits < 2000000) });
        
        
        if(closestDamagedWall.length) {
          if (creep.repair(closestDamagedWall[0]) == ERR_NOT_IN_RANGE) {creep.moveTo(closestDamagedWall[0])}
        }
        
        /*
        var targets = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
        if(targets) {
            if(creep.build(targets) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        */
        else {
          var closestDamagedNoWall = creep.pos.findClosestByRange(FIND_STRUCTURES, {
          filter: (structure) => structure.hits < 5000000 && structure.structureType == STRUCTURE_RAMPART });
          if (creep.repair(closestDamagedNoWall) == ERR_NOT_IN_RANGE) creep.moveTo(closestDamagedNoWall)
          else {
            var closesRoad = creep.pos.findClosestByRange(FIND_STRUCTURES, {
              filter: (structure) => structure.hits < structure.hitsMax-1000 && structure.structureType == STRUCTURE_ROAD });
              if (creep.repair(closesRoad) == ERR_NOT_IN_RANGE) creep.moveTo(closesRoad)

          }
        }
        // 自己身上的能量没有了，返回 true（切换至 source 阶段）
        return creep.store[RESOURCE_ENERGY] <= 0
    }
})
