export interface Rooms {
    availableRooms : number;
    bookedRooms : number;
    totalRooms : number;
}

export interface RoomList {
    number : number;
    type : string;
    amenities : string;
    photo : string;
    price : number;
    checkInTime : Date;
    checkOutTime : Date;
}