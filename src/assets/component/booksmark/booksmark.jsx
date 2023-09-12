import ShowBokMark from "../ShowBookMark/ShowBokMark";
import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';
const BooksMark = ({ bookMarks, readingTime }) => {
    return (
        <div>
            <div>
                <h2 
                className="text-center text-2xl bg-slate-200 rounded-md py-3 mb-5"
                >reading time: {readingTime} minute</h2>
            </div>
            <h2 className="text-center text-2xl">Book-Mark:{bookMarks.length}</h2>
            <div>
                {
                    bookMarks.map((bookmark) => <ShowBokMark key={bookmark.id} bookmark={bookmark}></ShowBokMark>)
                }
            </div>
        </div>
    );
};

BooksMark.propTypes = {
    bookMarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default BooksMark;