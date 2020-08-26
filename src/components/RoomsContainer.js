import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../Context';
import Loading from './Loading';

const RoomsContainer = ({context}) =>{
    const {loading, rooms, sortedRooms} = context;

    if(loading){
        return <Loading/>;
    }
    
    return (
        <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    );
} 

export default withRoomConsumer(RoomsContainer);





















// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from '../Context';
// import Loading from './Loading';

// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, rooms, sortedRooms} = value;
//                     if(loading){
//                         return <Loading/>;
//                     }
//                     return (
//                         <div>
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList sortedRooms={sortedRooms}/>
//                         </div>
//                     );
//                 }
//             }
//         </RoomConsumer>
        
//     );
// };

// export default RoomsContainer;