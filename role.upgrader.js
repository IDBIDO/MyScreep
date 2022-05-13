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
        
        ////creep.moveTo(Game.flags.FlagBuilders, {visualizePathStyle: {stroke: '#ffffff'}});
        const lab = Game.getObjectById('6264552220d98ea4573bac78');
        if(creep.room.name == 'W31N7' && Game.rooms['W31N7'].controller.level == 7) {
          var partsBoost = creep.body.filter((part) => {
            return part.boost == RESOURCE_GHODIUM_HYDRIDE
          }).length

          const terminal = creep.room.terminal
          
          if (terminal.store.getUsedCapacity(RESOURCE_GHODIUM_HYDRIDE) > 0 && partsBoost < 5) {
            if (lab.boostCreep(creep) == ERR_NOT_IN_RANGE) creep.moveTo(lab)
            console.log('Room "'+creep.room.name+'" has '+partsBoost+ ' boost' );

          }

          else {
            
              const source = Game.getObjectById(sourceId)
              if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(source)
            
          }          



        }

        else {
          
          const source = Game.getObjectById(sourceId)
          if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(source)
            
        }
        

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
        
      /*
      var targets = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
          if(targets) {
              if(creep.build(targets) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
              }
          } else {
      */
      
        if (creep.room.controller.level != 8) {
            const controller = creep.room.controller
            if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) creep.moveTo(controller)
         // }
        }
       
        return (creep.store.getUsedCapacity() <= 0)
    }
})
