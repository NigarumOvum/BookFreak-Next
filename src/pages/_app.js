
// global css
import '../../styles/globals/globals.css'

// font css
import '../../styles/globals/font.css'

// header css
import '../../styles/header/header.css'
import '../../styles/header/mininavs.css'
import '../../styles/header/bookoftheday.css'
import '../../styles/header/midmenu.css'
import '../../styles/header/burger-btn.css'

// featured books css
import '../../styles/featuredbooks/featuredbooks.css'

// footer css
import '../../styles/footer/footer.css'
import '../../styles/footer/footerlink.css'

// not found css
import '../../styles/notfound/notfound.css'

// indftbooks
import '../../styles/IndFtBooks/indftbooks.css'
import '../../styles/IndFtBooks/menu_breadcrumb.css'
import '../../styles/IndFtBooks/sidenavs.css'
import '../../styles/IndFtBooks/bookoftheday.css'
import '../../styles/IndFtBooks/featuredcatbooks.css'

// explore css
import '../../styles/explore/explore.css'

// indbksel
import '../../styles/indbksel/indbksel.css'
import '../../styles/indbksel/gridbook.css'
import '../../styles/indbksel/listbook.css'
import '../../styles/indbksel/pagination.css'

// book details
import '../../styles/books/bookdetails.css'
import '../../styles/books/recommendedbooks.css'

import {BookDataContext} from '../utils/contextapi/context'

function MyApp({ Component, pageProps }) {

  return (
    <BookDataContext>
      <Component {...pageProps} />
    </BookDataContext>
  )
}

export default MyApp
