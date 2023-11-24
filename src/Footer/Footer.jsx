import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
        <div class="row">
<div class="col-xl-6 col-lg-6 text-center text-lg-left">
    <div class="copyright-text">
        <p>Copyright &copy; 2023, All Right Reserved <span>Malhaar</span></p>
    </div>
</div>
<div class="col-xl-6 col-lg-6 d-none d-lg-block text-right footer-menu">
<p>
            <Link to ='/credits'>Credits     </Link>
            <a href="#">Linktree</a></p>
           
      
   
</div>

</div>
    </div>
  )
}
