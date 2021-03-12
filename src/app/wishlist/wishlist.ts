import { IEventLocationAddr } from "./EventLocationAddr";

export interface IWishlist{
    eventId: string,
    eventType: string,
    eventTitle: string,
    eventWishlists: string,
    eventForPerson: string,
    eventLocationAddress: IEventLocationAddr,
    eventLocationMapLink: string
}