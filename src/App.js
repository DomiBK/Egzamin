import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import imagesData from "./data";
import "./App.css";

/**
 * nazwa metody: handleDownload
 * opis metody: Zwiększa liczbę pobrań wybranego zdjęcia
 * parametry: 
 *   id – identyfikator zdjęcia do zaktualizowania
 * zwracany typ i opis: brak
 * autor: 440640681
 */

function App() {
  const [categories, setCategories] = useState({ 1: true, 2: true, 3: true });
  const [images, setImages] = useState(imagesData);

  const toggleCategory = (catId) => {
    setCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const handleDownload = (id) => {
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, downloads: img.downloads + 1 } : img))
    );
  };

  return (
    <div className="container mt-4">
      <h1>Kategorie zdjęć</h1>

      <div className="form-check form-switch form-check-inline">
        <input className="form-check-input" type="checkbox" id="kwiaty" checked={categories[1]} onChange={() => toggleCategory(1)} />
        <label className="form-check-label" htmlFor="kwiaty">Kwiaty</label>
      </div>
      <div className="form-check form-switch form-check-inline">
        <input className="form-check-input" type="checkbox" id="zwierzeta" checked={categories[2]} onChange={() => toggleCategory(2)} />
        <label className="form-check-label" htmlFor="zwierzeta">Zwierzęta</label>
      </div>
      <div className="form-check form-switch form-check-inline">
        <input className="form-check-input" type="checkbox" id="samochody" checked={categories[3]} onChange={() => toggleCategory(3)} />
        <label className="form-check-label" htmlFor="samochody">Samochody</label>
      </div>

      <div className="d-flex flex-wrap mt-4">
        {images
          .filter((img) => categories[img.category])
          .map((img) => (
            <div className="p-2 text-center" key={img.id}>
              <img
                src={`assets/${img.filename}`}
                alt={img.alt}
                style={{ borderRadius: "8px", margin: "5px", width: "200px" }}
              />
              <h4>Pobrań: {img.downloads}</h4>
              <button className="btn btn-primary" onClick={() => handleDownload(img.id)}>Pobierz</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
