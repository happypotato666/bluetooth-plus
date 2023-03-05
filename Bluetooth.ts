// Define the EV3BT namespace
namespace EV3BT {

    // Initialize the Bluetooth connection
    export function init() {
        bluetooth.startUartService();
    }

    // Send a number over Bluetooth to another EV3
    export function sendNumber(value: number) {
        bluetooth.uartWriteNumber(value);
    }

    // Receive a number over Bluetooth from another EV3
    export function onBluetoothDataReceived(handler: (value: number) => void) {
        bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), handler);
    }

}