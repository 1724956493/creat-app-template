const inquirer = require("inquirer");

module.exports = async function () {
  const { source } = await inquirer.prompt([
    {
      type: "list",
      name: "source",
      message: "请选择模版",
      choices: ["Vue2", "风云-智慧城市前端开发模板", "uniapp"],
    },
  ]);
  return new Promise((resolve, reject) => {
    switch (source) {
      case "Vue2":
        resolve("direct:https://gitee.com/ryfn-lip/app-template-vue2.git");
        break;
      case "风云-智慧城市前端开发模板":
        resolve(
          "direct:http://fy-part2-gitlab.cnsaas.com/project-library/XM-YX-202203-5013/economic-web-demo.git"
        );
        break;
      case "uniapp":
        resolve("direct:https://gitee.com/ryfn-lip/app-template-uniapp.git");
        break;
      default:
        reject("选择模版错误");
    }
  });
};
