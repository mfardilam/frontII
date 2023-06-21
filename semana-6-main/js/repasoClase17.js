let task = [
    {
        'name': 'Write for Envato',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate',
        'duration': 240
    }
]

// let taksNames = [];
// for (let i = 0; i < task.length; i++) {
//     taksNames.push(task[i].name);
// }

// task.forEach(task =>{
//     taksNames.push(task.name);
// })

// console.log(taksNames);

let taksNames = task.map(task =>task.name).join(' + ');
console.log(taksNames);

//Un map con condición
let longTasks = task.filter(task => task.duration > 60);
console.log(longTasks);