const vials = [
    { name: "10 Dram Vials",
    barcode: "10 Dram Vials.png",
    itemNumber: "09670503346",
    McKesson: true,
    OrderInsite: true},
    { name: "13 Dram Vials",
    barcode: "13 Dram vials.png",
    itemNumber: "09670570130",
    McKesson: true,
    OrderInsite: true},
    { name: "30 Dram Vials",
    barcode: "30 Dram vials.png",
    itemNumber: "09670570280",
    McKesson: true,
    OrderInsite: true},
    { name: "40 Dram Vials",
    barcode: "40 Dram vials.png",
    itemNumber: "09670570300",
    McKesson: true,
    OrderInsite: true},
    { name: "60 Dram Vials",
    barcode: "60 Dram vials.png",
    itemNumber: "09670570330",
    McKesson: true,
    OrderInsite: true},
    { name: "Small Caps",
    barcode: "Small Caps.png",
    itemNumber: "09670561091",
    McKesson: true,
    OrderInsite: true},
    { name: "Large Caps",
    barcode: "Large Caps.png",
    itemNumber: "09670561093",
    McKesson: true,
    OrderInsite: true
    },
    { name: "2 OZ Liquid Bottles",
    barcode: "2 OZ Liquid Bottles.png",
    itemNumber: "07061017702",
    McKesson: true,
    OrderInsite: true
    },
    { name: "4 OZ Liquid Bottles",
    barcode: "4 OZ Liquid Bottles.png",
    itemNumber: "07061017704",
    McKesson: true,
    OrderInsite: true
    },
    { name: "6 OZ Liquid Bottles",
    barcode: "6 OZ Liquid Bottles.png",
    itemNumber: "07061017706",
    McKesson: true,
    OrderInsite: true
    },
    { name: "8 OZ Liquid Bottles",
    barcode: "8 OZ Liquid Bottles .png",
    itemNumber: "07061017708",
    McKesson: true,
    OrderInsite: true
    },
    { name: "12 OZ Liquid Bottles",
    barcode: "12 OZ Liquid Bottles .png",
    itemNumber: "07061017712",
    McKesson: true,
    OrderInsite: true
    },
    { name: "16 OZ Liquid Bottles",
    barcode: "16 OZ Liquid Bottles .png",
    itemNumber: "07061017716",
    McKesson: true,
    OrderInsite: true
    },
    { name: "STR Paper",
    barcode: "STR Ppaer.png",
    itemNumber: "85114003100",
    McKesson: true,
    OrderInsite: true
    },
    { name: "RX Drop-Off Barcodes",
    barcode: "RX Drop-Off Barcodes.png",
    itemNumber: "3959459",
    McKesson: true,
    OrderInsite: true
    },
    { name: "Staples",
    barcode: "Staples.png",
    itemNumber: "02571552081",
    McKesson: true,
    OrderInsite: true
    },
    { name: "Labels For RX Vials",
    barcode: "Labels For RX Vials.png",
    itemNumber: "3959517",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "Adapter Caps For 1 OZ FlavorRX Bottles",
    barcode: "Adapter Caps For 1 OZ FlavorRX Bottles.png",
    itemNumber: "17191005102",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "Adapter Caps For 4 OZ FlavorRX Bottles",
    barcode: "Adapter Caps For 4 OZ FlavorRX Bottles.png",
    itemNumber: "17191005103",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "Monoject 1 ml oral syringes used for flavoRX",
    barcode: "Monoject 1 ml oral syringes used for flavoRX.png",
    itemNumber: "08881901014",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "EasyPoint Needles 25g x 5/8 used for immunizations",
    barcode: "EasyPoint Needles 25g x 5/8 used for immunizations.png",
    itemNumber: "08421082091",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "EasyPoint Needles 25g x 1 used for immunizations",
    barcode: "EasyPoint Needles 25g x 1 used for immunizations.png",
    itemNumber: "08421082011",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "Nitrile Small Exam Gloves mckesson brand",
    barcode: "Nitrile Small Exam Gloves mckesson brand.png",
    itemNumber: "61247912113",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "Nitrile Small Exam Gloves CareMates Brand",
    barcode: "Nitrile Small Exam Gloves CareMates Brand.png",
    itemNumber: "71591205611",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "Nitrile Medium Exam Gloves CareMates Brand",
    barcode: "Nitrile Medium Exam Gloves CareMates Brand.png",
    itemNumber: "71591210612",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "Nitrile Large Exam Gloves CareMates Brand",
    barcode: "Nitrile Large Exam Gloves CareMates Brand.png",
    itemNumber: "71591210613",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "Nitrile XLarge Exam Gloves CareMates Brand",
    barcode: "Nitrile XLarge Exam Gloves CareMates Brand.png",
    itemNumber: "71591210614",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "Nebulizers",
    barcode: "Nebulizers.png",
    itemNumber: "88530400178",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "Nebulizer Tubing",
    barcode: "Nebulizer Tubing.png",
    itemNumber: "08373000800",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "Nebulizer Adult Mask",
    barcode: "Nebulizer Adult Mask.png",
    itemNumber: "83490044079",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "Nebulizer Pediatric Mask",
    barcode: "Nebulizer Pediatric Mask.png",
    itemNumber: "73796009921",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "DisposeRX",
    barcode: "DisposeRX.png",
    itemNumber: "68584000045",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Bitterness Suppressor 4 OZ",
    barcode: ".png",
    itemNumber: "86067000075",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Strawberry 4 OZ",
    barcode: ".png",
    itemNumber: "78573000310",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Banana 4 OZ",
    barcode: ".png",
    itemNumber: "86067000013",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Grape 4 OZ",
    barcode: ".png",
    itemNumber: "86067000044",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Orange 4 OZ",
    barcode: ".png",
    itemNumber: "78573000327",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Sweetening Enhancer 4 OZ",
    barcode: ".png",
    itemNumber: "78573001621",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Mango 4 OZ",
    barcode: ".png",
    itemNumber: "87857300081",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Apple 4 OZ",
    barcode: ".png",
    itemNumber: "86067000006",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Cherry 4 OZ",
    barcode: ".png",
    itemNumber: "86067000037",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Watermelon 4 OZ",
    barcode: ".png",
    itemNumber: "86067000068",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Rasberry 4 OZ",
    barcode: ".png",
    itemNumber: "86067000051",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Bubblegum 4 OZ",
    barcode: ".png",
    itemNumber: "86067000020",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Chocolate 4 OZ",
    barcode: ".png",
    itemNumber: "86067000051",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "FlavoRX Lemon Oil 4 OZ",
    barcode: ".png",
    itemNumber: "86067000099",
    McKesson: true,
    OrderInsite: true,
    },
    { name: "ReliOn Novolin N Vial",
    barcode: "ReliOn Novolin N Vial.png",
    itemNumber: "00169183402",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "ReliOn Novolin R Vial",
    barcode: "ReliOn Novolin R Vial.png",
    itemNumber: "00169183302",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "ReliOn Novolin 70/30 Vial",
    barcode: "ReliOn Novolin 70/30 Vial.png",
    itemNumber: "00169183702",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "ReliOn Novolin N Flexpen",
    barcode: "ReliOn Novolin N Flexpen.png",
    itemNumber: "00169300425",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "ReliOn Novolin R Flexpen",
    barcode: "ReliOn Novolin R Flexpen.png",
    itemNumber: "00169300325",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "ReliOn Novolin 70/30 Flexpen",
    barcode: "ReliOn Novolin 70/30 Flexpen.png",
    itemNumber: "00169300725",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "ReliOn Insulin Syringes 6mm 1 mL(Green Stripes)",
    barcode: "ReliOn Insulin Syringes 6mm 1 mL.png",
    itemNumber: "81131013834",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "ReliOn Insulin Syringes 6mm 1/2 mL(Blue stripes)",
    barcode: "ReliOn Insulin Syringes 6mm 1/2 mL.png",
    itemNumber: "81131013836",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "ReliOn Insulin Syringes 6mm 3/10 mL(Purple Stripes)",
    barcode: "ReliOn Insulin Syringes 6mm 3/10 mL.png",
    itemNumber: "81131013838",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "ReliOn Insulin Syringes 8mm 1 mL(Green Stripes)",
    barcode: "ReliOn Insulin Syringes 8mm 1 mL.png",
    itemNumber: "81131031174",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "ReliOn Insulin Syringes 8mm 1/2 mL(Blue Stripes)",
    barcode: "ReliOn Insulin Syringes 8mm 1/2 mL.png",
    itemNumber: "81131031176",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "ReliOn Insulin Syringes 8mm 3/10 mL(Purple Stripes)",
    barcode: "ReliOn Insulin Syringes 8mm 3/10 mL.png",
    itemNumber: "81131031178",
    McKesson: false,
    OrderInsite: true,
    },
    { name: 'ReliOn Pen Needles 31 G X 6 mm(Red Stripes)',
    barcode: ".png",
    itemNumber: "81131038680",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "ReliOn Pen Needles 31 G X 8 mm(Blue Stripes)",
    barcode: ".png",
    itemNumber: "81131038681",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "ReliOn Pen Needles 32 G X 4 mm(Green Stripes)",
    barcode: ".png",
    itemNumber: "81131038679",
    McKesson: false,
    OrderInsite: true,
    },
    { name: "1 ML Oral Syringes",
    barcode: "1 ML Oral Syringe.png",
    itemNumber: "40552793365",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "5 ML Oral Syringes",
    barcode: "5 ML Oral Syringe.png",
    itemNumber: "40552793366",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "10 ML Oral Syringes",
    barcode: "10 ML Oral Syringe.png",
    itemNumber: "40552793367",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Oral Syringe Adapters",
    barcode: "Oral Syringe Adapters.png",
    itemNumber: "40552793368",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "7 Day Pill Boxes",
    barcode: "7 Day Pill Box.png",
    itemNumber: "40009975129",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Yellow Paper",
    barcode: "Yellow Paper.png",
    itemNumber: "40009951826",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Third Party Signature Pad",
    barcode: "Third Party Signature Pad.png",
    itemNumber: "40009981013",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "RX Prescription Phone Pad",
    barcode: "RX Prescription Phone Pad.png",
    itemNumber: "40009932715",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Pharmacy Storage Box For EODs",
    barcode: "Pharmacy Storage Box For EODs.png",
    itemNumber: "40009986636",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Record Storage Box",
    barcode: "Record Storage Box.png",
    itemNumber: "60538801725",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Rubber Bands",
    barcode: "Rubber Bands.png",
    itemNumber: "60538800382",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Transfer Prescription Pads",
    barcode: "Transfer Prescription Pads.png",
    itemNumber: "40009924597",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Office Permanent Black Markers",
    barcode: "Office Permanent Black Markers.png",
    itemNumber: "60538801668",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Shredder Oil",
    barcode: "Shredder Oil.png",
    itemNumber: "60538801653",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "RX Thank You Cards",
    barcode: "RX Thank You Cards.png",
    itemNumber: "60538801653",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Teal Clinical Service Cards",
    barcode: "Teal Clinical Service Cards.png",
    itemNumber: "68113116660",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Medium RX Bags",
    barcode: "Medium RX Bags.png",
    itemNumber: "40009969073",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Small RX Bags",
    barcode: "Small RX Bags.png",
    itemNumber: "60538801674",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Right Hand Counting Tray",
    barcode: "Right Hand Counting Tray.png",
    itemNumber: "40009961287",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Left Hand Counting Tray",
    barcode: "Left Hand Counting Tray.png",
    itemNumber: "40553169959",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "HIPAA Acknowledgment Pad",
    barcode: "HIPAA Acknowledgment Pad.png",
    itemNumber: "40009981006",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "EOD Labels",
    barcode: "EOD Labels.png",
    itemNumber: "40009942777",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Counting Spatula",
    barcode: "Counting Spatula.png",
    itemNumber: "40009979236",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Anti Fatgue Mats 4 Pack 24X24",
    barcode: "Anti Fatgue Mats 4 Pack 24X24.png",
    itemNumber: "100058638",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Pill Bay Shelf 7X16",
    barcode: "Pill Bay Shelf 7X16.png",
    itemNumber: "100060292",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Will Call Bags",
    barcode: "Will Call Bags.png",
    itemNumber: "100561267",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Sticky Notes",
    barcode: "Sticky Notes.png",
    itemNumber: "100617323",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Business Cards",
    barcode: "Business Cards.png",
    itemNumber: "100640219",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Tempalert Sensor Replacement",
    barcode: "Tempalert Sensor Replacement.png",
    itemNumber: "100641147",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Tempalert High Gain Cell Antenna",
    barcode: "Tempalert High Gain Cell Antenna.png",
    itemNumber: "100641148",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "RX Will Call Label Kit 200 Pack Blue 180 to 199",
    barcode: "RX Will Call Label Kit 200 Pack Blue 180 to 199.png",
    itemNumber: "68113116988",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "RX Will Call Label Kit 200 Pack Blue 160 to 179",
    barcode: "RX Will Call Label Kit 200 Pack Blue 160 to 179.png",
    itemNumber: "68113118640",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "RX Will Call Label Kit 200 Pack Blue 140 to 159",
    barcode: "RX Will Call Label Kit 200 Pack Blue 140 to 159.png",
    itemNumber: "68113118639",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "RX Will Call Label Kit 200 Pack Blue 120 to 139",
    barcode: "RX Will Call Label Kit 200 Pack Blue 120 to 139.png",
    itemNumber: "60538800150",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "RX Will Call Label Kit 200 Pack Blue 100 to 119",
    barcode: "RX Will Call Label Kit 200 Pack Blue 100 to 119.png",
    itemNumber: "68113118637",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "RX Will Call Label Kit 200 Pack Blue 80 to 99",
    barcode: "RX Will Call Label Kit 200 Pack Blue 80 to 99.png",
    itemNumber: "68113118635",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "RX Will Call Label Kit 200 Pack Blue 60 to 79",
    barcode: "RX Will Call Label Kit 200 Pack Blue 60 to 79.png",
    itemNumber: "68113118373",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "RX Will Call Label Kit 200 Pack Blue 40 to 59",
    barcode: "RX Will Call Label Kit 200 Pack Blue 40 to 59.png",
    itemNumber: "68113118333",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "RX Will Call Label Kit 200 Pack Blue 20 to 39",
    barcode: "RX Will Call Label Kit 200 Pack Blue 20 to 39.png",
    itemNumber: "68113118166",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "RX Will Call Label Kit 200 Pack Blue 1 to 19",
    barcode: "RX Will Call Label Kit 200 Pack Blue 1 to 19.png",
    itemNumber: "68113116987",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Location Cards",
    barcode: "Location Cards.png",
    itemNumber: "100522965",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "X Small Neighborhood Female Technician Coats",
    barcode: "X Small Female Technician Coats.png",
    itemNumber: "40552009635",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Small Neighborhood Female Technician Coats",
    barcode: "Small Female Technician Coats.png",
    itemNumber: "40552009637",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Medium Neighborhood Female Technician Coats",
    barcode: "Medium Female Technician Coats.png",
    itemNumber: "40552009636",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Large Neighborhood Female Technician Coats",
    barcode: "Large Female Technician Coats.png",
    itemNumber: "40552009638",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "1X Large Neighborhood Female Technician Coats",
    barcode: "1X Large Female Technician Coats.png",
    itemNumber: "40552009639",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "2X Large Neighborhood Female Technician Coats",
    barcode: "2X Large Female Technician Coats.png",
    itemNumber: "40552009641",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "3X Large Neighborhood Female Technician Coats",
    barcode: "3X Large Female Technician Coats.png",
    itemNumber: "40552009642",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "4X Large Neighborhood Female Technician Coats",
    barcode: "4X Large Female Technician Coats.png",
    itemNumber: "40552009643",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "5X Large Neighborhood Female Technician Coats",
    barcode: "5X Large Female Technician Coats.png",
    itemNumber: "40552009644",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "6X Large Neighborhood Female Technician Coats",
    barcode: "6X Large Female Technician Coats.png",
    itemNumber: "40552009645",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Small Neighborhood Male Technician Coats",
    barcode: "Small Neighborhood Male Technician Coats.png",
    itemNumber: "40552009626",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Medium Neighborhood Male Technician Coats",
    barcode: "Medium Neighborhood Male Technician Coats.png",
    itemNumber: "40552009627",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Large Neighborhood Male Technician Coats",
    barcode: "Large Neighborhood Male Technician Coats.png",
    itemNumber: "40552009628",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "1X Large Neighborhood Male Technician Coats",
    barcode: "1X Large Neighborhood Male Technician Coats.png",
    itemNumber: "40552009629",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "2X Large Neighborhood Male Technician Coats",
    barcode: "2X Large Neighborhood Male Technician Coats.png",
    itemNumber: "40552009631",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "3X Large Neighborhood Male Technician Coats",
    barcode: "3X Large Neighborhood Male Technician Coats.png",
    itemNumber: "40552009640",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "4X Large Neighborhood Male Technician Coats",
    barcode: "4X Large Neighborhood Male Technician Coats.png",
    itemNumber: "40552009632",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "5X Large Neighborhood Male Technician Coats",
    barcode: "5X Large Neighborhood Male Technician Coats.png",
    itemNumber: "40552009633",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "6X Large Neighborhood Male Technician Coats",
    barcode: "6X Large Neighborhood Male Technician Coats.png",
    itemNumber: "40552009634",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "X Small Female Pharmacist Coats",
    barcode: "X Small Female Pharmacist Coats.png",
    itemNumber: "60538857617",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Small Female Pharmacist Coats",
    barcode: "Small Female Pharmacist Coats.png",
    itemNumber: "60538857462",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Medium Female Pharmacist Coats",
    barcode: "Medium Female Pharmacist Coats.png",
    itemNumber: "60538857479",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Large Female Pharmacist Coats",
    barcode: "Large Female Pharmacist Coats.png",
    itemNumber: "60538857507",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "1X Large Female Pharmacist Coats",
    barcode: "1X Large Female Pharmacist Coats.png",
    itemNumber: "60538857515",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "2X Large Female Pharmacist Coats",
    barcode: "2X Large Female Pharmacist Coats.png",
    itemNumber: "60538857516",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "3X Large Female Pharmacist Coats",
    barcode: "3X Large Female Pharmacist Coats.png",
    itemNumber: "60538857537",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "4X Large Female Pharmacist Coats",
    barcode: "4X Large Female Pharmacist Coats.png",
    itemNumber: "60538857571",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "5X Large Female Pharmacist Coats",
    barcode: "5X Large Female Pharmacist Coats.png",
    itemNumber: "60538857573",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "6X Large Female Pharmacist Coats",
    barcode: "6X Large Female Pharmacist Coats.png",
    itemNumber: "60538857609",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Small Male Pharmacist Coats",
    barcode: "Small Male Pharmacist Coats.png",
    itemNumber: "60538857061",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Medium Male Pharmacist Coats",
    barcode: "Medium Male Pharmacist Coats.png",
    itemNumber: "60538857067",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "Large Male Pharmacist Coats",
    barcode: "Large Male Pharmacist Coats.png",
    itemNumber: "60538857068",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "1X Large Male Pharmacist Coats",
    barcode: "1X Large Male Pharmacist Coats.png",
    itemNumber: "60538857069",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "2X Large Male Pharmacist Coats",
    barcode: "2X Large Male Pharmacist Coats.png",
    itemNumber: "60538857070",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "3X Large Male Pharmacist Coats",
    barcode: "3X Large Male Pharmacist Coats.png",
    itemNumber: "60538857073",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "4X Large Male Pharmacist Coats",
    barcode: "4X Large Male Pharmacist Coats.png",
    itemNumber: "60538857074",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "5X Large Male Pharmacist Coats",
    barcode: "5X Large Male Pharmacist Coats.png",
    itemNumber: "60538857077",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: "6X Large Male Pharmacist Coats",
    barcode: "6X Large Male Pharmacist Coats.png",
    itemNumber: "60538857078",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: 'White Paper',
    barcode: "White Paper.png",
    itemNumber: "100650133",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: 'Hazardous Waste Bags',
    barcode: "Hazardous Waste Bags.png",
    itemNumber: "60538802519",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: 'Shipping Envelope Bubble for RX Delivery (4x8) 250 Pack',
    barcode: "Shipping Envelope Bubble for RX Delivery (4x8) 250 Pack.png",
    itemNumber: "100615231",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: 'Shipping Envelope Bubble for RX Delivery (8.5x12) 100 Pack',
    barcode: "Shipping Envelope Bubble for RX Delivery (8.5x12) 100 Pack",
    itemNumber: "100615232",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: 'Oxivir Wipes',
    barcode: "Oxivir Wipes.png",
    itemNumber: "807174500134",
    McKesson: false,
    OrderInsite: false,
    GNFR: true
    },
    { name: 'Opioid Pamphlets',
    barcode: 'Opioid Pamphlets.png',
    itemNumber: '586338822',
    McKesson: false,
    OrderInsite: false,
    GNFR: false,
    signOrderCatalog: true
    },

];
function getProperty (name, prop) {
    for (let i = 0; i < vials.length; i++) {
        if (vials[i].name === name) {
            return vials[i][prop];
        }
    }
}
// console.log(getProperty('10 Dram Vials', 'itemNumber'));
function checkVendor (prop) {
    for (let i = 0; i < vials.length; i++) {
        if (vials[i][prop] === true) {
            vials[i]['vendor'] = prop;
            // console.log(vials[i]['vendor']);
            // console.log(vials[i]['name']);
            // return vials[i]['itemNumber'];
        }
    }
}

