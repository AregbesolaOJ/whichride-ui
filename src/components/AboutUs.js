import React from 'react';
import classNames from 'classnames';

const optionsArr = [
  {
    id: 1,
    title: 'More Choices',
    description:
      'WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.',
    color: 'blue'
  },
  {
    id: 2,
    title: 'More Choices',
    description:
      'WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.',
    color: 'green '
  },
  {
    id: 3,
    title: 'More Choices',
    description:
      'WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.',
    color: 'yellow'
  },
  {
    id: 4,
    title: 'More Choices',
    description:
      'WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.',
    color: 'purple'
  }
];

export const AboutUs = () => (
  <section className="section options" id="about-us">
    <div className="container">
      <h4 className="heading--sm text-center pt-3 mb-5">Why Whichride</h4>
      <div className="options-cards w-100">
        {optionsArr.map(({ id, description, title, color }) => (
          <div className="options-card" key={id}>
            <div className={classNames(`options-card__icon bg-${color}`)}>
              <img src={require(`assets/img/svg/icon${id}.svg`)} alt={title} />
            </div>
            <h3 className="">{title}</h3>
            <p className="paragraph">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
