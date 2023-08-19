import './style.css';

const textOptions = ['CATEGORIES', 'FAVORITES', 'MY SHELF'];

function OptionsHeader() {
    return (

        <ul className='options'>
            { textOptions.map(text => (
            <li className='option'><p>{text}</p></li>
            )) }
        </ul>
        
    )
}

export default OptionsHeader;