checkVendor('McKesson');
checkVendor('OrderInsite');
checkVendor('GNFR');
checkVendor('signOrderCatalog');

// console.log(vials);
let arr = [];
let arr1 = [];
let arr2 = [];
removeDuplicates(arr1);
let arrMCK = [];
let arrOI = [];
let arrGNFR = [];
let arrSpecificOI = [];
let arrSignOrderCatalog = [];
// for( var i = 0; i < vials.length; i++) {
//     vials[i].name = vials[i].name.toLowerCase();
//     };
const MckessonItems = document.getElementById("Mckesson-Items");
const OrderInsiteItems = document.getElementById('OrderInsite-Items');
const GNFRItems = document.getElementById('GNFR-Items');
const list = document.getElementById('list');
const listChildren = list.children;
const search = document.getElementById("box");
const search1 = document.getElementById('search1');
const list2 = document.createElement('ul');
list2.setAttribute('id', "list2");
const n = document.createElement('li');
const bigMckLink = document.createElement('a');
bigMckLink.setAttribute('id', "bigMckLink");
bigMckLink.setAttribute('target', "_blank");
const bigOiLink = document.createElement('a');
bigOiLink.setAttribute('id', "bigOiLink");
bigOiLink.setAttribute('target', "_blank");
const bigGNFRLink = document.createElement('a');
bigGNFRLink.setAttribute('id', "bigGNFRLink");
bigGNFRLink.setAttribute('target', "_blank");
const testingMCK = document.getElementById('testingMCK');
const titleMCK = document.getElementById('mck-items');
const testingOI = document.getElementById('testingOI');
const testingGNFR = document.getElementById('testingGNFR');
const button = document.getElementById('button');
const searchResults = document.getElementById('searchResults');
const control = document.getElementById('control');
const displayAllItems = document.getElementById('displayAllItems');
const mckesson = document.getElementById('mckesson');
const myInv = document.getElementById('myInv');
const gnfr = document.getElementById('gnfr');
const navBar = document.getElementById('nav');
const resultsMCK = document.getElementById('resultsMCK');
const resultsOI = document.getElementById('resultsOI');
const resultsGNFR = document.getElementById('resultsGNFR');
const navResults = document.getElementById("navResults");
const resultsMCKHeader = document.getElementById('resultsMCKHeader');
const resultsOIHeader = document.getElementById('resultsOIHeader');
const resultsGNFRHeader = document.getElementById('resultsGNFRHeader');
const listNav = document.getElementById('listNav');
const navLi = document.getElementById('navLi');


