import React from "react"
import { BulletPoint, KeyContainer } from "./styles"

function Key() {
    return (
        <KeyContainer>
            <BulletPoint $isComplete={true}>completed</BulletPoint>
            <BulletPoint $isComplete={false}>not-completed</BulletPoint>
        </KeyContainer>
    )
}

export default Key
