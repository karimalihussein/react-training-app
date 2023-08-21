interface Props {
    cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
    return (
        <nav>
            <h1>Shop</h1>
            <p>Cart: {cartItemsCount}</p>
        </nav>
    )
};

export default NavBar;
