#!/usr/bin/env node
const inquirer = require("inquirer");

const exec = (shell)=>{
    return new Promise( (resolve, reject)=>{
        require( "child_process" ).exec( shell, (error, stdout, stderr)=>{
            if( error ){
                console.log( "执行脚本: ", shell, " 失败;", "stderr: ", stderr )
                return reject( false )
            }else{
                console.log( "执行脚本: ", shell, " 成功;")
                console.log( stdout )
                return resolve(true)
            }
        } )
    } )
}


;( async function(){
    const cmd = new Proxy( function(){
        const program = require('commander');
        program
            .version('1.0.0')
            .name( "cli" )
            .usage( "--bin command" )
            .description( `
cli -b create-docker-server     创建docker项目
cli -b create-full-app          创建全栈项目
cli -b create-npm-app           创建ESModule npm项目
cli -b create-react-app         创建react项目
cli -b create-sse-app           创建sse项目
cli -b create-commonjs-app      创建express项目
cli -b command                  执行shell命令
            ` )
            .option('-b --bin <string>', '请选择要执行的脚本', "command" )
            .parse(process.argv);
        return program.opts();
    }, {apply: (...args)=> {
        const ANS = Reflect.apply( ...args )
        console.log( "================================================START=====================================================" )
        console.log( "current command: ", ANS.bin )
        console.log( "=================================================END======================================================" )
        return ANS;
    } } )();
    switch( true ){
        case cmd.bin === "create-docker-server":
            await new Proxy( function(){
                const date = new Date();
                const fileDir = `${cmd.bin}-${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
                return inquirer.prompt([
                    {
                      name: "fileDir",
                      message: `请输入要项目名称： `,
                      type: "input",
                      default: fileDir,
                    },
                ]);
            }, {apply: async function(...args){
                const param = await Reflect.apply( ...args )
                await exec(`git clone git@github.com:chenshengda0/create-project.git ${param.fileDir}`);
                await exec(`cd ${param.fileDir} &&  git fetch origin create-docker-server && git checkout -b create-docker-server origin/create-docker-server`);
                await exec(`cd ${param.fileDir} && git config --add core.filemode false`)
                await exec(`chmod -R 777 ${param.fileDir}`)
                await exec(`cd ${param.fileDir}/Runtime && docker-compose up -d --build`)
                await exec(`cd ${param.fileDir} && git config -l && git branch`)
                await console.log( `初始化项目${param.fileDir}成功` )
            }} )()
            break;
        case cmd.bin === "create-full-app":
            await new Proxy( function(){
                const date = new Date();
                const fileDir = `${cmd.bin}-${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
                return inquirer.prompt([
                    {
                      name: "fileDir",
                      message: `请输入要项目名称： `,
                      type: "input",
                      default: fileDir,
                    },
                ]);
            }, {apply: async function(...args){
                const param = await Reflect.apply( ...args )
                await exec(`git clone git@github.com:chenshengda0/create-project.git ${param.fileDir}`);
                await exec(`cd ${param.fileDir} &&  git fetch origin create-full-app && git checkout -b create-full-app origin/create-full-app`);
                await exec(`cd ${param.fileDir}/Source && yarn`)
                await exec(`cd ${param.fileDir}/api && yarn`)
                await exec(`cd ${param.fileDir}/web && yarn`)
                await exec(`cd ${param.fileDir} && git config --add core.filemode false`)
                await exec(`chmod -R 777 ${param.fileDir}`)
                await exec(`cd ${param.fileDir}/Runtime && docker-compose up -d --build`)
                await exec(`cd ${param.fileDir} && git config -l && git branch`)
                await console.log( `初始化项目${param.fileDir}成功` )
            }} )()
            break;
        case cmd.bin === "create-npm-app":
            await new Proxy( function(){
                const date = new Date();
                const fileDir = `${cmd.bin}-${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
                return inquirer.prompt([
                    {
                      name: "fileDir",
                      message: `请输入要项目名称： `,
                      type: "input",
                      default: fileDir,
                    },
                ]);
            }, {apply: async function(...args){
                const param = await Reflect.apply( ...args )
                await exec(`git clone git@github.com:chenshengda0/create-project.git ${param.fileDir}`);
                await exec(`cd ${param.fileDir} &&  git fetch origin create-npm-app && git checkout -b create-npm-app origin/create-npm-app`);
                await exec(`cd ${param.fileDir}/my-npm && yarn`)
                await exec(`cd ${param.fileDir} && git config --add core.filemode false`)
                await exec(`chmod -R 777 ${param.fileDir}`)
                await exec(`cd ${param.fileDir} && git config -l && git branch`)
                await console.log( `初始化项目${param.fileDir}成功` )
            }} )()
            break;
        case cmd.bin === "create-react-app":
            await new Proxy( function(){
                const date = new Date();
                const fileDir = `${cmd.bin}-${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
                return inquirer.prompt([
                    {
                      name: "fileDir",
                      message: `请输入要项目名称： `,
                      type: "input",
                      default: fileDir,
                    },
                ]);
            }, {apply: async function(...args){
                const param = await Reflect.apply( ...args )
                await exec(`git clone git@github.com:chenshengda0/create-project.git ${param.fileDir}`);
                await exec(`cd ${param.fileDir} &&  git fetch origin create-react-app && git checkout -b create-react-app origin/create-react-app`);
                await exec(`cd ${param.fileDir}/web && yarn`)
                await exec(`cd ${param.fileDir} && git config --add core.filemode false`)
                await exec(`chmod -R 777 ${param.fileDir}`)
                await exec(`cd ${param.fileDir} && git config -l && git branch`)
                await console.log( `初始化项目${param.fileDir}成功` )
            }} )()
            break;
        case cmd.bin === "create-sse-app":
            await new Proxy( function(){
                const date = new Date();
                const fileDir = `${cmd.bin}-${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
                return inquirer.prompt([
                    {
                      name: "fileDir",
                      message: `请输入要项目名称： `,
                      type: "input",
                      default: fileDir,
                    },
                ]);
            }, {apply: async function(...args){
                const param = await Reflect.apply( ...args )
                await exec(`git clone git@github.com:chenshengda0/create-project.git ${param.fileDir}`);
                await exec(`cd ${param.fileDir} &&  git fetch origin create-sse-app && git checkout -b create-sse-app origin/create-sse-app`);
                await exec(`cd ${param.fileDir}/api && yarn`)
                await exec(`cd ${param.fileDir}/Source && yarn`)
                await exec(`cd ${param.fileDir}/web && yarn`)
                await exec(`cd ${param.fileDir} && git config --add core.filemode false`)
                await exec(`chmod -R 777 ${param.fileDir}`)
                await exec(`cd ${param.fileDir} && git config -l && git branch`)
                await console.log( `初始化项目${param.fileDir}成功` )
            }} )()
            break;
        case cmd.bin === "create-commonjs-app":
            await new Proxy( function(){
                const date = new Date();
                const fileDir = `${cmd.bin}-${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
                return inquirer.prompt([
                    {
                      name: "fileDir",
                      message: `请输入要项目名称： `,
                      type: "input",
                      default: fileDir,
                    },
                ]);
            }, {apply: async function(...args){
                const param = await Reflect.apply( ...args )
                await exec(`git clone git@github.com:chenshengda0/create-project.git ${param.fileDir}`);
                await exec(`cd ${param.fileDir} &&  git fetch origin create-commonjs-app && git checkout -b create-commonjs-app origin/create-commonjs-app`);
                await exec(`cd ${param.fileDir}/npm && yarn`)
                await exec(`cd ${param.fileDir} && git config --add core.filemode false`)
                await exec(`chmod -R 777 ${param.fileDir}`)
                await exec(`cd ${param.fileDir} && git config -l && git branch`)
                await console.log( `初始化项目${param.fileDir}成功` )
            }} )()
            break;
        default:
            await new Proxy( function(){
                return inquirer.prompt([
                    {
                      name: "command",
                      message: `请输入要执行的shell命令： `,
                      type: "input",
                      default: "pwd",
                    },
                ]);
            }, {apply: async function(...args){
                const param = await Reflect.apply( ...args )
                await new Promise( (resolve,reject)=>resolve(0) ).then( async()=>{
                    try{
                        await exec( param["command"] )
                    }catch(err){
                        throw err;
                    }finally{
                        console.log( "执行 Shell" )
                    }
                } ).catch( (err) => console.log(err) )
            }} )()
            break;
    }
    process.exit(0);
} )();