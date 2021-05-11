
const Pet = Parse.Object.extend("Pet");


const textName = "myName";
const textAge = 10;

create();

function create() {
    mypet = new Pet();
    mypet.set("name", textName);
    mypet.set("age", textAge);

    mypet.save(null, {
        success: function (pet) {
            console.log('Pet created successful with name: ' + pet.get("name") + ' and age: ' + pet.get("age"));
        },
        error: function (response, error) {
            console.log('Error: ' + error.message);
        }
    });
}