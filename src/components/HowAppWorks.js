import React, { useState } from 'react';
import phoneImage from 'assets/img/iPhoneX2.png';
import classNames from 'classnames';

const appsArr = [
  {
    id: 1,
    title: 'Enter Location',
    description:
      'Enter your destination to see a list of taxi providers near you.',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Find the perfect ride',
    description:
      'Filter results by driver rating, driver sex, waiting times, price or speed. Reduce carbon footprint by only showing hybrid or electric cars.',
    color: 'green '
  },
  {
    id: 3,
    title: 'Pay and Save',
    description:
      'Once you select a ride, we search the web for coupons to get you an even better deal, then book seemlessly within our app and earn points while you ride.',
    color: 'yellow'
  }
];

export const HowAppWorks = () => {
  const [active, setActive] = useState();

  const handleSetActive = (selected) => setActive(selected);

  return (
    <section className="section how-it-works" id="app">
      <div className="container">
        <div className="title-content">
          <h4 className="heading--sm color-white">
            Whichride brings together multiple ride hailing providers and local
            taxi firms in one app
          </h4>
          <p className="paragraph--big color-light-gray mt-3">
            Allowing riders to select the provider that offers the best price,
            service or travel time, then seamlessly book within the app{' '}
          </p>
        </div>
        <div className="presentation">
          <div className="presentation__media">
            <img
              src={phoneImage}
              alt="Whichride"
              title="Checkout Whichride"
              className="img-fluid"
            />
          </div>
          <div className="presentation__app-steps">
            {appsArr.map((item) => (
              <div
                className="presentation__app-step"
                key={item.id}
                tabIndex="-1"
                aria-hidden
                role="button"
                onClick={() => handleSetActive(item.id)}
              >
                <div className="step-label">
                  <div
                    className={classNames('step-label__avatar', {
                      active: active === item.id
                    })}
                  >
                    <p className=" m-0">Step {item.id}</p>
                  </div>
                </div>
                <div className="content">
                  <h4 className="paragraph--big color-white">{item.title}</h4>
                  <p className="paragraph color-light-gray m-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
