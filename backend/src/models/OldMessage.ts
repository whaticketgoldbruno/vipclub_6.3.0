import {
    Table,
    Column,
    CreatedAt,
    UpdatedAt,
    Model,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
    DataType,
    AutoIncrement
  } from "sequelize-typescript";
  
  import Message from "./Message";
  import Ticket from "./Ticket";
  
  @Table
  class OldMessage extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @Column(DataType.TEXT)
    body: string;
  
    @CreatedAt
    @Column(DataType.DATE(6))
    createdAt: Date;
  
    @UpdatedAt
    @Column(DataType.DATE(6))
    updatedAt: Date;
  
    @ForeignKey(() => Message)
    @Column
    messageId: string;
  
    @BelongsTo(() => Message)
    message: Message;
  
    @ForeignKey(() => Ticket)
    @Column(DataType.INTEGER)
    ticketId: number;
  
    @BelongsTo(() => Ticket)
    ticket: Ticket;
  }
  
  export default OldMessage;