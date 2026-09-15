import {sqliteTable,text,primaryKey} from 'drizzle-orm/sqlite-core';
export const records=sqliteTable('records',{
 owner:text('owner').notNull(),kind:text('kind').notNull(),id:text('id').notNull(),payload:text('payload').notNull(),
},t=>[primaryKey({columns:[t.owner,t.kind,t.id]})]);