// var bigOIImage = new QRCode(OrderInsiteItems, {
//     text: arr.join(", "),
//     width: 50,
//     height: 50,
// })
var bigOIImage = new QRCode(document.getElementById('qr'), {
    width: 100,
    height: 100
});
var bigMCKImage = new QRCode(document.getElementById('qr1'), {
    width: 100,
    height: 100
});
var bigGNFRImage = new QRCode(document.getElementById('qr2'), {
    width: 100,
    height: 100
});
$('canvas').hide();
// bigOIImage.clear();
let items = [];
let DisplayAllItems1arr = [];
let McKessonItems1arr = [];
let OrderInsiteItems1arr = [];
let GNFRItems1arr = [];
let DailyChecklist1arr = [];
let Vials1arr = [];
let Caps1arr = [];
let MyInventoryManagement1arr = [];
let SignOrderCatalog1arr = [];
let Bunzl1arr = [];
let Equipment1arr = [];
let ReliOnInsulinSyringes1arr = [];
let ReliOnPenNeedles1arr = [];
let ReliOnNovolinVials1arr = [];
let ReliOnNovolinFlexpens1arr = [];
let Favorites1arr = [];
let FLAVORx1arr = [];
let TechnicianSmocks1arr = [];
let PharmacistCoats1arr = [];
let Covap1arr = [];
let Paper1arr = [];
let CardioChekandA1C1arr = [];
let RXBags1arr = [];
let PrintBarcodes1arr = [];
let FindItemNumber1arr = [];
let pharmacistCoats = [];
let reliOnInsulinSyringes = [];
let amberVials = [];
let caps = [];
let reliOnNovolinVials = [];
let reliOnNovolinFlexpens = [];
let technicianGreenSmocks = [];
let paper = [];
let RXBags = [];
function setID () {
    for (let i = 0; i < listNav.children.length; i++) {
        const element = listNav.children[i];
        // console.log(element.textContent);
        var b = element.textContent.toString().replace(/ +/g, "") + 1;
        element.setAttribute('id', b);
        element.setAttribute('class', b);
        const arrayName = b +'arr';
        element.setAttribute('associatedArray', arrayName);
        // console.log(element.getAttribute('associatedArray'));
    }
}
// setID();
const MckessonItems1 = document.getElementById('McKessonItems1');
const DisplayAllItems1 = document.getElementById('DisplayAllItems1');
const caps1 = document.getElementById('Caps1');
// let hhh = [];

