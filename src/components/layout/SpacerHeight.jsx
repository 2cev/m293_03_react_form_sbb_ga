import './SpacerHeight.css';

// O_o => fncs
function setComponentInput(isVisible, isVisibleStrong, isDoubleSingle, isFullFitWidth) {
    let classCollection = '';
    if (isVisible) {
        if (isVisibleStrong) {
            classCollection += 'spacerHClrStrong '
        } else {
            classCollection += 'spacerHClr '
        }
    }
    
    classCollection += isDoubleSingle ? 'spacerHDouble ' : 'spacerH ';
    classCollection += isFullFitWidth ? 'spacerWFull ' : 'spacerWFit ';
    return classCollection;
}

export default function SpacerHeight({isVisible, isVisibleStrong, isDoubleSingle, isFullFitWidth}) {
    return (
        <>
            <div className={setComponentInput(isVisible, isVisibleStrong, isDoubleSingle, isFullFitWidth)}>&nbsp;</div>
        </>
    );
}