const fs = require('fs');

// reading files
// fs.readFile('./blogs1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// writing files
// fs.writeFile('./blogs1.txt', 'new content',(err, data) => {
//     console.log('file was written');
// });

// fs.writeFile('./blogs2.txt', 'new content 2',(err, data) => {
//     console.log('file was written');
// });

// directories create/delete
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }

// delete files
if(fs.existsSync('./blogs2.txt')){
    fs.unlink('./blogs2.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    });
}
