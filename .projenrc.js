const { AwsCdkTypeScriptApp } = require('projen');

const AUTOMATION_TOKEN = 'PROJEN_GITHUB_TOKEN';

const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.96.0',
  name: 'aws-cdk-serverless-sample',
  authorName: 'Pahud Hsieh',
  authorEmail: 'pahudnet@gmail.com',
  repository: 'https://github.com/pahud/aws-cdk-serverless-sample.git',
  dependabot: false,
  defaultReleaseBranch: 'main',
  devDeps: ['projen-automate-it'],
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-apigatewayv2',
    '@aws-cdk/aws-apigatewayv2-integrations',
    '@aws-cdk/aws-codepipeline',
    '@aws-cdk/aws-codepipeline-actions',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/pipelines',
  ],
});

const common_exclude = ['cdk.out', 'cdk.context.json', '.venv', 'images', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();
