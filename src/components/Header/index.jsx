import { PaperAirplaneIcon, Bars4Icon } from '@heroicons/react/24/outline'


export function Header() {



    function handleMenu(){ 
    const menu = document.querySelector(".mobile-menu")
    menu.classList.toggle("hidden")
  }

  return (

    <div className="min-h-full">
      <nav className='bg-gray-100 px-4' >
        <div className='max-w-6xl mx-auto'>
          <div className='flex justify-between'>

            <div className='flex space-x-4'>
              {/* logo */}
              <div >
                <a className='flex items-center py-5 px-2 text-gray-700' href="#">
                  <PaperAirplaneIcon className='h-6 w-6 text-blue-400' />


                  <h1 className='font-bold ml-2'>Frantec Dev</h1>
                </a>


              </div>
              {/* primary nav */}
              <div className='hidden md:flex items-center space-x-1'>
                {[
                  ['Home', '/dashboard'],
                  ['Team', '/team'],


                ].map(([title, url]) => (

                  <a key={title} href={url} className="py-5 px-3 text-gray-600  hover:text-gray-900">{title}</a>

                ))}

              </div>
            </div>

            {/* secondar navy */}
            <div className='hidden md:flex items-center space-x-1'>


              {[
                ['Login', '/login'],



              ].map(([title, url]) => (

                <a key={title} href={url} className="py-5 px-3 text-gray-700">{title}</a>

              ))}
              <a href="#" className="py-2 px-3 text-gray-700 hover:bg-yellow-300 bg-yellow-400 text-yellow-900 hover:text-white rounded transition duration-300">Singup</a>
            </div>

            {/* mobile buton */}

            <div className='md:hidden flex items-center'>
              <button className='mobile-menu-button' onClick={handleMenu}>
                <Bars4Icon className='h-6 w-6 text-blue-400' />
              </button>

            </div>

          </div>

        </div>

        {/* mobile menu */}

        <div className='mobile-menu pb-3 hidden md:hidden'>
          {[
            ['Home', '/dashboard'],
            ['Team', '/team'],


          ].map(([title, url]) => (

            <a key={title} href={url} className="block py-2 px-4 text-sm hover:bg-gray-300 rounded">{title}</a>

          ))}
        </div>

    

    


      </nav>
    

    </div>

  )
}


