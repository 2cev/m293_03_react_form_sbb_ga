import './SpacerHeight.css';

// O_o => fncs
function setComponentInput(isVisible, isVisibleStrong, isDoubleSingle, isFullFitWidth) {
    let classCollection = '';
    if (isVisible) {
        if (isVisibleStrong) {
            classCollection += 'SpacerClrStrong '
        } else {
            classCollection += 'SpacerClr '
        }
    }
    
    classCollection += isDoubleSingle ? 'SpacerHDouble ' : 'SpacerH ';
    classCollection += isFullFitWidth ? 'SpacerWFull ' : 'SpacerWFit ';

    console.log('// O_o :: ' +classCollection);

    return classCollection;
}

export default function SpacerHeight({isVisible, isVisibleStrong, isDoubleSingle, isFullFitWidth}) {

    return (
        <>
            <div className={setComponentInput(isVisible, isVisibleStrong, isDoubleSingle, isFullFitWidth)}>&nbsp;</div>
        </>
    );
}