import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "chartApp";
  isDisplay = false;
  onClick() {
    this.isDisplay = !this.isDisplay;
  }
}
