const inquirer = require('inquirer')

module.exports = async function () {
    const { source } = await inquirer.prompt([{
        type: 'list',
        name: 'source',
        message: '请选择模版',
        choices: ["Vue2", "uniapp"]
    }]);
    return new Promise((resolve, reject) => {
        if (source === 'Vue2') {
            resolve("direct:https://gitee.com/ryfn-lip/app-template-vue2.git")
        } else {
            reject('选择模版错误')
        }
    })
}