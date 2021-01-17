import React, { Component } from "react";
import Calendar from "react-calendar";
import TileContent from "./TileContent";
import "react-calendar/dist/Calendar.css";

interface IContentData {
  activeStartDate?: any;
  date: any;
  view: any;
}

const CONTENT_DATA: IContentData = {
  activeStartDate: new Date(Date.now()),
  date: new Date(Date.now()),
  view: "month",
};

class CalendarCom extends Component {
  handleClickDay = (e: any) => {
    console.log(e);
  };

  contentDate = ({ activeStartDate, date, view }: any) => {
    console.log("activeStartDate", activeStartDate);
    console.log("view", view);
    console.log("date", date.getDate());
    console.log("date.now", Date.now());
    // return <TileContent/>
    
    return date.getDate() === new Date(Date.now()).getDate() ? <TileContent /> : null;
  };

  render() {
    return (
      <div>
        <Calendar
          onChange={this.handleClickDay}
          value={new Date(Date.now())}
          tileContent={this.contentDate}
          view={'month'}
        />
      </div>
    );
  }
}

export default CalendarCom;
