
declare class EmojiView extends UIView {

	static alloc(): EmojiView; // inherited from NSObject

	static appearance(): EmojiView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): EmojiView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): EmojiView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): EmojiView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): EmojiView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): EmojiView; // inherited from UIAppearance

	static new(): EmojiView; // inherited from NSObject

	delegate: EmojiViewDelegate;

	constructor(o: { keyboardSettings: KeyboardSettings; });

	initWithKeyboardSettings(keyboardSettings: KeyboardSettings): this;
}

interface EmojiViewDelegate {

	emojiViewDidPressChangeKeyboardButton(emojiView: EmojiView): void;

	emojiViewDidPressDeleteBackwardButton(emojiView: EmojiView): void;

	emojiViewDidPressDismissKeyboardButton(emojiView: EmojiView): void;

	emojiViewDidSelectEmojiEmojiView(emoji: string, emojiView: EmojiView): void;
}
declare var EmojiViewDelegate: {

	prototype: EmojiViewDelegate;
};

declare var ISEmojiViewVersionNumber: number;

declare var ISEmojiViewVersionString: interop.Reference<number>;

declare class KeyboardSettings extends NSObject {

	static alloc(): KeyboardSettings; // inherited from NSObject

	static new(): KeyboardSettings; // inherited from NSObject

	countOfRecentsEmojis: number;

	isShowPopPreview: boolean;

	needToShowAbcButton: boolean;

	updateRecentEmojiImmediately: boolean;
}
