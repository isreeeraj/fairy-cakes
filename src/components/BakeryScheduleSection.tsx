import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  ASSETS,
  BAKERY_TIME_SLOTS,
  formatIndianTime,
} from '../data/fairyCakesData';
import { ActionButton } from './ActionButton';
import { SplitWords } from './SplitWords';

interface BakeryScheduleSectionProps {
  onScrollToSection: (hash: string) => void;
}

export function BakeryScheduleSection({
  onScrollToSection,
}: BakeryScheduleSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const hasInteractedRef = useRef(false);
  const activeSlot = BAKERY_TIME_SLOTS[activeIndex] ?? BAKERY_TIME_SLOTS[0];

  useEffect(() => {
    if (!hasInteractedRef.current || !panelRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const panel = panelRef.current;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        panel.querySelectorAll('.name'),
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
        0
      )
        .fromTo(
          panel.querySelectorAll('.time'),
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'elastic.out(0.8, 0.5)' },
          0.05
        )
        .fromTo(
          panel.querySelectorAll('.illustration.time-illu'),
          { opacity: 0, y: 12, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'elastic.out(0.8, 0.5)',
          },
          0.1
        )
        .fromTo(
          panel.querySelectorAll('.h3.block-title.small .split-word'),
          { opacity: 0, y: 24, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.06,
            ease: 'elastic.out(0.8, 0.5)',
          },
          0.14
        )
        .fromTo(
          panel.querySelectorAll('.body-m.block-description.small'),
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
          0.2
        );
    }, panel);

    return () => ctx.revert();
  }, [activeIndex]);

  const handleSelectTab = (idx: number) => {
    hasInteractedRef.current = true;
    setActiveIndex(idx);
  };

  return (
    <section
      className="section both-padd large"
      data-mello-section="schedule"
      aria-labelledby="bakery-schedule-heading"
    >
      <div className="border top-border" aria-hidden="true" />
      <div className="border bottom-border" aria-hidden="true" />

      <div className="container">
        <div className="time-content">
          <div className="section-heading">
            <div className="heading-title">
              <div className="label">
                <div className="circle" aria-hidden="true" />
                <div className="handwritten-l">Bakery o’clock</div>
              </div>
              <h2 id="bakery-schedule-heading" className="h2 heading-h2">
                <SplitWords text="The right bake, right on time" />
              </h2>
            </div>
            <div className="text-wrapper">
              <p className="body-l secton-description">
                Morning cake deliveries, afternoon frappés, evening fries, or midnight surprises.
              </p>
            </div>
          </div>

          <div className="time-info">
            <div className="time-wrapper">
              <div
                id={`time-panel-${activeSlot.id}`}
                role="tabpanel"
                aria-labelledby={`time-tab-${activeSlot.id}`}
                ref={panelRef}
              >
                <div key={activeSlot.id} className="time-wrapper-content">
                  <div className="name">
                    <div className="handwritten-l opacity">{activeSlot.index}</div>
                    <div className="handwritten-l">{activeSlot.chapterLabel}</div>
                  </div>

                  <div className="time-wrapper-info">
                    <div
                      className="time"
                      aria-label={formatIndianTime(
                        activeSlot.hour,
                        activeSlot.minute,
                        activeSlot.period
                      )}
                    >
                      <div className="display-l">{activeSlot.hour}</div>
                      <div className="display-l white">:</div>
                      <div className="display-l">{activeSlot.minute}</div>
                      <div className="display-l-period">{activeSlot.period}</div>
                    </div>

                    <div className="illustration-and-text">
                      <img
                        src={activeSlot.illustration}
                        alt=""
                        aria-hidden="true"
                        className="illustration time-illu"
                      />
                      <div className="block-text-wrapper">
                        <h3 className="h3 block-title small">
                          <SplitWords text={activeSlot.title} />
                        </h3>
                        <p className="body-m block-description small">
                          {activeSlot.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="time-tabs" role="tablist" aria-label="Bakery daily schedule">
                {BAKERY_TIME_SLOTS.map((slot, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={slot.id}
                      id={`time-tab-${slot.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`time-panel-${slot.id}`}
                      onClick={() => handleSelectTab(idx)}
                      className={`time-tab ${isActive ? 'is-active' : ''}`}
                    >
                      <div className="time-name">
                        <div className="handwritten-s">
                          {formatIndianTime(slot.hour, slot.minute, slot.period)}
                        </div>
                        <div className="display-s">{slot.title}</div>
                      </div>
                      <img
                        src={slot.tabIllustration}
                        alt=""
                        aria-hidden="true"
                        className="illustration time-tab-illu"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <img
              src={ASSETS.scheduleArcDark}
              alt=""
              aria-hidden="true"
              className="illustration time-arrow-illu"
            />

            <div className="btn-wrapper">
              <ActionButton
                variant="black-primary"
                href="#custom-cake"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToSection('#custom-cake');
                }}
              >
                Open Cake Lab
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
