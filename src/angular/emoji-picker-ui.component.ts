import { Component , OnInit, ViewChild} from '@angular/core';
import { EmojiPickerUi, EmojiLabel } from "../../src";

@Component({
    selector: "EmojiPickerUIComponent",
    template: `
        <StackLayout>
            <Button text="lala" (tap)="open()"></Button>
            <ng-content>
                
            </ng-content>
                        <EmojiPickerUI #myEmojiPicker></EmojiPickerUI>
        </StackLayout>

    `
})

export class EmojiPickerUIComponent implements OnInit {
    @ViewChild("myEmojiPicker", { static: false }) public myEmojiPicker: EmojiPickerUi;
    @ViewChild("myEmojiLabel", { static: true }) public myEmojiLabel: EmojiLabel;

    open() {
        this.myEmojiPicker.nativeElement.togglePopup();
    }
}


