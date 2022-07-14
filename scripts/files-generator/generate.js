const fs = require("fs");
const path = require("path");

const { prompt, Select } = require("enquirer");
const { render } = require("template-file");

const recursiveFileList = require("../_utils/recursiveFileList");

const SRC_PATH = path.join(__dirname, "../../", "src");
const FILE_BASE_NAME = "__base__";

const argvs = (() => {
  return process.argv.slice(2).reduce((prev, curr) => {
    const [key, value] = curr.split("=");
    prev[key] = value;
    return prev;
  }, {});
})();

const uppercaseFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const styledNameModifier = (str) => `Styled${uppercaseFirstLetter(str)}`;

const fileTypes = [
  {
    name: "Styled",
    templates: "./templates/styled/",
    outputBase: "components/",
    getAdditionalData: () => null,
    fileNameModifier: styledNameModifier,
    nested: false,
  },
  {
    name: "Section",
    templates: "./templates/component/",
    outputBase: "sections/",
    getAdditionalData: () => null,
    fileNameModifier: uppercaseFirstLetter,
    nested: true,
    createSubdirs: ["styled"],
  },
  {
    name: "Component",
    templates: "./templates/component/",
    outputBase: "components/",
    getAdditionalData: () => null,
    fileNameModifier: uppercaseFirstLetter,
    nested: true,
    createSubdirs: ["styled"],
  },
  {
    name: "Content file",
    templates: "./templates/content/",
    outputBase: "content/",
    getAdditionalData: () => null,
    fileNameModifier: (name) => name,
    nested: false,
  },
];

const fileTypePrompt = new Select({
  name: "fileType",
  message: "What do you want to generate?",
  choices: fileTypes.map(({ name }) => name),
});

const generate = ({ config, baseData, basePromptData, additionalData }) => {
  const data = {
    ...baseData,
    ...basePromptData,
    ...additionalData,
    fileName: config.fileNameModifier(basePromptData.fileName),
  };

  const dirname = argvs.PATH
    ? path.resolve(SRC_PATH, argvs.PATH)
    : path.resolve(
        SRC_PATH,
        config.outputBase,
        data.subPath,
        config.nested ? data.fileName : ""
      );
  if (!fs.existsSync(dirname) && config.nested) fs.mkdirSync(dirname);
  if (config.createSubdirs) {
    config.createSubdirs.forEach((subdir) =>
      fs.mkdirSync(path.resolve(dirname, subdir))
    );
  }

  const templatesPath = path.resolve(__dirname, config.templates);
  const filesToGenerate = recursiveFileList(templatesPath);
  filesToGenerate.forEach((file) => {
    const content = render(require(file), data);
    let fileName = path.basename(file).replace(FILE_BASE_NAME, data.fileName);

    fs.writeFileSync(path.resolve(dirname, fileName), content);
  });
  console.log(`${data.fileName} was successfully generated in ${dirname}`);
};

const main = async () => {
  const chosenFileType = await fileTypePrompt.run();
  const config = fileTypes.find(({ name }) => name === chosenFileType);

  const baseData = { subPath: "" };
  const basePromptData = await prompt([
    {
      type: "input",
      name: "fileName",
      message: "Provide file name",
    },
  ]);

  const additionalData = await config.getAdditionalData();

  if (basePromptData.fileName.includes(",")) {
    basePromptData.fileName
      .split(",")
      .map((name) => name.trim())
      .forEach((component) => {
        const basePromptDataOverride = { ...baseData, fileName: component };
        generate({
          config,
          baseData,
          basePromptData: basePromptDataOverride,
          additionalData,
        });
      });
  } else {
    generate({ config, baseData, basePromptData, additionalData });
  }
};

main();
