import { Rule,Tree,SchematicContext } from '@angular-devkit/schematics'
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks'

export function ngAdd() : Rule{
    return (tree:Tree,context:SchematicContext) => {
        context.logger.info('Adding necessary Stylesheet');
        context.addTask(new NodePackageInstallTask());
        const sourceText = tree.read('angular.json')!.toString('utf-8');
		const json = JSON.parse(sourceText);

        let projects =json['projects'];

        for(let key in projects){
            if(projects[key]?.architect?.build?.options?.styles)
                projects[key]?.architect?.build?.options?.styles.push('node_modules/ngx-loading-placeholder/src/style.scss');
        }

		tree.overwrite('angular.json', JSON.stringify(json, null, 2));
        return tree;
    }
}