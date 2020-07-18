import { Component , OnInit, ViewChild} from '@angular/core';
import { EmojiPickerUI, EmojiLabelUI } from "nativescript-emoji-picker-ui";

@Component({
    selector: "EmojiPickerUIComponent",
    template: `
        <StackLayout>
            <Button text="lala" (tap)="open()"></Button>
                        <EmojiPickerUI #myEmojiPicker></EmojiPickerUI>
<!--            <EmojiLabelUI #myEmojiLabel text="Have fun with the nativescript-emoji-picker😃"></EmojiLabelUI>-->
        </StackLayout>

    `
})

export class EmojiPickerUIComponent implements OnInit {
    @ViewChild("myEmojiPicker", { static: false }) public myEmojiPicker: EmojiPickerUI;
    @ViewChild("myEmojiLabel", { static: true }) public myEmojiLabel: EmojiLabelUI;

    open() {
        this.myEmojiPicker.nativeElement.togglePopup();
    }
}


