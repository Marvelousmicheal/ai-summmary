
import {logo} from "../assets"
function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>

<img src={logo} alt="logo" className='w-28 object-contain'  />
<button type="button"  className='black_btn' onClick={()=>window.open("https://github.com/TidbitsJS/Summize", "_blank")}>
GitHub
</button>

        </nav>
        <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero