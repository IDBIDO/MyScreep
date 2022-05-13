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
        
        if (creep.ticksToLive < 50) { 
            return true
        }

        if (creep.harvest(source) == ERR_NOT_IN_RANGE) 
            creep.moveTo(source);
      
        
        
        // 自己身上的能量装满了，返回 true（切换至 target 阶段）

        //const container = creep.room.lookForAt(LOOK_STRUCTURES, creepPos);
        return creep.store.getFreeCapacity() <= 0
        

        //only one structure (container) in the position of harvester
        //return false //container.store.getFreeCapacity() == 0    //full container
    },

    // 升级控制器
    target: creep => {
        //const controller = creep.room.controller
        //if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) creep.moveTo(controller)

        // 自己身上的能量没有了，返回 true（切换至 source 阶段）
        //return true
        var storage = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => (
                    structure.structureType == STRUCTURE_STORAGE
                  )
          });

        if (creep.transfer(storage, Object.keys(creep.store)[0]) == ERR_NOT_IN_RANGE) creep.moveTo(storage)


        //var creepPos = creep.pos
        //const container = creep.room.lookForAt(LOOK_STRUCTURES, creepPos);
        return creep.store.getUsedCapacity() == 0//container[0].store.getFreeCapacity() > 20    //free container
    }
})
