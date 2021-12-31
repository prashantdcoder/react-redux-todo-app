import { convertToLowerCase, getCurrentTimeStamp, StatusType } from "../utils/appUtils";

export class TodoModel {
  constructor(id, title) {
    this.id = id;
    this.title = convertToLowerCase(title);
    this.status = StatusType.ACTIVE;
    this.dateCreated = getCurrentTimeStamp();
  }
}
