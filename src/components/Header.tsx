type Props = {
    title?: string
}

export const Header = ({title='Oi'}:Props) => {
    return (
        <header>
            <h1>{title}</h1>
            <hr />
        </header>
    );
}