// This is our search function:
function searchFunc (itemToFind, arr) {
    vials.forEach(element => { const x = (element.name);
        const g = new RegExp(itemToFind, 'gi');
        if (x.match(g)) {
            arr.push(element);
        }
    })
    // console.log(arr);
    };
    // function separateItemsBasedOnVendor (originalArr) {
    //     originalArr.forEach(element => { const xSign = element.signOrderCatalog;
    //         const xMCK = element.McKesson;
    //         const xOI = element.OrderInsite;
    //         const xGNFR = element.GNFR;
    //         function seg (x, arr) {
    //             if (x === true) {
    //             arr.push(element);
    //             arr = removeDuplicates(arr);
    //             // console.log(arr);
    //         }
    //         }
    //         seg (xSign, arrSignOrderCatalog)
    //         seg (xMCK, arrMCK)
    //         seg (xOI, arrOI)
    //         seg (xGNFR, arrGNFR)
    //     });
    // }
    // separateItemsBasedOnVendor(vials);
function separateItemsBasedOnVendor (arr, dist) {
    for (let i = 0; i < vials.length; i++) {
        if (vials[i][dist] === true) {
            arr.push(vials[i]);
        }
    }
}
separateItemsBasedOnVendor(arrMCK, 'McKesson');
separateItemsBasedOnVendor(arrOI, 'OrderInsite');
separateItemsBasedOnVendor(arrGNFR, 'GNFR');
separateItemsBasedOnVendor(arrSignOrderCatalog, 'signOrderCatalog');
    // console.log(arrMCK);
    // console.log(arrOI);
    // console.log(arrGNFR);
    // console.log(arrSignOrderCatalog);
    function separateOIExclusiveItems (arr) {
        vials.forEach(element => {
            const xOI = element.OrderInsite;
            const xMCK = element.McKesson;
            if (xOI === true && xMCK === false) {
                arr.push(element);
            }
        });
        // console.log(arr);
    }
    separateOIExclusiveItems(arrSpecificOI);
    // vials[0].name = vials[0].name.toLowerCase();

