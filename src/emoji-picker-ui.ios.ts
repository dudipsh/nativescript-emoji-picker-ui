import { CSSType } from "@nativescript/core/ui/text-base";
import { EmojiLabel as EmojiLabelDefinition } from ".";
import { EmojiPickerUi as EmojiPickerDefinition } from ".";
import { EmojiLabelBase, EmojiPickerBase } from "./emoji-picker-ui.common";
export * from "@nativescript/core/ui/text-base";
export * from "@nativescript/core/ui/text-field/text-field";
// declare var ISEmojiView ;

@CSSType("EmojiPickerUI")
export class EmojiPickerUI extends EmojiPickerBase implements EmojiPickerDefinition {
    public initNativeView(): void {
        //
    }

    public disposeNativeView(): void {
        //
    }
}

@CSSType("EmojiLabelUI")
export class EmojiLabelUI extends EmojiLabelBase implements EmojiLabelDefinition {
    public initNativeView(): void {
        //
    }

    public disposeNativeView(): void {
        //
    }
}
