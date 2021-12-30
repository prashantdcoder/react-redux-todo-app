import { getCurrentTimeStamp } from "../utils/appUtils";

export class TodoModel {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.status = "Active";
    this.dateCreated = getCurrentTimeStamp();
  }
}
