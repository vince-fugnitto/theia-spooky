/**
 * Generated using theia-extension-generator
 */

import { SpookyCommandContribution, SpookyMenuContribution } from './spooky-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(SpookyCommandContribution);
    bind(MenuContribution).to(SpookyMenuContribution);
    
});