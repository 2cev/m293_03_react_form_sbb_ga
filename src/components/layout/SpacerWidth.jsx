import './SpacerWidth.css';

// O_o => fncs
function setComponentInput(isVisible, isVisibleStrong, isDoubleSingle, isFullFitHeight) {
    let classCollection = '';
    if (isVisible) {
        if (isVisibleStrong) {
            classCollection += 'spacerWClrStrong '
        } else {
            classCollection += 'spacerWClr '
        }
    }
    
    classCollection += isDoubleSingle ? 'spacerWDouble ' : 'spacerW ';
    classCollection += isFullFitHeight ? 'spacerHFull ' : 'spacerHFit ';
    return classCollection;
}

export default function SpacerWidth({isVisible, isVisibleStrong, isDoubleSingle, isFullFitHeight}) {
    return (
        <>
            <div className={setComponentInput(isVisible, isVisibleStrong, isDoubleSingle, isFullFitHeight)}>&nbsp;</div>
        </>
    );
}