import {
  convertToLowerCase,
  getCurrentTimeStamp,
  StatusType,
} from "../utils/appUtils";

export class TodoModel {
  constructor(id, payload) {
    this.id = id;
    this.content = payload.content;
    this.title = convertToLowerCase(payload.title);
    this.status = StatusType.ACTIVE;
    this.dateCreated = getCurrentTimeStamp();
  }
}
