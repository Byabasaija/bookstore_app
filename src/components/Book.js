function Book(props){

    return(
        <tr>
            <td>{props.book.id}</td>
            <td>{props.book.title}</td>
            <td>{props.book.cat}</td>
        </tr>
    );
}

export default Book;