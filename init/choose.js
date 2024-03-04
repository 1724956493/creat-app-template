const inquirer = require("inquirer");

module.exports = async function () {
  const { source } = await inquirer.prompt([
    {
      type: "list",
      name: "source",
      message: "请选择模版",
      choices: [
        "Vue2",
        "Vue3",
        "风云-智慧城市前端开发模板",
        "uniapp-vue2",
        "uniapp-vue3",
      ],
    }
  ]);
  return new Promise((resolve, reject) => {
    switch (source) {
      case "Vue2":
        resolve("direct:https://gitee.com/ryfn-lip/app-template-vue2.git");
        break;
      case "Vue3-PC":
        resolve("direct:https://gitee.com/ryfn-lip/app-template-vue3.git#pc");
        break;
      case "Vue3-Mobile":
        resolve(
          "direct:https://gitee.com/ryfn-lip/app-template-vue3.git#mobile"
        );
        break;
      case "风云-智慧城市前端开发模板":
        resolve(
          "direct:http://fy-part2-gitlab.cnsaas.com/project-library/XM-YX-202203-5013/economic-web-demo.git"
        );
        break;
      case "uniapp-vue2":
        resolve("direct:https://gitee.com/ryfn-lip/app-template-uniapp.git");
        break;
      case "uniapp-vue3":
        resolve(
          "direct:https://gitee.com/ryfn-lip/app-template-uniapp.git#vue3"
        );
        break;
      default:
        reject("选择模版错误");
    }
  });
};
