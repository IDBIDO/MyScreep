/**
 * 升级者配置生成器
 * source: 从指定矿中挖矿
 * target: 将其转移到指定的 roomController 中
 *
 * @param sourceId //link
 */
 module.exports = sourceId => ({
    // 采集能量矿
    source: creep => {
        const creepRoomName = creep.room.name
        const creepName = creep.name
        const centerLink = Game.getObjectById(Memory.rooms[creepRoomName].centerLink)
        const terminal = creep.room.terminal
        const storage = creep.room.storage
        const resource = RESOURCE_ENERGY 
        const factory = Game.getObjectById('627c8ba45d376ac7bbdb1cc0')

        if (creep.room.controller.level != 8) {
            
            if (Memory.request['W31N7']  == RESOURCE_HYDROGEN && storage.store.getUsedCapacity(RESOURCE_HYDROGEN) > 500) {
                if (creep.withdraw(storage, RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE) creep.moveTo(storage)
                Memory.creeps[creepName].send = RESOURCE_HYDROGEN
            }

            else if( storage.store.getUsedCapacity(RESOURCE_ENERGY) > 200000) {
                if (creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(storage)
                Memory.creeps[creepName].send = 'null'

            }
            return creep.store.getFreeCapacity() <= 0
        }


        else {
            //console.log('Room');
            const toSell = Memory.rooms[creepRoomName].sell
            
            if (Memory.request[creepRoomName] != 'null' && terminal.store.getUsedCapacity(Memory.request[creepRoomName]) >= 400) {
                
                if (creep.withdraw(terminal, Memory.request[creepRoomName]) == ERR_NOT_IN_RANGE) creep.moveTo(terminal)
                Memory.creeps[creepName].receive = true
                
            }

            


            else if (centerLink.store.getUsedCapacity(resource) >= 400) {
                Memory.creeps[creepName].receive = false

                if (creep.withdraw(centerLink, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(centerLink)
                return true
            }

            else if (terminal.store.getUsedCapacity(RESOURCE_LEMERGIUM) >= 400) {      //buy
                if (creep.withdraw(terminal, RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE) creep.moveTo(terminal)

            }

            else if (toSell != 'null' && storage.store.getUsedCapacity(toSell) > 20000) { 
                if (creep.withdraw(storage, toSell) == ERR_NOT_IN_RANGE) creep.moveTo(storage)
            }
            else if (storage.store.getUsedCapacity(RESOURCE_OXYGEN) > 80000 && factory.store.getFreeCapacity() > 10000) {
                if (creep.withdraw(storage, RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE) creep.moveTo(storage)
            }

            else {
                if (terminal.store.getUsedCapacity(RESOURCE_ENERGY) > 60000)
                    if (creep.withdraw(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(terminal)
                    Memory.creeps[creepName].receive = false
                return true
            }
            return creep.store.getFreeCapacity() <= 0
            
        }
        /*
        const creepRoomName = creep.room.name
        if (Memory.rooms[creepRoomName].send) {
            //lock type of RESOURCE

            if (Memory.rooms[creepRoomName].sendConfig.resource == 'RESOURCE_ENERGY') {
                //get resource from center link
                const centerLink = Game.getObjectById(Memory.rooms[creepRoomName].centerLink)
                if (creep.withdraw(centerLink, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(centerLink)
            }


        }
        */
    },

    // 升级控制器
    target: creep => {

        const creepRoomName = creep.room.name
        const centerLink = Game.getObjectById(Memory.rooms[creepRoomName].centerLink)
        const storage = creep.room.storage
        const creepName = creep.name
        const terminal = creep.room.terminal

        const toSell = Memory.rooms[creepRoomName].sell

        //transfer to centerLink. centerLink will transfer to upgradeLink

        if (creep.room.controller.level != 8) {
            //if(creep.transfer(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(terminal)

        
        if (centerLink.store.getUsedCapacity(RESOURCE_ENERGY) < 750 && storage.store.getUsedCapacity(RESOURCE_ENERGY) > 20000) {
            if(creep.transfer(centerLink, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(centerLink)
        }
        
        else if (creep.store.getUsedCapacity(RESOURCE_HYDROGEN) > 0) {
            if(creep.transfer(terminal, RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE) creep.moveTo(terminal)
            if (terminal.store.getUsedCapacity(Memory.creeps[creepName].send) >= 20000) {
                terminal.send(Memory.creeps[creepName].send, 20000, 'W31N7', 'W31N6: SEND 20000H TO W31N7')
                console.log('W31N6: SEND 20000H TO W31N7')
            }
        }

        else if(Memory.rooms[creepRoomName].send) {
            const sendConfig = Memory.rooms[creepRoomName].sendConfig;
            if (sendConfig.resource == 'RESOURCE_ENERGY') {
                //get resource from center link
                if (creep.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
                    const terminal = creep.room.terminal
                    if(creep.transfer(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(terminal)

                    //terminal send
                    var amountEnergy = terminal.store.getUsedCapacity([RESOURCE_ENERGY])
                    if (amountEnergy > 30000) {
                        terminal.send(RESOURCE_ENERGY, 20000, sendConfig.targetRoom,'ENERGY FROM W37N6');
                    }

                }   
            }
        }
    }
        else {
            
            if ( creep.store.getUsedCapacity(RESOURCE_HYDROGEN)) {
                
                    if (creep.transfer(storage, RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE) creep.moveTo(terminal)
                    Memory.creeps[creepName].receive = false

                
            }

            else if (creep.store.getUsedCapacity(toSell)) {
                if (creep.transfer(terminal, toSell) == ERR_NOT_IN_RANGE) creep.moveTo(terminal)

            }

            else if (creep.store.getUsedCapacity(RESOURCE_LEMERGIUM)) {
                if (creep.transfer(storage, RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE) creep.moveTo(terminal)

            }
            else if (creep.store.getUsedCapacity(RESOURCE_OXYGEN)) {
                const factory = Game.getObjectById('627c8ba45d376ac7bbdb1cc0')

                if (creep.transfer(factory, RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE) creep.moveTo(factory)
            }

            else {
                if(creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(storage)
                
            }
        }
        /*
        if (Memory.rooms[creepRoomName].send) {
            //lock type of RESOURCE

            if (Memory.rooms[creepRoomName].sendConfig.resource == 'RESOURCE_ENERGY') {
                //get resource from center link
                if (storage.store.getUsedCapacity(RESOURCE_ENERGY) < 200000) {
                    if(creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(storage)
                }
                else {
                    const terminal = creep.room.terminal

                    if(creep.transfer(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) creep.moveTo(terminal)
                }
            }
        }
        */
   
        return creep.store.getUsedCapacity() <= 0

    }
})
