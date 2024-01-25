
const Foot=()=>{
  return(
  <div className="">
      <h1 className="text-xl text-center font-mono font-thin w-full my4">Hi! its us devlopers of Minigeemu.This is where we make games and stuff for web</h1>
      <div id="footcard" className="flex justify-center w-full gap-3 my-4 hover:scale-110 transition delay-100 duration-300 ease-in-out">
        <div className="border-black border-2 rounded-md p-2 bg-gray-200 text-center flex justify-center" id="github">
          <a className="flex gap-3" href="github.com">
            <p className="text-l font-mono">Github</p>
            <img className="h-6" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}


export default Foot;
