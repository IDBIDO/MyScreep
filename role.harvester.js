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
        const container = Game.getObjectById(sourceId)
        
        const creepPos = creep.pos
        //if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
        //    creep.moveTo(source)
        //    return false
        //}
        if (!creep.pos.isEqualTo(container)) {
            creep.moveTo(container)
        } else {
            if(container.hits < container.hitsMax - 1000) creep.repair(container)
            var source = creep.pos.findClosestByRange(FIND_SOURCES)
            creep.harvest(source)
        }
        
        // 自己身上的能量装满了，返回 true（切换至 target 阶段）
        const roomName = creep.room.name;
        //console.log(roomName);
        
        if (Memory.rooms[roomName]) {
            const sourceLink1 = Game.getObjectById(Memory.rooms[roomName].sourceLink1)
            const sourceLink2 = Game.getObjectById(Memory.rooms[roomName].sourceLink2)
            //const container = creep.room.lookForAt(LOOK_STRUCTURES, creepPos);
            if (sourceLink1) {
                if(creep.pos.isNearTo(sourceLink1) || creep.pos.isNearTo(sourceLink2)) {
                    return creep.store.getFreeCapacity() <= 0
                }
            }
        }
        return false
        //return false

        //only one structure (container) in the position of harvester
        //return false //container.store.getFreeCapacity() == 0    //full container
    },

    // 升级控制器
    target: creep => {
        //const controller = creep.room.controller
        //if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) creep.moveTo(controller)

        // 自己身上的能量没有了，返回 true（切换至 source 阶段）
        //return true
        const roomName = creep.room.name;
        if (Memory.rooms[roomName]) {
            
            const sourceLink1 = Game.getObjectById(Memory.rooms[roomName].sourceLink1)
            const sourceLink2 = Game.getObjectById(Memory.rooms[roomName].sourceLink2)
            if(creep.pos.isNearTo(sourceLink1)) {
                creep.transfer(sourceLink1, RESOURCE_ENERGY);
                return creep.store[RESOURCE_ENERGY] <= 0

            }
            if(creep.pos.isNearTo(sourceLink2)) {
                creep.transfer(sourceLink2, RESOURCE_ENERGY);
                return creep.store[RESOURCE_ENERGY] <= 0

            }
        }
        
        //var creepPos = creep.pos
        //const container = creep.room.lookForAt(LOOK_STRUCTURES, creepPos);
        return true//container[0].store.getFreeCapacity() > 20    //free container
    }
})
