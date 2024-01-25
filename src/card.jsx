
const Card= (props) =>
{
  return(
  <div id="card">

     <a href={props.url}>
         <img className="rounded-xl w-full h-auto aspect-video drop-shadow-md border-4 border-black hover:scale-110 transition delay-100 duration-300 ease-in-out cursor-pointer" src={props.imgsource} alt={props.imgalt} />
      </a> 
    </div>

  )

}

Card.defaultProps={
  url:"https://placehold.co/",
  imgsource:"https://placehold.co/600x400.png",
  imgalt:"placeholder",
}
export default Card;
