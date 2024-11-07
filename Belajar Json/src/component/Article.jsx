
// const ArticleStatus = ({ isNew }) => {
//     return isNew && <span>--Baru</span>;
// };

const NewArticle = ({ isNew }) => {
    return <span style={{ color: "lightblue", fontStyle: "italic" }}>--New</span>
}
function Article(props) {
    return (
        <>

            <div> <h2>{props.title}</h2>
            </div>
            <small>Date:{props.date}, tags : {props.tags.join(", ")}{" "}
                {props.isNew && <NewArticle />}
                {/* <ArticleStatus isNew={props.isNew} /> */}
                {/* {props.isNew ? "--Baru" : "lama"} */}
                {/* {props.isNew ? "--Baru" : " "} */}


            </small>
        </>
    );
}


export default Article;