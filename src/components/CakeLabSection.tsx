import React, { useEffect, useMemo, useState } from 'react';
import {
  ASSETS,
  CAKE_ADD_ONS,
  CAKE_FLAVORS,
  CAKE_FROSTINGS,
  CAKE_SHAPES,
  CAKE_TIME_SLOTS,
  CAKE_WEIGHTS,
  DEFAULT_CAKE_CONFIG,
  buildWhatsAppOrderUrl,
  calculateCakeEstimate,
  formatInr,
  type CakeLabConfig,
} from '../data/fairyCakesData';
import { ActionButton } from './ActionButton';
import { SplitWords } from './SplitWords';

interface CakeLabSectionProps {
  selectedFlavorId?: string | null;
}

export function CakeLabSection({ selectedFlavorId }: CakeLabSectionProps) {
  const [config, setConfig] = useState<CakeLabConfig>(DEFAULT_CAKE_CONFIG);

  useEffect(() => {
    if (!selectedFlavorId) return;
    const exists = CAKE_FLAVORS.some((f) => f.id === selectedFlavorId);
    if (exists) {
      setConfig((prev) => ({ ...prev, flavorId: selectedFlavorId }));
    }
  }, [selectedFlavorId]);

  const estimate = useMemo(() => calculateCakeEstimate(config), [config]);
  const whatsappUrl = useMemo(
    () => buildWhatsAppOrderUrl(config, estimate),
    [config, estimate]
  );

  const toggleAddOn = (addOnId: string) => {
    setConfig((prev) => {
      const exists = prev.addOnIds.includes(addOnId);
      return {
        ...prev,
        addOnIds: exists
          ? prev.addOnIds.filter((id) => id !== addOnId)
          : [...prev.addOnIds, addOnId],
      };
    });
  };

  return (
    <section
      id="custom-cake"
      className="section bottom-padd"
      data-mello-section="cake-lab"
      aria-labelledby="cake-lab-heading"
    >
      <div className="container">
        <div className="cakelab-content">
          <div className="section-heading">
            <div className="heading-title">
              <div className="label">
                <div className="circle" aria-hidden="true" />
                <div className="handwritten-l">Interactive Cake Lab</div>
              </div>
              <h2 id="cake-lab-heading" className="h2 heading-h2">
                <SplitWords text="Build your dream cake" />
              </h2>
            </div>
            <div className="text-wrapper">
              <p className="body-l secton-description">
                Pick your flavor, weight, finish &amp; message for an instant estimate and WhatsApp order.
              </p>
            </div>
          </div>

          <div className="cakelab-grid">
            {/* Left column: 6-step customizer */}
            <div className="cakelab-builder">
              {/* Step 01: Weight */}
              <div className="cakelab-step">
                <div className="cakelab-step-header">
                  <span className="handwritten-s opacity">01</span>
                  <h3 className="h3 h3-small">Select weight &amp; servings</h3>
                </div>
                <div
                  className="cakelab-options-grid cols-4"
                  role="group"
                  aria-label="Cake weight"
                >
                  {CAKE_WEIGHTS.map((weight) => {
                    const isActive = config.weightId === weight.id;
                    return (
                      <button
                        key={weight.id}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() =>
                          setConfig((prev) => ({ ...prev, weightId: weight.id }))
                        }
                        className={`cakelab-option ${isActive ? 'is-active' : ''}`}
                      >
                        <span className="display-s">{weight.label}</span>
                        <span className="body-m opacity">{weight.servings}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 02: Flavor & Dietary */}
              <div className="cakelab-step">
                <div className="cakelab-step-header split">
                  <div className="cakelab-step-title">
                    <span className="handwritten-s opacity">02</span>
                    <h3 className="h3 h3-small">Choose flavor &amp; sponge</h3>
                  </div>
                  <div
                    className="cakelab-dietary-toggle"
                    role="group"
                    aria-label="Dietary preference"
                  >
                    <button
                      type="button"
                      aria-pressed={config.dietary === 'classic'}
                      onClick={() =>
                        setConfig((prev) => ({ ...prev, dietary: 'classic' }))
                      }
                      className={`cakelab-toggle-btn ${
                        config.dietary === 'classic' ? 'is-active' : ''
                      }`}
                    >
                      <span className="emphasis-m">Classic Sponge</span>
                    </button>
                    <button
                      type="button"
                      aria-pressed={config.dietary === 'eggless'}
                      onClick={() =>
                        setConfig((prev) => ({ ...prev, dietary: 'eggless' }))
                      }
                      className={`cakelab-toggle-btn ${
                        config.dietary === 'eggless' ? 'is-active' : ''
                      }`}
                    >
                      <span className="emphasis-m">Eggless (+₹100/kg)</span>
                    </button>
                  </div>
                </div>

                <div
                  className="cakelab-options-grid cols-3"
                  role="group"
                  aria-label="Cake flavor"
                >
                  {CAKE_FLAVORS.map((flavor) => {
                    const isActive = config.flavorId === flavor.id;
                    return (
                      <button
                        key={flavor.id}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() =>
                          setConfig((prev) => ({ ...prev, flavorId: flavor.id }))
                        }
                        className={`cakelab-option align-left ${
                          isActive ? 'is-active' : ''
                        }`}
                      >
                        <span className="handwritten-s opacity">
                          {flavor.category}
                        </span>
                        <span className="display-s">{flavor.name}</span>
                        <span className="emphasis-m">
                          {flavor.pricePerKg === null
                            ? 'Custom Quote'
                            : `${formatInr(flavor.pricePerKg)} / kg`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 03: Shape & Step 04: Frosting */}
              <div className="cakelab-two-col">
                <div className="cakelab-step">
                  <div className="cakelab-step-header">
                    <span className="handwritten-s opacity">03</span>
                    <h3 className="h3 h3-small">Cake shape</h3>
                  </div>
                  <div
                    className="cakelab-options-grid cols-2"
                    role="group"
                    aria-label="Cake shape"
                  >
                    {CAKE_SHAPES.map((shape) => {
                      const isActive = config.shapeId === shape.id;
                      return (
                        <button
                          key={shape.id}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() =>
                            setConfig((prev) => ({ ...prev, shapeId: shape.id }))
                          }
                          className={`cakelab-option align-left ${
                            isActive ? 'is-active' : ''
                          }`}
                        >
                          <span className="display-s">{shape.name}</span>
                          <span className="body-m opacity">
                            {shape.surcharge === 0
                              ? 'Included'
                              : `+${formatInr(shape.surcharge)}`}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="cakelab-step">
                  <div className="cakelab-step-header">
                    <span className="handwritten-s opacity">04</span>
                    <h3 className="h3 h3-small">Frosting &amp; finish</h3>
                  </div>
                  <div
                    className="cakelab-options-grid cols-2"
                    role="group"
                    aria-label="Frosting finish"
                  >
                    {CAKE_FROSTINGS.map((frosting) => {
                      const isActive = config.frostingId === frosting.id;
                      return (
                        <button
                          key={frosting.id}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() =>
                            setConfig((prev) => ({
                              ...prev,
                              frostingId: frosting.id,
                            }))
                          }
                          className={`cakelab-option align-left ${
                            isActive ? 'is-active' : ''
                          }`}
                        >
                          <span className="display-s">{frosting.name}</span>
                          <span className="body-m opacity">
                            {frosting.surcharge === null
                              ? 'Custom Quote'
                              : frosting.surcharge === 0
                                ? 'Included'
                                : `+${formatInr(frosting.surcharge)}`}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Step 05: Gourmet Fillings & Toppers */}
              <div className="cakelab-step">
                <div className="cakelab-step-header">
                  <span className="handwritten-s opacity">05</span>
                  <h3 className="h3 h3-small">Gourmet fillings &amp; toppers</h3>
                </div>
                <div
                  className="cakelab-options-grid cols-3"
                  role="group"
                  aria-label="Gourmet add-ons"
                >
                  {CAKE_ADD_ONS.map((addOn) => {
                    const isActive = config.addOnIds.includes(addOn.id);
                    return (
                      <button
                        key={addOn.id}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => toggleAddOn(addOn.id)}
                        className={`cakelab-option align-left ${
                          isActive ? 'is-active' : ''
                        }`}
                      >
                        <span className="display-s">{addOn.name}</span>
                        <span className="emphasis-m">
                          +{formatInr(addOn.price)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 06: Personalize & Schedule */}
              <div className="cakelab-step">
                <div className="cakelab-step-header">
                  <span className="handwritten-s opacity">06</span>
                  <h3 className="h3 h3-small">Personalize &amp; schedule</h3>
                </div>

                <div className="cakelab-form-grid">
                  <div className="cakelab-field">
                    <label htmlFor="cake-inscription" className="emphasis-m">
                      Message on cake
                    </label>
                    <input
                      id="cake-inscription"
                      type="text"
                      maxLength={60}
                      placeholder="e.g. Happy Birthday Meera!"
                      value={config.inscription}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          inscription: e.target.value,
                        }))
                      }
                      className="cakelab-input body-m"
                    />
                  </div>

                  <div className="cakelab-field">
                    <label htmlFor="cake-date" className="emphasis-m">
                      Celebration date
                    </label>
                    <input
                      id="cake-date"
                      type="date"
                      value={config.celebrationDate}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          celebrationDate: e.target.value,
                        }))
                      }
                      className="cakelab-input body-m"
                    />
                  </div>

                  <div className="cakelab-field">
                    <span className="emphasis-m">Delivery or pickup</span>
                    <div
                      className="cakelab-dietary-toggle full"
                      role="group"
                      aria-label="Fulfillment option"
                    >
                      <button
                        type="button"
                        aria-pressed={config.fulfillment === 'delivery'}
                        onClick={() =>
                          setConfig((prev) => ({
                            ...prev,
                            fulfillment: 'delivery',
                          }))
                        }
                        className={`cakelab-toggle-btn ${
                          config.fulfillment === 'delivery' ? 'is-active' : ''
                        }`}
                      >
                        <span className="emphasis-m">Local Delivery</span>
                      </button>
                      <button
                        type="button"
                        aria-pressed={config.fulfillment === 'pickup'}
                        onClick={() =>
                          setConfig((prev) => ({ ...prev, fulfillment: 'pickup' }))
                        }
                        className={`cakelab-toggle-btn ${
                          config.fulfillment === 'pickup' ? 'is-active' : ''
                        }`}
                      >
                        <span className="emphasis-m">Café Pickup</span>
                      </button>
                    </div>
                  </div>

                  <div className="cakelab-field">
                    <label htmlFor="cake-timeslot" className="emphasis-m">
                      Preferred time slot
                    </label>
                    <select
                      id="cake-timeslot"
                      value={config.timeSlotId}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          timeSlotId: e.target.value,
                        }))
                      }
                      className="cakelab-input body-m"
                    >
                      {CAKE_TIME_SLOTS.map((slot) => (
                        <option key={slot.id} value={slot.id}>
                          {slot.label}
                          {slot.surcharge > 0
                            ? ` (+${formatInr(slot.surcharge)})`
                            : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="cakelab-checks">
                  <label className="cakelab-check">
                    <input
                      type="checkbox"
                      checked={config.includeSparklerKnife}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          includeSparklerKnife: e.target.checked,
                        }))
                      }
                    />
                    <span className="body-m">
                      Include complimentary sparkler candle &amp; cake knife
                    </span>
                  </label>

                  <label className="cakelab-check">
                    <input
                      type="checkbox"
                      checked={config.hasReferencePhoto}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          hasReferencePhoto: e.target.checked,
                        }))
                      }
                    />
                    <span className="body-m">
                      I have a custom theme reference photo to share on WhatsApp
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right column: Sticky Studio Summary Card */}
            <aside className="cakelab-summary" aria-label="Live cake estimate">
              <div className="cakelab-summary-card">
                <div className="cakelab-summary-top">
                  <div>
                    <div className="handwritten-s">Studio ticket</div>
                    <h3 className="h3 h3-small">{estimate.flavorName}</h3>
                  </div>
                  <img
                    src={ASSETS.sparklesAccent}
                    alt=""
                    aria-hidden="true"
                    className="illustration cakelab-sparkle"
                  />
                </div>

                <div className="cakelab-summary-meta">
                  <span className="cakelab-chip emphasis-m">
                    {estimate.weightLabel}
                  </span>
                  <span className="cakelab-chip emphasis-m">
                    {config.dietary === 'eggless' ? 'Eggless' : 'Classic'}
                  </span>
                  <span className="cakelab-chip emphasis-m">
                    {estimate.shapeName}
                  </span>
                </div>

                {config.inscription.trim() && (
                  <div className="cakelab-inscription-preview">
                    <span className="handwritten-s">On the cake:</span>
                    <p className="handwritten-l">
                      &ldquo;{config.inscription.trim()}&rdquo;
                    </p>
                  </div>
                )}

                <div className="cakelab-divider" aria-hidden="true" />

                <div className="cakelab-line-items" aria-live="polite">
                  {estimate.lineItems.map((item) => (
                    <div key={item.label} className="cakelab-line-item">
                      <span className="body-m">{item.label}</span>
                      <span className="emphasis-m">
                        {item.amount === null
                          ? 'Custom Quote'
                          : formatInr(item.amount)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="cakelab-divider" aria-hidden="true" />

                <div className="cakelab-total-row" data-testid="cake-lab-total">
                  <div>
                    <div className="body-m">Estimated total</div>
                    <div className="handwritten-s">99.9% theme accuracy</div>
                  </div>
                  <div className="h3" style={{ width: 'auto' }}>
                    {estimate.isCustomQuote || estimate.total === null
                      ? 'Custom Quote'
                      : formatInr(estimate.total)}
                  </div>
                </div>

                <div className="cakelab-summary-cta">
                  <ActionButton
                    variant="white-primary"
                    href={whatsappUrl}
                    target="_blank"
                    className="cakelab-whatsapp-btn"
                  >
                    Order on WhatsApp
                  </ActionButton>
                  <p className="body-s cakelab-footnote">
                    Opens WhatsApp pre-filled with your exact cake specs for Fairy Cakes Parippally.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
