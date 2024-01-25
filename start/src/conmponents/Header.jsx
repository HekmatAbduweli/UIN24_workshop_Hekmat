export default function Header() {
  return (
    <header>
      <img
        id="logo"
        src="website_images/LD_logo.svg"
        alt="LEGOdudes nettbutikk"
      />
      <button id="carttoggle">
        <span id="cartcount">99</span>
        <img
          id="carticon"
          src="website_images/legocart.svg"
          alt="Din handlevogn"
        />
      </button>
      <section id="cart">
        <ul id="cartlist">
          <li>
            <span className="title">Produkttittel</span>
            <span className="price">89,-</span>
            <span className="quantity">x1</span>
            <span className="functions">
              <button>X</button>
            </span>
          </li>
          <li>
            <span className="title">Wengestone warriors</span>
            <span className="price">9989,-</span>
            <span className="quantity">x333</span>
            <span className="functions">
              <button>X</button>
            </span>
          </li>
        </ul>
      </section>
    </header>
  );
}