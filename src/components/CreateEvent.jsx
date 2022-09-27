import React, { Component } from "react";
import { Link } from "react-router-dom";
import Party from "../assets/party.jpeg";

var data = [
  {
    eventName: "",
    hostName: "",
    startDate: "",
    endDate: "",
    eventAddress: "",
    eventDescription: "",
  },
];

class CreateEvent extends Component {
  eventDetails = (event) => {
    var key = event.target.id;
    data[0][key] = event.target.value;
    console.log(data[0]);
  };
  render() {
    return (
      <div id="create" className="w-full bg-[#F6F2FF]">
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
          <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
            Event
          </p>
          <h2 className="font-semibold text-slate-700 mt-4">Let's Connect</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="col-span-3 lg:col-span-2 my-2 bg-white w-full h-1/2 shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full rounded-xl">
                <div>
                  <img
                    className="rounded hover:scale-105 ease-in duration-300"
                    src={Party}
                    alt="\"
                  />
                </div>
                <div>
                  <h2 className="font-light text-slate-700 mt-4">
                    Feeling Adventurous Today?
                  </h2>
                  <p className="font-light text-slate-700 mt-4">
                    Let's create an event and get together for some fun!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form>
                  <div className="grid md:grid-col-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Event Name
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        onChange={this.eventDetails}
                        id="eventName"
                        value={data.eventName}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Host Name
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        onChange={this.eventDetails}
                        id="hostName"
                        value={data.hostName}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Start Date</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      onChange={this.eventDetails}
                      id="startDate"
                      value={data.startDate}
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">End Date</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      onChange={this.eventDetails}
                      id="endDate"
                      value={data.endDate}
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Address</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      onChange={this.eventDetails}
                      id="eventAddress"
                      value={data.eventAddress}
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">
                      Event Description
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="10"
                      onChange={this.eventDetails}
                      id="eventDescription"
                      value={data.eventDescription}
                    />
                  </div>
                  <Link to={{ pathname: "/event", state: data }}>
                    <button className="w-full p-4 text-gray-100 mt-4">
                      Next
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
