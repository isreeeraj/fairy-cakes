import React from 'react';
import { ASSETS, SITE_INFO } from '../data/fairyCakesData';
import { ResilientImage } from './ResilientImage';

export function VisitSection() {
  return (
    <section
      id="visit"
      className="section both-padd large black"
      aria-labelledby="visit-heading"
    >
      <div className="border top-border white" aria-hidden="true" />
      <div className="border bottom-border white" aria-hidden="true" />

      <div className="container">
        <div className="visit-content">
          <div className="section-heading default">
            <div className="label variant-white">
              <div className="circle" aria-hidden="true" />
              <div className="handwritten-l">Visit Parippally’s favorite</div>
            </div>
            <h2 id="visit-heading" className="h2 heading-h2 align-center">
              Sweet stops &amp; late hangouts
            </h2>
            <img
              src={ASSETS.sparklesAccent}
              alt=""
              aria-hidden="true"
              className="illustration visit-section-1"
            />
            <img
              src={ASSETS.downArrowAccent}
              alt=""
              aria-hidden="true"
              className="illustration visit-section-2"
            />
          </div>

          <div className="visit-info">
            <div className="photo-block-wrapper">
              <figure className="photo-block" style={{ margin: 0 }}>
                <div className="photo-image-wrapper">
                  <ResilientImage
                    src={ASSETS.signatureSpecialsPhoto}
                    alt="KitKat and Gems custom celebration cake alongside creamy Tres Leches made to order at Fairy Cakes."
                    className="image background-image"
                  />
                </div>
                <figcaption className="photo-text-wrapper">
                  <div className="handwritten-l">Signature celebrations</div>
                </figcaption>
              </figure>
            </div>

            <div className="column second">
              <div className="p-block-wrapper">
                <figure className="photo-block" style={{ margin: 0 }}>
                  <div className="photo-image-wrapper">
                    <ResilientImage
                      src={ASSETS.freshCreamPhoto}
                      alt="Fresh cream Black Forest and Strawberry celebration slices baked fresh at Fairy Cakes Parippally."
                      className="image background-image"
                    />
                  </div>
                  <figcaption className="photo-text-wrapper">
                    <div className="handwritten-l">Fresh cream classics</div>
                  </figcaption>
                </figure>
              </div>

              <div className="contact-items">
                <a
                  href={SITE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-block"
                >
                  <div className="location-info">
                    <div className="handwritten-s">Opp. Moto Planet</div>
                    <h3 className="h3 h3-small block-text">
                      Jawahar Junction, Mukkada Rd, Parippally
                    </h3>
                  </div>
                  <div className="illu-wrapper" aria-hidden="true">
                    <img
                      src={ASSETS.pinDark}
                      alt=""
                      className="illustration location-block-illu default"
                    />
                    <img
                      src={ASSETS.pinAccent}
                      alt=""
                      className="illustration location-block-illu abs"
                    />
                  </div>
                </a>

                <a
                  href={SITE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="email-block"
                >
                  <div className="email-illu-wrapper" aria-hidden="true">
                    <img
                      src={ASSETS.chatDark}
                      alt=""
                      className="illustration email-block-illu default"
                    />
                    <img
                      src={ASSETS.chatAccent}
                      alt=""
                      className="illustration email-block-illu abs"
                    />
                  </div>
                  <h3 className="h3 h3-small email-block-text">WhatsApp us!</h3>
                </a>
              </div>
            </div>

            <div className="column">
              <div className="hours-block">
                <div className="block-text-wrapper small">
                  <div className="handwritten-s">Delivery 10AM–10PM</div>
                  <h3 className="h3 h3-small">
                    Café Dine-In,
                    <br />
                    11AM–11PM.
                  </h3>
                </div>
                <img
                  src={ASSETS.thumbtackDark}
                  alt=""
                  aria-hidden="true"
                  className="illustration hours-block-illu"
                />
              </div>

              <div className="p-block-wrapper">
                <figure className="photo-block" style={{ margin: 0 }}>
                  <div className="photo-image-wrapper">
                    <ResilientImage
                      src={ASSETS.browniesPastriesPhoto}
                      alt="Warm chocolate fudge brownies, swirled cupcakes, and dessert jar cakes on display."
                      className="image background-image"
                    />
                  </div>
                  <figcaption className="photo-text-wrapper">
                    <div className="handwritten-l">Brownies &amp; jar cakes</div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
