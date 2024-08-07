import fs from 'fs';
import { join, basename, extname } from 'path';
import yaml from 'js-yaml';

let cachedConfigurations = null;

const pushTheValues = (configFolderPath) => {
    const configuration = {};
    const fileNames = fs.readdirSync(configFolderPath);

    fileNames.forEach(filename => {
        const filePath = join(configFolderPath, filename);
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
            const fileExt = extname(filename).toLowerCase();
            if (fileExt === '.yaml' || fileExt === '.yml') {
                try {
                    const fileContents = fs.readFileSync(filePath, 'utf-8');
                    const config = yaml.load(fileContents);
                    configuration[basename(filePath, fileExt)] = config;
                } catch (error) {
                    console.error(`Error reading or parsing YAML file ${filePath}:`, error);
                    throw new Error(error);
                }
            } else {
                console.error(`Unsupported file type ${fileExt} for file ${filename}. Only YAML files are supported.`);
                throw new Error('Try to fix it.');
            }
        } else if (stats.isDirectory()) {
            configuration[filename] = pushTheValues(filePath);
        }
    });

    return configuration;
};

const serveYamlConfigurations = (configFolderPath) => {
    if (!cachedConfigurations) {
        try {
            cachedConfigurations = pushTheValues(configFolderPath);
        } catch (error) {
            console.error('Error occurred while reading configurations:', error);
            throw new Error(error);
        }
    }
    return cachedConfigurations;
};

export default serveYamlConfigurations;
