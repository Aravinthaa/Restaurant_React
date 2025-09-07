//Anout Us//

function About(){
  return(
    <div class="section-six">
        <h2 class="section-six__title">Contact Us</h2>
        <form class="section-six__form">
            <table class="section-six__table">
                <tr>
                    <td>Name:</td> <td><input type="text" placeholder="Name"></input></td>
                </tr>
                <tr>
                    <td>Age:</td> <td><input type="number" placeholder="Age"></input></td>
                </tr>
                <tr>
                    <td>Email:</td> <td><input type="email" placeholder="Email"></input></td>
                </tr>
                 
            </table>
           
        </form>
        <p class="section-six__desc">send</p>
    </div>
  )
}

export{About}