function removeDuplicates (data) {
    let x = [...new Set(data)];
    // console.log(x);
    return x;
}
// function funcFilter (p, pharmacistCoats) {
//     for (const i of vials) {
//         const value = (i.name);
//         const re = new RegExp(p, 'gi');
//         if (value.match(re)) {
//             pharmacistCoats.push(i);
//             console.log(value.match(re));
//         }
//     }
//     console.log(pharmacistCoats);
// }
searchFunc('pharmacist coats', pharmacistCoats);
searchFunc('relion insulin syringes', reliOnInsulinSyringes);
searchFunc('dram vial', amberVials);
searchFunc('small caps|large caps', caps);
searchFunc(('novolin.*vial'), reliOnNovolinVials);
searchFunc('flexpen', reliOnNovolinFlexpens);
searchFunc('technician coats', technicianGreenSmocks);
searchFunc('paper', paper);
searchFunc('rx bags', RXBags);
searchFunc('pen needle', ReliOnPenNeedles1arr);
searchFunc('flavorx', FLAVORx1arr);
function createListFromArray (arr, listParent) {
    arr.forEach(element => { const xName = element.name;
        const li = document.createElement('li');
        const text = document.createTextNode(xName);
        li.appendChild(text);
        li.setAttribute('id', 'navLi');
        // li.setAttribute('class', arr);
        listParent.appendChild(li);
        li.style.display = "none";
        li.addEventListener('click', () => {onClick(li)});
        // var arr1 = $(listParent).attr('associatedArray');
        // arr = arr1;
    });
}
function removeChildren (parent) {
    for (const i of parent) {
        clean(i);
    }
}
// function sideBarExpansion (target) {
//     target.addEventListener('click', (event) => { const element = event.target;
//     child = element.children;
//     if (element == target.children[2]) {
//         removeChildren(child);
//         createListFromArray (arrMCK, element);
//     }
//     if (element == target.children[3]) {
//         removeChildren(child);
//         createListFromArray (arrOI, element);
//     }
//     if (element == target.children[4]) {
//         removeChildren(child);
//         createListFromArray (arrGNFR, element);
//     }
//     if (element == target.children[1]) {
//         removeChildren(child);
//         createListFromArray (vials, element);
//     }
//     if (element == target.children[6]) {
//         removeChildren(child);
//         createListFromArray (amberVials, element);
//     }
//     if (element == target.children[7]) {
//         removeChildren(child);
//         createListFromArray (caps, element);
//     }
//     if (element == target.children[12]) {
//         removeChildren(child);
//         createListFromArray (reliOnInsulinSyringes, element);
//     }
//     if (element == target.children[14]) {
//         removeChildren(child);
//         createListFromArray (reliOnNovolinVials, element);
//     }
//     if (element == target.children[15]) {
//         removeChildren(child);
//         createListFromArray (reliOnNovolinFlexpens, element);
//     }
//     if (element == target.children[17]) {
//         removeChildren(child);
//         createListFromArray (technicianGreenSmocks, element);
//     }
//     if (element == target.children[18]) {
//         removeChildren(child);
//         createListFromArray (pharmacistCoats, element);
//     }
//     if (element == target.children[9]) {
//         removeChildren(child);
//         createListFromArray (arrSignOrderCatalog, element);
//     }
//     if (element == target.children[20]) {
//         removeChildren(child);
//         createListFromArray (paper, element);
//     }
//     if (element == target.children[22]) {
//         removeChildren(child);
//         createListFromArray (RXBags, element);
//     }
// })}

// listNav.addEventListener('click',(event) => { console.log(event.target)});

// sideBarExpansion(listNav);

// $(function () {
//     $('#mck-items').click(function () {
//         $('#listNav ul li').toggle(1000);
//     })
// })
// const OrderInsiteItems1 = $('#OrderInsiteItems1')[0];

createListFromArray (vials, $('#DisplayAllItems1')[0]);
createListFromArray (arrMCK, MckessonItems1);
createListFromArray (arrOI, $('#OrderInsiteItems1')[0]);
createListFromArray (arrGNFR, $('#GNFRItems1')[0]);
createListFromArray (amberVials, $('#Vials1')[0]);
createListFromArray (caps, caps1);
createListFromArray (arrSignOrderCatalog, $('#SignOrderCatalog1')[0]);
createListFromArray (reliOnInsulinSyringes, $('#ReliOnInsulinSyringes1')[0]);
createListFromArray (ReliOnPenNeedles1arr, $('#ReliOnPenNeedles1')[0]);
createListFromArray (reliOnNovolinVials, $('#ReliOnNovolinVials1')[0]);
createListFromArray (reliOnNovolinFlexpens, $('#ReliOnNovolinFlexpens1')[0]);
createListFromArray (technicianGreenSmocks, $('#TechnicianSmocks1')[0]);
createListFromArray (pharmacistCoats, $('#PharmacistCoats1')[0]);
createListFromArray (paper, $('#Paper1')[0]);
createListFromArray (RXBags, $('#RXBags1')[0]);
createListFromArray (FLAVORx1arr, $('#FLAVORx1')[0]);

