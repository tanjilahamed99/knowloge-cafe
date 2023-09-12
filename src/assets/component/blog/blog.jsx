import PropTypes from 'prop-types';


const Blog = ({ blog, bookHandler, handleReadingTime }) => {
    const { id,author_name, cover, author_img, title, reading_time, posted_date, hashtags } = blog
    return (
        <div className="mt-4">
            <img className="mb-6 w-full" src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <img className="w-10" src={author_img} alt="" />
                    <div>
                        <h2 className="text-2xl font-bold">{author_name}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} read</span>
                    <button onClick={() => bookHandler(blog)} className='ml-3 bg-gray-200 px-3 py-2 rounded-lg'>bookmark</button>
                </div>
            </div>
            <h2 className="my-3 text-[40px] font-bold">{title}</h2>
            {
                hashtags.map((hashtag, idx) => <span className='block' key={idx}>#{hashtag} </span>)
            }
            <button onClick={()=>handleReadingTime(id,reading_time)} className='mt-2 bg-gray-200 px-3 py-2 rounded-lg'>mark us read</button>
            <hr className="my-10" />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    bookHandler: PropTypes.func,
    handleReadingTime:PropTypes.func
}

export default Blog;