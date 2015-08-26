//ID of device manufacturers
const USB_VENDOR_IDS = [
  0x18d1, //VENDOR_ID_GOOGLE
  0x8087, //VENDOR_ID_INTEL
  0x0bb4, //VENDOR_ID_HTC
  0x04e8, //VENDOR_ID_SAMSUNG
  0x22b8, //VENDOR_ID_MOTOROLA
  0x1004, //VENDOR_ID_LGE
  0x12D1, //VENDOR_ID_HUAWEI
  0x0502, //VENDOR_ID_ACER
  0x0FCE, //VENDOR_ID_SONY_ERICSSON
  0x0489, //VENDOR_ID_FOXCONN
  0x413c, //VENDOR_ID_DELL
  0x0955, //VENDOR_ID_NVIDIA
  0x091E, //VENDOR_ID_GARMIN_ASUS
  0x04dd, //VENDOR_ID_SHARP
  0x19D2, //VENDOR_ID_ZTE
  0x0482, //VENDOR_ID_KYOCERA
  0x10A9, //VENDOR_ID_PANTECH
  0x05c6, //VENDOR_ID_QUALCOMM
  0x2257, //VENDOR_ID_OTGV
  0x0409, //VENDOR_ID_NEC
  0x04DA, //VENDOR_ID_PMC
  0x0930, //VENDOR_ID_TOSHIBA
  0x1F53, //VENDOR_ID_SK_TELESYS
  0x2116, //VENDOR_ID_KT_TECH
  0x0b05, //VENDOR_ID_ASUS
  0x0471, //VENDOR_ID_PHILIPS
  0x0451, //VENDOR_ID_TI
  0x0F1C, //VENDOR_ID_FUNAI
  0x0414, //VENDOR_ID_GIGABYTE
  0x2420, //VENDOR_ID_IRIVER
  0x1219, //VENDOR_ID_COMPAL
  0x1BBB, //VENDOR_ID_T_AND_A
  0x2006, //VENDOR_ID_LENOVOMOBILE
  0x17EF, //VENDOR_ID_LENOVO
  0xE040, //VENDOR_ID_VIZIO
  0x24E3, //VENDOR_ID_K_TOUCH
  0x1D4D, //VENDOR_ID_PEGATRON
  0x0E79, //VENDOR_ID_ARCHOS
  0x1662, //VENDOR_ID_POSITIVO
  0x04C5, //VENDOR_ID_FUJITSU
  0x25E3, //VENDOR_ID_LUMIGON
  0x0408, //VENDOR_ID_QUANTA
  0x2314, //VENDOR_ID_INQ_MOBILE
  0x054C, //VENDOR_ID_SONY
  0x1949, //VENDOR_ID_LAB126
  0x1EBF, //VENDOR_ID_YULONG_COOLPAD
  0x2237, //VENDOR_ID_KOBO
  0x2340  //VENDOR_ID_TELEEPOCH
];

const ADB_VALUES  = {
  ADB_CLASS:          0xff
, ADB_SUBCLASS:       0x42
, ADB_PROTOCOL:       0x01
, ADB_HEADER_LENGTH:  24
};

const CONNECT_VALUES = {
  CONNECT_VERSION: 0x01000000
, CONNECT_MAXDATA: 4096
, CONNECT_PAYLOAD: "host::"
};

const ADB_COMMANDS = {
  CMD_CNXN: 0x4e584e43
, CMD_AUTH: 0x48545541
, CMD_OPEN: 0x4e45504f
, CMD_OKAY: 0x59414b4f
, CMD_WRTE: 0x45545257
, CMD_SYNC: 0x434e5953
, CMD_CLSE: 0x45534c43
};

const ADB_SUBCOMMANDS = {
  CMD_STAT: 0x54415453
, CMD_SEND: 0x444E4553
, CMD_RECV: 0x56434552
, CMD_QUIT: 0x56434552
, CMD_FAIL: 0x4c494146
, CMD_DONE: 0x454e4f44
, CMD_DATA: 0x41544144
};

//TODO: detect these or command line arguement?
const ADB_KEY = {
  PUBLIC_KEY:  ".android/adbkey.pub"
, PRIVATE_KEY: ".android/adbkey"
};

const CONNECTION_TYPES = {
  USB: 0
, TCP: 1
};

const LIBUSB_VALUES = {
  LIBUSB_ENDPOINT_IN: 128
, LIBUSB_ENDPOINT_OUT: 0
, LIBUSB_TRANSFER_TYPE_BULK: 2
};

export { USB_VENDOR_IDS, ADB_VALUES, CONNECT_VALUES, ADB_COMMANDS
       , ADB_SUBCOMMANDS, ADB_KEY, CONNECTION_TYPES, LIBUSB_VALUES };