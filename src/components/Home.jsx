import React from 'react'
import dog from '../images/home-dog.png'

const Home = () => {
  return (
    <div className="home-content">
      <div className="home-text">
        <p>Your Pet Holds a Special Place in Your Heart.</p>
        <p>Never judging, always caring, providing that unconditional love that will be so sorely missed.
        Losing a pet and friend is difficult, and pet urns for ashes or a memorial plaque are excellent
        ways to keep the memories of your pet close.</p>
        <p>- a fitting way to commemorate that special relationship.</p>
      </div>
      <div className="home-seccol">
        <img src={dog} />
        <p>They come in all shapes and sizes, but the most important thing,
        they all hold in common
        </p>
      </div>
      <div className="home-thirdcol">
        <img className="urns" src="../images/BudUrnPic.jpg" />
        <img className="urns" src="../images/BudPlaqPic.jpg" />
      </div>
    </div>
  )
}

export default Home