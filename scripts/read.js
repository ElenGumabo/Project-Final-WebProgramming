

const Pet = Parse.Object.extend("Pet");


const textName = "myName";

read();

function read() {
    query = new Parse.Query(Pet);
    query.equalTo("name", textName);
    query.first({
        success: function (pet) {
            if (pet) {
                console.log('Pet found successful with name: ' + pet.get("name") + ' and age: ' + pet.get("age"));
            } else {
                console.log("Nothing found, please try again");
            }
        },
        error: function (error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    });
}