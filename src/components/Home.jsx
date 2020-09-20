import React from 'react'
// import dog from '../images/home-dog.png'

const Home = () => {
  return (
    <div className="row home-content">
      <div className="home-text col col-sm-12 col-lg-4">
        <div>Your Pet Holds a Special Place in Your Heart.</div>
        <div>Never judging, always caring, providing that unconditional love that will be so sorely missed.
        Losing a pet and friend is difficult, and pet urns for ashes or a memorial plaque are excellent
        ways to keep the memories of your pet close.</div>
        <p>- a fitting way to commemorate that special relationship.</p>
      </div>
      <div className="home-seccol col col-sm-12 col-lg-4">
        <img src="../images/home-dog.png" className="urns" />
        <p>They come in all shapes and sizes, but the most important thing,
        they all hold in common
        </p>
      </div>
      <div className="home-thirdcol col col-sm-12 col-lg-3">
        <img className="urns" src="../images/BudUrnPic.jpg" />
        <img className="urns" src="../images/BudPlaqPic.jpg" />
      </div>
    </div>
  )
}

export default Home