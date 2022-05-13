/**
 * 升级者配置生成器
 * source: 从指定矿中挖矿
 * target: 将其转移到指定的 roomController 中
 *
 * @param sourceId 要挖的矿 id
 *
 */
 module.exports = sourceId => ({
    // 采集能量矿
    source: creep => {
        const source = creep.room.terminal
        const targets = Game.getObjectById(sourceId)
        if (targets.store.getFreeCapacity(RESOURCE_ENERGY) > 300) {
          if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(source)
          
        }
        else if (targets.store.getFreeCapacity(RESOURCE_GHODIUM_HYDRIDE) > 300) {
          if (creep.withdraw(source, RESOURCE_GHODIUM_HYDRIDE) == ERR_NOT_IN_RANGE) creep.moveTo(source)
        }
        
        //else if (source.store.getUsedCapacity() > source.store.getCapacity()-50000) {
        else {      //fast upgrade mode only
          if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(source)
        }

        // 自己身上的能量装满了，返回 true（切换至 target 阶段）
        return creep.store.getFreeCapacity() <= 0
    },
    // 升级控制器
    target: creep => {
        const targets = Game.getObjectById(sourceId)

        if (targets.store.getFreeCapacity(RESOURCE_ENERGY) > 300) {
          if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(targets);
          return creep.store[RESOURCE_ENERGY] <= 0

        }
        else if (targets.store.getFreeCapacity(RESOURCE_GHODIUM_HYDRIDE) > 300) {
          if(creep.transfer(targets, RESOURCE_GHODIUM_HYDRIDE) == ERR_NOT_IN_RANGE) creep.moveTo(targets);
          return creep.store[RESOURCE_GHODIUM_HYDRIDE] <= 0
        }

        else {
          const storage = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
            filter: { structureType: STRUCTURE_STORAGE }
          });
          const terminal = creep.room.terminal
          if (terminal.store.getUsedCapacity(RESOURCE_ENERGY) > 10000) {
            if(creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(storage);
            return creep.store[RESOURCE_ENERGY] <= 0
          }
        }

        // 自己身上的能量没有了，返回 true（切换至 source 阶段）
    }
})