// createListFromArray (arrOI, element);
// createListFromArray (vials, element);

// function () {

// }

// function nnn (arr, arr1, arr2) {
//     for (var i of vials) {
//         if (i.McKesson == true) {
//             arr.push(i);
//         }
//         if (i.OrderInsite == true) {
//             arr1.push(i);
//         }
//         if (i.GNFR == true) {
//             arr2.push(i);
//         }
//     }
// }
function fillingResults (arr, resultsMCK) {
    const spanMCK = document.createElement('span');
    spanMCK.setAttribute('id', "spanMCK");
    const spanOI = document.createElement('span');
    spanOI.setAttribute('id', 'spanOI');
    const spanGNFR = document.createElement('span');
    spanGNFR.setAttribute('id', 'spanGNFR');
    const spanAll = document.createElement('id');
    spanAll.setAttribute('id', "spanAll");
    searchResults.append(spanMCK, spanOI, spanGNFR);
    for (const i of arr) {
        const text1 = document.createTextNode(i.name);
        const spanList = document.createElement('li');
        spanList.setAttribute('id', "spanList");
        spanList.appendChild(text1);
        // spanMCK.appendChild(spanList);
        resultsMCK.appendChild(spanList);
        // searchResults.appendChild(spanList);
    }
}
function res (event) {
    let inner = event.target.innerText;
    if (inner == 'McKesson Items') {
        replace(resultsMCK);
        // const spanList = document.createElement('li');
        fillingResults(arrMCK, resultsMCK);
        // resultsMCK.append();
        // console.log('hi');
    }
    if (inner == 'OrderInsite') {
        replace(resultsOI);
        fillingResults(arrOI, resultsOI);
    }
    if (inner == 'GNFR') {
        replace(resultsGNFR);
        fillingResults(arrGNFR, resultsGNFR);
    }
    if (inner == 'Display All Items') {
        replace(resultsMCK);
        replace(resultsOI);
        replace(resultsGNFR);
        // resultsMCK.remove(resultsMCK.firstChild)
        // resultsOI.firstChild, resultsGNFR.firstChild);
        // resultsOI.remove(resultsOI.firstChild);
        // resultsGNFR.remove(resultsGNFR.firstChild);
        // resultsMCK.appendChild(resultsGNFRHeader);
        // resultsOI.appendChild(resultsOIHeader);
        // resultsGNFR.appendChild(resultsGNFRHeader);
        fillingResults(arrMCK, resultsMCK);
        fillingResults(arrOI, resultsOI);
        fillingResults(arrGNFR, resultsGNFR);
    }
}
function addToMCK (place, place1, place2) {
    for (i = 0; i < vials.length; i++) {
        if (vials[i].McKesson == true) {
        const placeText = document.createTextNode(vials[i].name);
        const placeLi = document.createElement('li');
        placeLi.setAttribute('id', 'liNewMCK');
        placeLi.appendChild(placeText);
        place.append(placeLi);
        }
        if (vials[i].OrderInsite == true) {
        const place1Text = document.createTextNode(vials[i].name);
        const place1Li = document.createElement('li');
        place1Li.setAttribute('id', 'liNewOI');
        place1Li.appendChild(place1Text);
        place1.append(place1Li);
        }   if (vials[i].GNFR == true) {
        const place2Text = document.createTextNode(vials[i].name);
        const place2Li = document.createElement('li');
        place2Li.setAttribute('id', 'liNewGNFR');
        place2Li.appendChild(place2Text);
        place2.append(place2Li);
        }
    }
}
function pressEnter (event) {
    if (event.key === "Enter") { event.preventDefault();
        search.value = '';
        replace(list2);
        buttonClick();
        replace(list);
        // categorizeByClass(arrMCK, 'MCK-LOGO1.PNG');
        // categorizeByClass(arrOI, 'OI.PNG');
        // categorizeByClass(arrGNFR, 'GNFR Icon.PNG');
    }
}
function categorizeByClass (arr, a) {
    for (let j = 0; j < arr.length; j++) {
        const element1 = arr[j];
        const name1 = arr[j].name;
    for (let i = 0; i < list2.children.length; i++) {
        const element = list2.children[i];
        console.log(element);
        if (element.textContent === name1) {
            element.style.backgroundColor = 'lightblue';
            const lim = document.createElement('li');
            const icon = document.createElement('img');
            icon.setAttribute('src', a);
            icon.setAttribute('id', 'icon');
            lim.appendChild(icon);
            element.appendChild(lim);
        }
    }
}}
var itemsMCK = [];
var itemsOI = [];
var itemsGNFR = [];
// function r (event) {
//     let inner = event.target.innerText;
//     for (let i = 0; i < itemsMCK.length; i++) {
//         if (inner == itemsMCK[i].name && itemsMCK[i].McKesson == true) {
//             const ind = itemsMCK[i];
//             const name2 = ind.name;
//             const mac = ind.McKesson;
//             const itm = ind.itemNumber;
//         event.target.append(" Item Number = " + itm);
//         var MCKImage = document.createElement('img');
//         JsBarcode(MCKImage, itm);
//         event.target.append(MCKImage);
//         if (inner == itemsOI[i].name && itemsOI[i].OrderInsite == true) {
//             const itm1 = itemsOI[i].itemNumber
//             event.target.append(" Item Number = " + itm1)
//             console.log("yay");
//         }
//             // console.log(inner);
//             // event.target.style.backgroundColor = "Blue";
//         }
//     }
// }
// function printImg(image1) {
//     image1 = event.target;
//     image1.setAttribute('href', 'data:image/png;base64,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');
//     image1.setAttribute('target', '_blank');
//     document.body.style.visibility = 'hidden';
//     image1.style.visibility = 'visible';
//     image1.style.transform = 'scale(5)';
//     window.print();
// }
function onClick (li) {
    for (i = 0; i < vials.length; i++) {
    if (li.textContent == vials[i].name) {
        let index = vials.map(e => e.name).indexOf(li.textContent);
        const imageMCK = document.createElement('img');
        imageMCK.setAttribute('id', 'imageMCK');
        const itemNumber1 = vials[index].itemNumber;
        JsBarcode(imageMCK, itemNumber1, {height: 40});
        const imageOI = document.createElement('img');
        imageOI.setAttribute('id', "imageOI");
        JsBarcode(imageOI, itemNumber1, {height: 40});
        const imageGNFR = document.createElement('img');
        imageGNFR.setAttribute('id', "imageGNFR");
        JsBarcode(imageGNFR, itemNumber1, {height: 40});
        const descMCK = document.createElement('p');
        const nameMain = vials[index].name;
        descMCK.textContent = "Item Description: " + nameMain;
        descMCK.setAttribute('id', "descMCK");
        const descOI = document.createElement('p');
        descOI.textContent = "Item Description: " + nameMain;
        descOI.setAttribute('id', "descOI");
        const descGNFR = document.createElement('p');
        descGNFR.textContent = "Item Description: " + nameMain;
        descGNFR.setAttribute('id', "descGNFR");
        const mckLink = document.createElement('a');
        mckLink.setAttribute('target', '_blank');
        mckLink.setAttribute('id', "mckLink");
        mckLink.setAttribute('href',
        "https://connect.mckesson.com/portal/site/smo/menuitem.87a0666be7398a3ece3ee6105740d0a0/?query=" + itemNumber1);
        mckLink.text = "Order on McKesson";
        const oiLink = document.createElement('a');
        oiLink.setAttribute('target', '_blank');
        oiLink.setAttribute('id', "oiLink");
        oiLink.setAttribute('href',
        "https://connect.mckesson.com/portal/site/smo/menuitem.87a0666be7398a3ece3ee6105740d0a0/?query=" + itemNumber1);
        oiLink.text = "Order on OrderInsite";
        const GNFRLink = document.createElement('a');
        GNFRLink.setAttribute('target', '_blank');
        GNFRLink.setAttribute('id', "GNFRLink");
        GNFRLink.setAttribute('href',
        "https://connect.mckesson.com/portal/site/smo/menuitem.87a0666be7398a3ece3ee6105740d0a0/?query=" + itemNumber1);
        GNFRLink.text = "Order on GNFR";
        const itemNumberMCK = document.createElement('p');
        itemNumberMCK.textContent = 'Item Number: ' + itemNumber1;
        itemNumberMCK.setAttribute('id', "itemNumberMCK");
        const itemNumberOI = document.createElement('p');
        itemNumberOI.textContent = 'Item Number: ' + itemNumber1;
        itemNumberOI.setAttribute('id', "itemNumberOI");
        const itemNumberGNFR = document.createElement('p');
        itemNumberGNFR.textContent = 'Item Number: ' + itemNumber1;
        itemNumberGNFR.setAttribute('id', "itemNumberGNFR");
        const mck = document.createElement('li');
        const QROI = document.getElementById('QROI');
        const QRMCK = document.getElementById('QRMCK');
        const QRGNFR = document.getElementById('QRGNFR');
        // $('canvas').show();
        li.remove(li.firstChild);
        mck.setAttribute('id', 'liMCK');
        mck.setAttribute("class", "mck");
        const oi = document.createElement('li');
        oi.setAttribute("class", "oi");
        oi.setAttribute("id", "liOI");
        const GNFR = document.createElement('li');
        GNFR.setAttribute("class", "GNFR");
        GNFR.setAttribute("id", "liGNFR");
        mck.append(descMCK, imageMCK ,itemNumberMCK, mckLink);
        oi.append(descOI, imageOI, itemNumberOI, oiLink);
        GNFR.append(descGNFR, imageGNFR, itemNumberGNFR, GNFRLink);
        if (vials[index].McKesson === true && vials[index].OrderInsite === false) {
            bigMckLink.text = "Order All Items on McKesson";
            MckessonItems.append(mck);
            MckessonItems.insertBefore(bigMckLink, testingMCK);
            arr.push(itemNumber1);
            QRMCK.append(document.getElementById('qr1'));
            bigMckLink.setAttribute('href',
            "https://connect.mckesson.com/portal/site/smo/menuitem.87a0666be7398a3ece3ee6105740d0a0/?query=" + arr.join("%20or%20"));
            bigMCKImage.makeCode(arr.join('OR '));
            // testing.append(bigMckLink);
            // box.value = '';
            // itemsMCK.push(...vials.splice(index,1));
            // itemsMCK.name.setAttribute('class', 'itemsMCK');
            // $(function () {
               
            //     $('#imageMCK').on('click', function () {
            //         $(this).printThis();
            //     })
            //     $('#imageOI').on('click', function () {
            //         $(this).printThis();
            //     })
            //     $('#imageGNFR').on('click', function () {
            //         $(this).printThis();
            //     })
            // });
        } 
        if (vials[index].OrderInsite === true && vials[index].McKesson === false) {
            arr1.push(itemNumber1);
            removeDuplicates(arr1);
            bigOiLink.text = "Order All Items on OrderInsite";
            OrderInsiteItems.append(oi);
            OrderInsiteItems.insertBefore(bigOiLink, testingOI);
            QROI.append(document.getElementById('qr'));
            bigOiLink.setAttribute('href', "https://acloud.orderinsite.com/rs/logon/walmart");
            bigOIImage.makeCode(arr1.join(', '));
            // box.value = '';
            // itemsOI.push(...vials.splice(index,1));
            // $(function () {
               
            //     $('#imageMCK').on('click', function () {
            //         $(this).printThis();
            //     })
            //     $('#imageOI').on('click', function () {
            //         $(this).printThis();
            //     })
            //     $('#imageGNFR').on('click', function () {
            //         $(this).printThis();
            //     })
            // });
        }
        if (vials[index].McKesson === true && vials[index].OrderInsite === true) {
            arr.push(itemNumber1);
            arr1.push(itemNumber1);
            removeDuplicates(arr1);
            bigMckLink.text = "Order All Items on McKesson";
            bigOiLink.text = "Order All Items on OrderInsite";
            MckessonItems.append(mck);
            MckessonItems.insertBefore(bigMckLink, testingMCK);
            OrderInsiteItems.append(oi);
            OrderInsiteItems.insertBefore(bigOiLink, testingOI);
            QROI.append(document.getElementById('qr'));
            QRMCK.append(document.getElementById('qr1'));
            bigMckLink.setAttribute('href',
        "https://connect.mckesson.com/portal/site/smo/menuitem.87a0666be7398a3ece3ee6105740d0a0/?query=" + arr.join("%20or%20"));
            bigOiLink.setAttribute('href', arr1.join(", "));
            bigOIImage.makeCode(arr1.join(', '));
            bigMCKImage.makeCode(arr.join(' OR '));
        // ar (imageMCK);
        // ar (imageOI);
        // $(function () {
               
        //     $('#imageMCK').on('click', function () {
        //         $(this).printThis();
        //     })
        //     $('#imageOI').on('click', function () {
        //         $(this).printThis();
        //     })
        //     $('#imageGNFR').on('click', function () {
        //         $(this).printThis();
        //     })
        // });
        
        }
        if (vials[index].GNFR === true && vials[index].OrderInsite === false && vials[index].McKesson === false) {
            arr2.push(itemNumber1);
            bigGNFRLink.text = "Order All Items on GNFR";
            GNFRItems.append(GNFR);
            GNFRItems.insertBefore(bigGNFRLink, testingGNFR);
            QRGNFR.append(document.getElementById('qr2'));
            bigGNFRLink.setAttribute('href',
            "https://connect.mckesson.com/portal/site/smo/menuitem.87a0666be7398a3ece3ee6105740d0a0/?query=" + arr.join("%20or%20"));
            bigGNFRImage.makeCode(arr2.join(', '));
            // box.value = '';
            console.log(vials[index]);
            // ar (imageGNFR);
            // imageGNFR.addEventListener('click', (event) => { printJS ('imageGNFR', 'html')
            // 'imageGNFR' = event.target});
            // printJS('imageGNFR', 'html');
            // $(function () {
               
            //     $('#imageGNFR').on('click', function () {
            //         $(this).printThis();
            //     })
            // });
            // itemsGNFR.push(...vials.splice(index,1));
            // $(function () {
               
                $('#imageMCK').on('click', function () {
                    $(this).printThis();
                })
                $('#imageOI').on('click', function (e) {
                    if (e.target !== this) {
                        return;
                    }
                    $(this).first().printThis();
                })
                // $('li.GNFR #imageGNFR').on('click', function (e) {
                //     if (e.target !== this) {
                //         return;
                //     }
                //     $(this).printThis();
                // })
            // });

            $('#imageGNFR').click(function (e) { 
                e.preventDefault();
                var att = e.target;
                $(att).printThis();
            });
        }
    }
}
// function ar (element) {
//     element.addEventListener('click', (event) => { printImg()
//         image1 = event.target});
//     }
}
function buttonClick () {
    for (let i = 0; i < list.children.length; i++) {
        const textList = document.createTextNode(Object.values(list.children)[i].textContent).textContent;
        items.push(textList);
        items = removeDuplicates (items);
        const listNew = document.createElement('li');
        listNew.setAttribute('id', "listNew");
                listNew.append(Object.values(items)[i]);
                list2.appendChild(listNew);
                searchResults.appendChild(list2);
            }
            // categorizeByClass(arrMCK, 'MCK-LOGO1.PNG');
            // categorizeByClass(arrOI, 'OI.PNG');
            // categorizeByClass(arrGNFR, 'GNFR Icon.PNG');
}
function setList(group) {
    clearList();
    for (const person of group) {
        const li = document.createElement('li');
        const text = document.createTextNode(person.name);
        const iconMCK = document.createElement('img');
        iconMCK.setAttribute('src', 'MCK-LOGO1.PNG');
        iconMCK.setAttribute('id', "iconMCK");
        const iconOI = document.createElement('img');
        iconOI.setAttribute('src', 'OI.PNG');
        iconOI.setAttribute('id', "iconOI");
        const iconGNFR = document.createElement('img');
        iconGNFR.setAttribute('src', 'GNFR Icon.PNG');
        iconGNFR.setAttribute('id', "iconGNFR");
        li.appendChild(text);
        list.appendChild(li);
        li.setAttribute("id", "li");
        // li.appendChild(iconMCK);
        // li.appendChild(iconOI);
        // li.appendChild(iconGNFR);
        li.onclick = () => {search.value = "";};
        li.addEventListener('click', function() { onClick(li)}, {once: true});
        button.onclick = () => {search.value = "";};
        items.length = 0;
    }
    if (group.length === 0) {
    setNoResults();
    }
};
// $('#list').on('click', function (event) {
//     event.target.remove();
//   })
search.addEventListener('keypress', pressEnter);
list2.addEventListener('click', () => {
    // list2.children.textContent;
    onClick(event.target);
})
function replace (item) {
    while (item.lastChild) {
        item.removeChild(item.lastChild);
    }
}
function combine () {
    replace(list2);
    items.length = 0;
    buttonClick();
    replace(list);
}
button.addEventListener('click', combine);
function clearList() {
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
}
function clean(mck) {
    while(mck.firstChild) {
        mck.removeChild(mck.firstChild);
    }
}
function setNoResults() {
    clearList();
        const lim = document.createElement('li');
        lim.setAttribute('id', "lim");
        const text = document.createTextNode('no results found');
        lim.append(text);
        list.append(lim);
    }
