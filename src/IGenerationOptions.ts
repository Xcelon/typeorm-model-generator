export class IGenerationOptions {
    public resultsPath: string = "";
    public noConfigs: boolean = false;
    public convertCaseFile: "snake" | "pascal" | "param" | "camel" | "none" =
        "none";
    public convertCaseEntity: "snake" | "pascal" | "camel" | "none" = "none";
    public convertCaseProperty: "snake" | "pascal" | "camel" | "none" = "none";
    public propertyVisibility: "public" | "protected" | "private" | "none" =
        "none";
    public lazy: boolean = false;
    public activeRecord: boolean = false;
    public generateConstructor: boolean = false;
    public customNamingStrategyPath: string = "";
    public relationIds: boolean = false;
}
