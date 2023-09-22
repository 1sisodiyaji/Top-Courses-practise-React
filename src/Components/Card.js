import react from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.lokedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev) => prev.filter((cid) !== course.id));
            toast.warning("Like removed");
        }
        else {
            if(likedCourses.length === 0){
                setLikedCourses([courses.id]);
            }
            else{
                setLikedCourses((prev) =>[...prev ,course.id]);
            }
            toast.success("Like Successfully");
        }
    }
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url}/>
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id)?(<DcLike fontSize ="1.75rem"/>): (<FcLikePlaceholder fontSize = "1.75rem"/>)
                        }

                    </button>
                </div> 
            </div>

            <div>
                <p></p>
                <p>
           {
            course.description.length > 100 ? (course.description.substr(0,100))+"...":(course.description)
           }               
            </p>
        </div>
        </div>
    )
}
export default Card;