search.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        // value = value.trim().toLowerCase();
        const re = new RegExp(value, 'gi')
        setList(vials.filter(person => {
            const result = person.name.match(re);
            return result;
        // }).sort((personA, personB) => {
        //     return getRelevancy(personB.name, value) - getRelevancy(personA.name, value);   
        }));
    } else {
        clearList();
    }
});
// mckesson.addEventListener('click', res, {once: true});
// myInv.addEventListener('click', res, {once: true});
// gnfr.addEventListener('click', res, {once: true});
// displayAllItems.addEventListener('click', res, {once: true});

$(function() {


    $('#listNav ul').on('click', function (e) {
        if (e.target !== this) {
            return;
        }
        console.log(this);
        $(this).children().toggle(500);
        $(this).children().addClass('clicked');
        // $(this).printThis();
    })
    // $('#list2')
    // $('#listNav ul.notClicked').on('click', function () {
    //     $(this).children().hide(500);
    //   })
    // $('#navLi').on('click', function () { 
    //     onClick(this);
    //  })
    // $('#Mckesson-Items').on('click', function () {
    //     var amm = $(this).children().first().next().next().next().printThis();
    //     console.log(amm);
    // });
})


// button.addEventListener('click', (event) => {
//     let value = event.target.value;
//     if (value && value.trim().length > 0) {
//         const re = new RegExp(value, 'gi')
//         setList(vials.filter(person => {
//             var result = person.name.match(re);
//             return result;
//         }));
//     } else {
//         clearList();
//     }
// });
// var elementIsClicked = false; // declare the variable that tracks the state
// function clickHandler(){ // declare element function that updates the state
//   elementIsClicked = true;
// }
// var element = document.getElementById('myElement'); // grab element reference to your element
// element.addEventListener('click', clickHandler); // associate the function above with the click event
// function getRelevancy(value, searchTerm) {
//         if (value === searchTerm) {
//             return 2;
//         } else if (value.startWith(searchTerm)) {
//             return 1;
//         } else {
//             return 0;
//         }
// };