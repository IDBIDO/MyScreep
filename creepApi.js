global.creepApi = {
    /**
     * 新增 creep 配置项
     * @param configName 配置项名称
     * @param role 该 creep 的角色
     * @param args creep 的工作参数
     */
    add(configName, role, ...args) {
        if (!Memory.creepConfigs) Memory.creepConfigs = {}
        Memory.creepConfigs[configName] = { role, args }

        return `${configName} 配置项已更新：[角色] ${role} [工作参数] ${args}`
    },
    /**
     * 移除指定 creep 配置项
     * @param configName 要移除的配置项名称
     */
    remove(configName) {
        delete Memory.creepConfigs[configName]
        return `${configName} 配置项已移除`
    },
    /**
     * 获取 creep 配置项
     * @param configName 要获取的配置项名称
     * @returns 对应的配置项，若不存在则返回 undefined
     */
    get(configName) {
        if (!Memory.creepConfigs) return undefined
        return Memory.creepConfigs[configName]
    },

    /**
     * 获取 creep body
     * @param roleName 要获取的配置项名称
     * @param rcl room controller level
     * @returns 对应的配置项，若不存在则返回 undefinedf
     */
    get_body(roleName, rcl) {



        if (rcl >= 7)
        switch (roleName) {
          case 'transporter': return [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE]
          case 'upgrader': return  [WORK, WORK, WORK, WORK, WORK, WORK,WORK,WORK,WORK, WORK,CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE]
          case 'harvester': return [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY,CARRY, CARRY, CARRY, CARRY, MOVE]
          case 'repairer': return [WORK, WORK,WORK, WORK,WORK, CARRY, CARRY, CARRY,MOVE,MOVE, MOVE,MOVE]
          case 'builder': return [ WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE]
          case 'colonizer': return [ TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,WORK, MOVE, MOVE, MOVE, MOVE,MOVE, MOVE, MOVE, MOVE,MOVE, MOVE, MOVE, MOVE,WORK,WORK,MOVE,MOVE, MOVE, WORK,WORK, WORK,WORK, WORK, MOVE,MOVE, MOVE, MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE, MOVE,MOVE,MOVE, MOVE, MOVE,MOVE, MOVE]
          case 'miner': return [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]
          case 'lab': return [CARRY, CARRY, CARRY, CARRY, MOVE, MOVE]
          default : return [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,CARRY, CARRY, MOVE]
        }

        else if (rcl >= 6) {
            switch (roleName) {
                case 'transporter': return [CARRY, CARRY, CARRY, CARRY,CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,MOVE,MOVE, MOVE,MOVE, MOVE, MOVE]
                case 'upgrader': return [WORK, CARRY, CARRY, MOVE, MOVE, MOVE]
                case 'harvester': return [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE]
                case 'repairer': return [WORK, WORK, CARRY, CARRY,  CARRY, CARRY, MOVE, MOVE, MOVE]
                case 'builder': return [WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE]
                case 'miner': return [WORK, WORK, WORK, WORK, WORK, WORK,CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE,MOVE, MOVE, MOVE,MOVE, MOVE]
                default : return [CARRY, CARRY, CARRY,CARRY, CARRY, CARRY, CARRY, CARRY, MOVE]     //CENTER MANAGER

             }
        }

        else if (rcl >= 4){
            switch (roleName) {
                case 'transporter': return [CARRY, CARRY,CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, MOVE]
                case 'upgrader': return [WORK, WORK,WORK, CARRY, CARRY, CARRY, MOVE,MOVE, MOVE]
                case 'harvester': return [WORK, WORK, WORK, WORK, CARRY, MOVE]
                case 'repairer': return [WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
                case 'builder': return [WORK,WORK,WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE]
  
             }

        }
        else {
            switch (roleName) {
                case 'transporter': return [CARRY,CARRY,CARRY,CARRY,  MOVE, MOVE]
                case 'upgrader': return [WORK, WORK, CARRY, MOVE]
                case 'harvester': return [WORK, WORK, CARRY, MOVE]
                case 'repairer': return [WORK, CARRY, CARRY, MOVE, MOVE]
                case 'builder': return [WORK, CARRY, CARRY,CARRY, MOVE]
  
             }
        }

        
    }
}
