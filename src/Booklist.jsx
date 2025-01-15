import BookRow from "./BookRow"

// Mock data for books
const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", featured: true },
    { id: 2, title: "1984", author: "George Orwell", featured: false },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", featured: true },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", featured: false },
    { id: 5, title: "Moby Dick", author: "Herman Melville", featured: true }
  ];
  

export default function Booklist () {
    return (
        <>
            <BookRow />
            <BookRow />
            <BookRow />
            <BookRow />
            <BookRow />
        </>
    )
}
    
