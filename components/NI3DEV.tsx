import { EncryptedText } from "./ui/encrypted-text"
import { SparklesText } from "./ui/sparkles-text"
import { TextHoverEffect } from "./ui/text-hover-effect"

const NI3DEV = () => {
    return (
        <div >
            <div className="flex text-3xl items-center justify-center">
                <EncryptedText text="Wait for it... Hover over the text" />
            </div>
            <TextHoverEffect text="NI3DEV" duration={2} automatic={true} />
        </div>
    )
}

export default NI3DEV