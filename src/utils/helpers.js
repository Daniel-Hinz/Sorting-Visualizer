export function generateArray() {
    let elements = [];
    let size = 55;

    for (let i = 0; i < size; ++i) {
        let element = {
            height : ((Math.random() * 90) + 10 + "%"),
            width : (100 / size + "%")
        }
        elements.push(element);
    }

    return (
        elements.map((element) => 
            <div className='element' style={{height: element.height, width: element.width}}></div>
        )
    )
}