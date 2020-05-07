//const fs=require('fs');
const note=require('./notes.js');
const color=require('chalk');
const yargs=require('yargs');
//var qw=note();

//console.log(note);


//console.log(color.green('Hao yaar'));


yargs
.command({
    command:'add',
    describe:'add krne k liye',
    builder:{
        title:{
            describe:'new option',
        demandOption:true,
        type: "string"
    },
    author:{
        describe:'name of the creator',
        demandOption:true,
        type:"string"
    }
    },
    handler:function(argv){
        console.log('Title:'+argv.title);
        console.log('Author:'+argv.author);
    }
    
})


yargs
.command({
    command:'list',
    describe:'list krne k liye',
    
    
    handler:function(argv){
        console.log('list wala part',argv);
    }
    
})

yargs
.command({
    command:'read',
    describe:'read krne k liye,duh',
    
    handler:function(argv){
        console.log('read',argv);
    }
    
})







//yargs.parse();
//console.log(process.argv);
console.log(yargs.argv);
//var qw=window.prompt("idhr");



/*fs.writeFileSync('notes.txt','This is it.');
fs.writeFileSync('notes.txt','This is itttt.');

var fd=fs.openSync('notes.txt','a')
fs.appendFileSync(fd,'changes to onlz')*/