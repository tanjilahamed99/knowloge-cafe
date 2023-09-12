// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Blogs from './assets/component/blogs/blogs'
import BooksMark from './assets/component/booksmark/booksmark'
import Header from './assets/component/header/header'

function App() {

  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const bookHandler = blog => {
    const newBookMark = [...bookMarks, blog];
    setBookMarks(newBookMark);
  }

  const handleReadingTime = (id, reading_time) => {
    setReadingTime(readingTime + reading_time)

    // remove items
    // console.log('remove', id);
    const setBookMark = bookMarks.filter((book) => book.id !== id)
    setBookMarks(setBookMark)
  }

  return (
    <>
      <Header></Header>
      <div className='container mx-auto flex gap-5'>
        <Blogs
          bookHandler={bookHandler}
          handleReadingTime={handleReadingTime}
        ></Blogs>

        <div className="bg-gray-300 p-4 w-[30%]">
          <BooksMark
            bookMarks={bookMarks}
            readingTime={readingTime}
          ></BooksMark>
        </div>
      </div>
    </>
  )
}

export default App
