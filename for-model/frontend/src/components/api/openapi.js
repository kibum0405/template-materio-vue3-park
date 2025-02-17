forEach: Model
fileName: openapi.js
---
{{#boundedContexts}}
    {{#aggregates}}
import {{nameCamelCase}}Yaml from "./{{nameCamelCase}}-openapi.yaml";
    {{/aggregates}}
{{/boundedContexts}}
import YAML from "json2yaml";

let apiSpec = "";

{{#boundedContexts}}
    {{#aggregates}}
let {{nameCamelCase}}Spec = YAML.stringify({{nameCamelCase}}Yaml);
apiSpec += {{nameCamelCase}}Spec;

    {{/aggregates}}
{{/boundedContexts}}

export default apiSpec;