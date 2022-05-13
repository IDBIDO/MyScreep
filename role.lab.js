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
        const creepName = creep.name
        const creepRoomName = creep.room.name
        const storage = creep.room.storage

        const sourceLab1 = Game.getObjectById(Memory.rooms[creepRoomName].lab['sourceLab1'])
        const sourceLab2 = Game.getObjectById(Memory.rooms[creepRoomName].lab['sourceLab2'])
        const mineralSource1 = Memory.rooms[creepRoomName].lab['mineralSource1']
        const mineralSource2 = Memory.rooms[creepRoomName].lab['mineralSource2']
        
        const reactionResult = REACTIONS[mineralSource1][mineralSource2]

        if(storage.store.getUsedCapacity(mineralSource2) < 10000) Memory.request[creepRoomName] = mineralSource2
        else Memory.request[creepRoomName] = 'null'

        //if (creep.store.getUsedCapacity() <= 0 && creep.ticksToLive < 50) creep.suicide();
        if (creep.ticksToLive < 50) {
          if (creep.store.getUsedCapacity() <= 0) creep.suicide();
          else return true
        }

        if (Memory.rooms[creepRoomName].lab['changeSource1'] != 'null') {
          Memory.creeps[creepName].transferToSource = -1
          var allEmpty = true
            for (var reactionLabName in Memory.rooms['W31N7'].lab.reactionLabs) {
              const lab = Game.getObjectById(Memory.rooms['W31N7'].lab.reactionLabs[reactionLabName])
              if (lab.store.getUsedCapacity(reactionResult) > 0){
                if (creep.withdraw(lab, reactionResult) == ERR_NOT_IN_RANGE) creep.moveTo(lab)
                else return creep.store.getFreeCapacity() <= 0
                allEmpty = false
              }
              
            }
            if (sourceLab1.store.getUsedCapacity(reactionResult) == 0 && allEmpty) {


              creep.drop(mineralSource1)
              Memory.rooms[creepRoomName].lab['changeSource1'] = 'null'
              Memory.rooms[creepRoomName].lab['mineralSource1'] = RESOURCE_LEMERGIUM
            }

        }
        else {
          //console.log(sourceLab1.store.getFreeCapacity(mineralSource1))
          if (sourceLab1.store.getFreeCapacity(mineralSource1) >= 1000 ) {

            if (creep.withdraw(storage, mineralSource1) == ERR_NOT_IN_RANGE) creep.moveTo(storage)
            Memory.creeps[creepName].transferToSource = 1
          }
          else if (sourceLab2.store.getFreeCapacity(mineralSource2) >= 1000) {
            if (creep.withdraw(storage, mineralSource2) == ERR_NOT_IN_RANGE) creep.moveTo(storage)
            Memory.creeps[creepName].transferToSource = 2
            
          }
          else {
            Memory.creeps[creepName].transferToSource = -1
            for (var reactionLabName in Memory.rooms['W31N7'].lab.reactionLabs) {
              const lab = Game.getObjectById(Memory.rooms['W31N7'].lab.reactionLabs[reactionLabName])
              if (lab.store.getUsedCapacity(reactionResult) > 300){
                if (creep.withdraw(lab, reactionResult) == ERR_NOT_IN_RANGE) creep.moveTo(lab)
                else return true
              }
              
            }
          }
        }
        // 自己身上的能量装满了，返回 true（切换至 target 阶段）
        return creep.store.getFreeCapacity() <= 0
    },
    // 升级控制器
    target: creep => {
       const creepRoomName = creep.room.name
       const storage = creep.room.storage
       const creepName = creep.name
       const mineralSource1 = Memory.rooms[creepRoomName].lab['mineralSource1']
       const mineralSource2 = Memory.rooms[creepRoomName].lab['mineralSource2']
       const reactionResult = REACTIONS[mineralSource1][mineralSource2]


       if (creep.store.getUsedCapacity(mineralSource1) > 0) {
                //if(creep.transfer(storage, RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE) creep.moveTo(storage);

        const sourceLab1 = Game.getObjectById(Memory.rooms[creepRoomName].lab['sourceLab1'])

        if(creep.transfer(sourceLab1, mineralSource1) == ERR_NOT_IN_RANGE) creep.moveTo(sourceLab1);
        return creep.store.getUsedCapacity() <= 0
       }

       else if (creep.store.getUsedCapacity(mineralSource2) > 0) {
       const sourceLab2 = Game.getObjectById(Memory.rooms[creepRoomName].lab['sourceLab2'])

        if(creep.transfer(sourceLab2, mineralSource2) == ERR_NOT_IN_RANGE) creep.moveTo(sourceLab2);
        return creep.store.getUsedCapacity() <= 0
       }
       else {
         
        if(creep.transfer(storage, reactionResult) == ERR_NOT_IN_RANGE) creep.moveTo(storage);

       }

       
       return creep.store.getUsedCapacity() <= 0
        // 自己身上的能量没有了，返回 true（切换至 source 阶段）
    }
})