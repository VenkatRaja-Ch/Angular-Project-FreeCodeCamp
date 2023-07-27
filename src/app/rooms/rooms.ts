export interface Rooms {
    availableRooms : number;
    bookedRooms : number;
    totalRooms : number;
}

export interface RoomList {
    roomNumber : number;
    roomType : string;
    roomAmenities : string;
    roomPhoto : string;
    roomPrice : number;
    roomCheckInTime : Date;
    roomCheckOutTime : Date;
}