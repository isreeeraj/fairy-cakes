import React from 'react';
import { ASSETS } from '../data/fairyCakesData';
import { ResilientImage } from './ResilientImage';
import { SplitWords } from './SplitWords';

export function FeaturedMenuSection() {
  return (
    <section
      className="section top-padd"
      data-mello-section="featured"
      aria-labelledby="featured-heading"
    >
      <div className="container">
        <div className="products-content">
          <div className="section-heading">
            <div className="heading-title">
              <div className="label">
                <div className="circle" aria-hidden="true" />
                <div className="handwritten-l">Two delicious worlds</div>
              </div>
              <h2 id="featured-heading" className="h2 heading-h2">
                <SplitWords text="Cake studio meets hangout café" />
              </h2>
            </div>
            <div className="text-wrapper">
              <p className="body-l secton-description">
                Custom celebration cakes, loaded fries, pizzas &amp; thick shakes under one roof.
              </p>
            </div>
          </div>

          <div className="menu-blocks">
            <div className="image-featured-menu-block-wrapper">
              <article className="image-featured-menu-block">
                <ResilientImage
                  src={ASSETS.spanishDelightCard}
                  alt="Two-tier Spanish Delight celebration cake frosted with fresh cream, chocolate drip, and caramelized praline."
                  className="image bg-image"
                />
                <div className="linear" aria-hidden="true" />
                <div className="block-items-wrapper">
                  <div className="name-and-details">
                    <div className="details">
                      <div className="body-m">Praline</div>
                      <div className="divider white" aria-hidden="true" />
                      <div className="body-m">Fresh cream</div>
                    </div>
                    <h3 className="h3 block-title">Spanish Delight</h3>
                  </div>
                  <p className="body-m block-description">
                    Parippally’s favorite celebration tier with crunchy praline &amp; cocoa drip.
                  </p>
                </div>
                <div className="details">
                  <div className="emphasis-l">₹1,100</div>
                  <div className="volume variant-white">
                    <div className="body-s">1 kg</div>
                  </div>
                </div>
                <div className="badge">
                  <div className="handwritten-s">Favorite</div>
                </div>
              </article>
            </div>

            <div className="menu-blocks-wrapper">
              <div className="image-featured-menu-block-wrapper _2">
                <article className="image-featured-menu-block">
                  <ResilientImage
                    src={ASSETS.cafeBitesPhoto}
                    alt="Loaded cheese fries, juicy stacked burger, and steamed momos served fresh at Fairy Cakes Café."
                    className="image bg-image"
                  />
                  <div className="linear" aria-hidden="true" />
                  <div className="block-items-wrapper">
                    <div className="name-and-details">
                      <div className="details">
                        <div className="body-m">Crispy fries</div>
                        <div className="divider white" aria-hidden="true" />
                        <div className="body-m">Cheese sauce</div>
                      </div>
                      <h3 className="h3 block-title">Loaded cheese fries</h3>
                    </div>
                    <p className="body-m block-description">
                      Golden fries piled high with melted cheese, served hot till 11 PM.
                    </p>
                  </div>
                  <div className="details">
                    <div className="emphasis-l">₹160</div>
                    <div className="volume variant-white">
                      <div className="body-s">Plate</div>
                    </div>
                  </div>
                </article>
              </div>

              <div className="menu-blocks-wrapper small">
                <article className="illustration-featured-menu-block">
                  <div className="illustration-and-text-wrapper">
                    <img
                      src={ASSETS.milkshakeCup}
                      alt=""
                      aria-hidden="true"
                      className="illustration featured-block-illu"
                    />
                    <div className="handwritten-s">
                      Thick &amp;
                      <br />
                      super fudgy
                    </div>
                  </div>
                  <div className="info">
                    <div className="block-items-wrapper">
                      <div className="name-and-details">
                        <div className="details">
                          <div className="body-m">Belgian choco</div>
                          <div className="divider" aria-hidden="true" />
                          <div className="body-m">Oreo</div>
                        </div>
                        <h3 className="h3 h3-small">Belgian Oreo shake</h3>
                      </div>
                      <p className="body-m">Blended thick with whipped cream.</p>
                    </div>
                    <div className="details">
                      <div className="emphasis-l">₹140</div>
                      <div className="volume">
                        <div className="body-s">Chilled</div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="illustration-featured-menu-block variant-black">
                  <div className="illustration-and-text-wrapper">
                    <img
                      src={ASSETS.cakeSlice}
                      alt=""
                      aria-hidden="true"
                      className="illustration featured-block-illu"
                    />
                    <div className="handwritten-s">
                      Warm &amp; gooey
                      <br />
                      daily bakes
                    </div>
                  </div>
                  <div className="info">
                    <div className="block-items-wrapper">
                      <div className="name-and-details">
                        <div className="details">
                          <div className="body-m">Dark fudge</div>
                          <div className="divider white" aria-hidden="true" />
                          <div className="body-m">Jar cake</div>
                        </div>
                        <h3 className="h3 h3-small">Brownies &amp; jars</h3>
                      </div>
                      <p className="body-m">Rich cocoa bakes &amp; layered jars.</p>
                    </div>
                    <div className="details">
                      <div className="emphasis-l">₹130</div>
                      <div className="volume variant-white">
                        <div className="body-s">Fresh</div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
