import React, {useState} from "react"
import PropTypes from "prop-types"
import { RENDER_ATTR } from "react_ujs"

const Home = () => {
  const [currentOrder, setCurrentOrder] = useState([])
  return (
    <>
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h5 class="text-white h4">Collapsed content</h5>
        <span class="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>

    <main>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">CheeZies Pizza Store</h1>
            <p>
              {/* <%= link_to 'Create Order', new_order_path, class: 'btn btn-primary my-2' %>
              <%= link_to 'List Orders', orders_path, class: 'btn btn-secondary my-2' %> */}
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Home
