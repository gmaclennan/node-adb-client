// transpile:main
import ADB from '../../adb';
import { CONNECTION_TYPES } from '../constants';
import { asyncify } from 'asyncbox';
import path from 'path';

async function start () {
  let availableDevices = await ADB.findAdbDevices();
  if (availableDevices.length > 0) {
    // just select the first device
    let device = new ADB(CONNECTION_TYPES.USB, availableDevices[0]);
    await device.connect();
    console.log("connected");
    let fileSource = path.resolve(__dirname
                              , ".."
                              , ".."
                              , ".."
                              , "test"
                              , "fixtures"
                              , "largeFile");
    let command = {
      type:        "push"
    , source:      fileSource
    , destination: "sdcard/"
    };
    await device.runCommand(command);
    await device.closeConnection();
    console.log("closed");
  }
}

console.log("Starting!");
asyncify(start);
