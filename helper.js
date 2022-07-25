const HEADER_ROW = [
    {
        value: 'Name',
        fontWeight: 'bold'
    },
    {
        value: 'Date of Birth',
        fontWeight: 'bold'
    },
    {
        value: 'Cost',
        fontWeight: 'bold'
    },
    {
        value: 'Paid',
        fontWeight: 'bold'
    }
]

const DATA_ROW_1 = [
    // "Name"
    {
        type: String,
        value: 'John Smith'
    },

    // "Date of Birth"
    {
        type: Date,
        value: new Date(),
        format: 'mm/dd/yyyy'
    },

    // "Cost"
    {
        type: Number,
        value: 1800
    },

    // "Paid"
    {
        type: Boolean,
        value: true
    }
]

const data = [
    HEADER_ROW,
    DATA_ROW_1,
    DATA_ROW_1
]

module.exports = data
