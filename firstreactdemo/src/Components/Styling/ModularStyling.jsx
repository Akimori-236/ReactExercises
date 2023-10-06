import myStyle from "./modularstyle.module.css"

export function ModularStyling() {
    return <>
        <div className={myStyle.redtext + " anotherClass"}>Hello CSS Modules</div>
        <div className={`${myStyle.redtext} anotherClass class3`}>Hello CSS Modules</div>
    </>
}