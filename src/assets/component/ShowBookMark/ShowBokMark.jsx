import PropTypes from 'prop-types';

const ShowBokMark = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <div className="">
            <div className='rounded-2xl bg-slate-200'>
                <h2 className='px-5 py-4  mt-2 text-xl '>{title}</h2>
            </div>
        </div>
    );
};

ShowBokMark.propTypes = {
    bookmark: PropTypes.array
};

export default ShowBokMark;