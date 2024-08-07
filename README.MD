# serve-yaml 🚀

`serve-yaml` is a Node.js module designed to effortlessly read and process configuration files from a directory. 📂 It supports reading YAML files 📄 and organizing configurations into a nested structure based on directory and file names. 🏗️

## Features ✨

- Recursively reads configuration files from a directory. 🔍
- Supports YAML file format.  YAML 🤘
- Organizes configurations in a nested structure based on directory structure. 📦

## Installation ⬇️
``` yarn add serve-yaml```
#### OR
```npm install serve-yaml```

## Usage

### Importing module
```javascript
import SYC from 'serve-yaml';
```
### Loading configuration

```javascript
const configFolderPath = 'YOUR_CONFIG_FOLDER_PATH';
const configurations = SYC(configFolderPath);
console.log(configurations);
```
## API📚

### `serveYamlConfigurations(configFolderPath: string): object`

**Parameters:**

- `configFolderPath` (string): Path to the directory containing configuration files.📁

**Returns:**

- An object containing the configurations organized in a nested structure.🌳