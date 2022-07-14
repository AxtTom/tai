import { Collection, Document } from 'mongodb';

declare global {
    var users: Collection<Document>;
    var foodlist: Collection<Document>;
}

export {};