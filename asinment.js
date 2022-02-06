
// Problem solving:1 ana To Vori 

function anaToVori(ana){
    let vori=ana/16;
    if(ana<=0){
        console.log("Please give the number from 0 onwards");
        
    }
    else{
        return vori;
    }
}

anaToVori(0);



// problem solving:2 panda Cost

function pandaCost(singra,somocha,gilapi){

    const singraPerPise=7;
    const somochaPerPise=10;
    const gilapiPerPise=15;

    let totalCost=(singra*singraPerPise)+(somocha*somochaPerPise)+(gilapi*gilapiPerPise);

    if(singra<=0 || somocha<=0 || gilapi<=0 ){
        console.log("Please give the number from 0 onwards ");
    }
    else{
        return (totalCost);
    }  
}
 let total=pandaCost(5,5,5);
 console.log(total);


// problem solving:3 picnic Budget

function picnicBudget(totalPeople){
    const first100=5000;
    const sec100=4000;
    const third100=3000;
    let totalCost1=(first100*totalPeople);
    let totalCost2=(first100*totalPeople*sec100);
    let totalCost3=(first100*totalPeople*sec100*third100);
    switch(totalPeople<=0) {
    case console.log("Please give the number from 0 onwards "):
     
    break;
    case (totalPeople<=100):
       console.log(totalCost1);
    break;
    case (totalPeople<=200):
        console.log(totalCost2);
    break;
    case (totalPeople<=300):
        console.log(totalCost3);
    break ;
   default:
    text = "Please give the number from 0 onwards ";
    
    }

    // if(totalPeople<=0){
    //     console.log("Please give the number from 0 onwards ");
    // }
    // else if(totalPeople<=100){
    //     console.log(totalCost1);
    // }
    // else if(totalPeople<=200){
    //     console.log(totalCost2);
    // }
    // else if(totalPeople>200){
    //     console.log(totalCost3);
    // }
}

 picnicBudget(155);

 // problem solving:4 odd Friend

// let friends = ['said','shifa','rubama','sajid','khaiza','habiba'];

// function oddFriend(friends) {

//     for (let i = 0; i <= friends.length; i++) {
//         let newFriend;
//         newFriend = friends[i];
//         let stringLength = newFriend.length;
//         if (stringLength % 2 == 0) {
//         } else {
//             break;
//         }
//     }

//     return newFriend;
// }

//  oddFriend(friends);



var friends = ['said','shifa','rubama','sajid','khaiza','habiba'];

function oddFriend(friends) {

    for (let i = 0; i <= friends.length; i++) {
        var newFriend;
        newFriend = friends[i];
        var stringLength = newFriend.length;
        if (stringLength % 2 == 0) {
        } else {
            break;
        }
    }

    return newFriend;
}

let Result = oddFriend(friends);
console.log(Result);