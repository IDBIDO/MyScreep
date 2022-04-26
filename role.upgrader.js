/**
 * 升级者配置生成器
 * source: 从指定矿中挖矿
 * target: 将其转移到指定的 roomController 中
 *
 * @param sourceId 要挖的矿 id
 */
//62653725c96f86c86c61b4fe
module.exports = sourceId => ({
    // 采集能量矿
    source: creep => {
        
        const source = Game.getObjectById(sourceId)
        if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(source)

        /*var source = creep.pos.findClosestByRange(FIND_STRUCTURES, {
          filter: (structure) => (
                  structure.structureType == STRUCTURE_STORAGE &&
                  structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
                )
        });
        if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(source)
        */
      
        // 自己身上的能量装满了，返回 true（切换至 target 阶段）
        return creep.store.getFreeCapacity() <= 0
    },
    // 升级控制器
    target: creep => {
        

      var targets = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
          if(targets) {
              if(creep.build(targets) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
              }
          } else {


            const controller = creep.room.controller
            if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) creep.moveTo(controller)
          }
       
       /* var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => (
                    (structure.structureType == STRUCTURE_EXTENSION ||
                    structure.structureType == STRUCTURE_SPAWN ||
                    structure.structureType == STRUCTURE_TOWER) &&
                    structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
                  )
          });
          var rtransfer = creep.transfer(targets, RESOURCE_ENERGY)
          if (rtransfer == ERR_NOT_IN_RANGE) creep.moveTo(targets)
          else if (rtransfer == ERR_INVALID_TARGET) {
            var storage = creep.pos.findClosestByRange(FIND_STRUCTURES, {
              filter: (structure) => (
                      structure.structureType == STRUCTURE_STORAGE  &&
                      structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
                    )
            });
            if (creep.transfer(storage, RESOURCE_ENERGY)) creep.moveTo(storage)
  
          }*/
          
        // 自己身上的能量没有了，返回 true（切换至 source 阶段）
        //return creep.store[RESOURCE_ENERGY] <= 5
        return (creep.store.getUsedCapacity() <= 5)
    }
})
