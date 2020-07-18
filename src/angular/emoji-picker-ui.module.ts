import {NgModule} from "@angular/core";
import {registerElement} from "@nativescript/angular";

import {EmojiLabelUIDirective, EmojiPickerUIDirective} from "./emoji-picker-ui.directives";
import {EmojiPickerUIComponent} from "./emoji-picker-ui.component";

@NgModule({
    declarations: [EmojiLabelUIDirective, EmojiPickerUIDirective, EmojiPickerUIComponent],
    exports: [EmojiLabelUIDirective, EmojiPickerUIDirective, EmojiPickerUIComponent],
})
export class EmojiPickerModuleUI {
}

registerElement("EmojiPickerUI", () => require("nativescript-emoji-picker-ui").EmojiPickerUI);
registerElement("EmojiLabelUI", () => require("nativescript-emoji-picker-ui").EmojiLabelUI);
