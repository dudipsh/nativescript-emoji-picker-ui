import { Component , OnInit, ViewChild} from '@angular/core';
import { EmojiPickerUI, EmojiLabelUI } from "nativescript-emoji-picker-ui";
import { Frame } from 'tns-core-modules/ui';

@Component({
    selector: "" +
        "EmojiPickerUIComponent",
    template: `
        <StackLayout>
            <Button text="open" (tap)="open()"></Button>
            <Button text="close" (tap)="close()"></Button>
                        <EmojiPickerUI #myEmojiPicker></EmojiPickerUI>
<!--                <TextInput></TextInput>-->
<!--            <ISEmojiView  #text></ISEmojiView>-->
        </StackLayout>

    `
})

export class EmojiPickerUIComponent   {
    @ViewChild("myEmojiPicker", { static: false }) public myEmojiPicker: EmojiPickerUI;
    @ViewChild("myEmojiLabel", { static: true }) public myEmojiLabel: EmojiLabelUI;
    @ViewChild("text", { static: false }) public text;

    public open() {
        console.log('123')
        this.myEmojiPicker.nativeElement.togglePopup()
       //  console.log( this.text.nativeElement)
       // this.text.nativeElement.addChild(view);
    }

    close(): string {
        this.myEmojiPicker.nativeElement.close()
        return  this.myEmojiPicker.nativeElement.text
    }
}


