import { CSSType } from "@nativescript/core/ui/text-base";
import { EmojiLabelUI as EmojiLabelDefinition } from ".";
import { EmojiPickerUI as EmojiPickerDefinition } from ".";
import { EmojiLabelBase, EmojiPickerBase } from "./emoji-picker-ui.common";
import { View} from "tns-core-modules/ui/core/view";
export * from "@nativescript/core/ui/text-base";
export * from "@nativescript/core/ui/text-field/text-field";


// declare var ISEmojiView ;

//declare var ISEmojiViewDelegate;

@ObjCClass(EmojiView)
class EmojiViewDelegateImpl1 extends NSObject implements EmojiViewDelegate {
    static ObjCProtocols = [EmojiViewDelegate];

    static new(): EmojiViewDelegateImpl1 {
        return <EmojiViewDelegateImpl1>super.new(); // calls new() on the NSObject
    }
    emojiViewDidPressChangeKeyboardButton(emojiView: EmojiView): void {
    }

    emojiViewDidPressDeleteBackwardButton(emojiView: EmojiView): void {
    }

    emojiViewDidPressDismissKeyboardButton(emojiView: EmojiView): void {
    }

    emojiViewDidSelectEmojiEmojiView(emoji: string, emojiView: EmojiView): void {
    }

}


// @CSSType("EmojiPickerUI")
export class EmojiPickerUI extends View  {
    delegate: EmojiViewDelegateImpl1;
    constructor() {
        super();
        this.showKeyboard();
    }

    showKeyboard() {
        //       let emojiView =  EmojiView.alloc().init();

        //nativeView.delegate = this.delegate;

        // const navigationController = UINavigationController.new().initWithRootViewController(
        //     //nativeView,
        // );

      //  const currentViewController = Frame.topmost().viewController as UIViewController;
       // return nativeView;
        // currentViewController.presentViewControllerAnimatedCompletion(
        //     navigationController,
        //     true,
        //     () => {
        //         // TODO: Pending of implementation
        //         console.log('Date Picker presented');
        //     },
        // );
        // currentViewController['allowsMultipleSelection'] = false;
    }

    public initNativeView(): void {
        //
    }

    public disposeNativeView(): void {
        //
    }

    public togglePopup() {
    }

}

@CSSType("EmojiLabelUI")
export class EmojiLabelUI extends EmojiLabelBase implements EmojiLabelDefinition {
    public initNativeView(): void {


        // emojiView.delegate = self
        // textView.inputView = emojiView


        //
    }

    public disposeNativeView(): void {
        //
    }
}

