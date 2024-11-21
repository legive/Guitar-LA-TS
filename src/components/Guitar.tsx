import type { Guitar } from "../types/index";

type GuitarProps = {
  guitar: Guitar;
  addToCart: (item: Guitar) => void;
};

//sintaxis inline type
// export default function Guitar({ guitar, addToCart }: { guitar: Guitar, addToCart: (item: Guitar) => void }) {

export default function Guitar({ guitar, addToCart }: GuitarProps) {
  const { id, name, image, description, price } = guitar;

  return (
    <div key={id} className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button
          // se poner el callback para que solo se ejecute al ocurrir el evento
          onClick={() => addToCart(guitar)}
          type="button"
          className="btn btn-dark w-100"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
