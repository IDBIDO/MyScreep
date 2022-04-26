/**
 * 升级者配置生成器
 * source: 从指定矿中挖矿
 * target: 将其转移到指定的 roomController 中
 *
 * @param sourceId 要挖的矿 id
 */
 module.exports = sourceId => ({
    // 采集能量矿

    
    // 获取能量的逻辑
    // ...
    

    //if (creepp.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creepp.moveTo(source)



    source: creep => {
        const source = Game.getObjectById(sourceId)
        
        //if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
        //    creep.moveTo(source)
        //    return false
        //}
        if (creep.harvest(source) == ERR_NOT_IN_RANGE) creep.moveTo(source, {visualizePathStyle: {stroke: '#aaaaaa'}})

        
        // 自己身上的能量装满了，返回 true（切换至 target 阶段）

        //const container = creep.room.lookForAt(LOOK_STRUCTURES, creepPos);
        //return creep.store.getFreeCapacity() <= 0
        //return false

        //only one structure (container) in the position of harvester
        return creep.store.getFreeCapacity() <= 0
    },

    // 升级控制器
    target: creep => {
        //const controller = creep.room.controller
        //if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) creep.moveTo(controller)

        // 自己身上的能量没有了，返回 true（切换至 source 阶段）
        //return true
          // 建造 spawn

        //var targets = '625ebc4aa3d173e7bd5aaec5'            //id of spawn construction site
        //if(targets) {
        //    if(creep.build(targets) == ERR_NOT_IN_RANGE) {
        //        creep.moveTo(targets)
        //    }
        //}

        //var controller = creep.room.controller
        //if (controller.ticksToDowngrade < 10000) {
        //    if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) creep.moveTo(controller, {visualizePathStyle: {stroke: '#ffffff'}})
        //}
        //else {
            var targets = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if(targets) {
                if(creep.build(targets) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else {
                const controller = creep.room.controller
                if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) creep.moveTo(controller)
            }
        //}
        
        //var creepPos = creep.pos
        //const container = creep.room.lookForAt(LOOK_STRUCTURES, creepPos);
        return creep.store[RESOURCE_ENERGY] <= 0
        //container[0].store.getFreeCapacity() > 20    //free container
    }
})
