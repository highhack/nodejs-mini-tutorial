import { EventEmitter } from "events";

const emitter = new EventEmitter();
emitter.on("test", (data) => {
  console.log("data", data);
});

emitter.emit("test", { a: "hello" });
emitter.emit("test", { b: "hello" });

setTimeout(() => {
  emitter.emit("test", { c: "hello" }, 1000);
  emitter.emit("test", { d: "hello" }, 3000);
});

class MyEmitter extends EventEmitter {
  subscribe = (eventName, cb) => {
    console.log("subscribing.....");
    this.on(eventName, cb);
  };
  dispatch = (eventName, data) => {
    console.log("dispatching.....");
    this.emit(eventName, data);
  };
}

const dis = new MyEmitter();

dis.subscribe("test2", (data) => {
  console.log("data", data);
});

dis.dispatch("test2", { e: "hello" });
