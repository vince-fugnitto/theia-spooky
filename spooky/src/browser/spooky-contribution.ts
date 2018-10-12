import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const SpookyCommand = {
    id: 'Spooky.command',
    label: "Shows a message"
};

@injectable()
export class SpookyCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(SpookyCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class SpookyMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: SpookyCommand.id,
            label: 'Say Hello'
        });
    }
}