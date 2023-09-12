import Profile from '../../../../images/profile.png'
const Header = () => {
    return (
        <div className="container mx-auto flex justify-between pt-10 border-b-2 pb-3 items-center" >
            <h2 className='text-3xl font-bold'>Knowledge Cafe</h2>
            <img className='w-16' src={Profile} alt="" />
        </div>
    );
};

export default Header;