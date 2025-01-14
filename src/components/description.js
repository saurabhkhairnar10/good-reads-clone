import Author from "./AuthorSection";
import { Heading2 } from "./heading";
import Paragraph from "./paragraph";
import { constants } from "../constants";
function Description(props){
    console.log(props.data.data.description)
    return (<>
    <div className="gr-desc">
    <Heading2 text={props.data.data.isbn}></Heading2> 
    <Author></Author>
    <div className="description">
        <Paragraph text={constants.p1}></Paragraph>
        <Paragraph text={constants.p2}></Paragraph>
        <Paragraph text={constants.p3}></Paragraph>
    </div>
</div>
    </>)
}
export default Description;