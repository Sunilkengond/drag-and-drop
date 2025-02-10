import { ButtonMain } from './Button.styles';

export default function Button({ handleclick, label }) {
    return (
        <ButtonMain
        type="button"
        id='button'
        onClick={handleclick}>
            {label}
        </ButtonMain>
    )
};