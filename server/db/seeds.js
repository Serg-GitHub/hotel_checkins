use hotel;
db.dropDatabase();

db.bookings.insertMany([

    {
        name: "David Brown",
        email: "davidmacarabrown@gmail.com",
        checked_in: "false"
    },
    {
        name : "Sergio Eneide", 
        email : "sergio@gmail.com", 
        checked_in : "true" 
    }

])