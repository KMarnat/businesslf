import UserTierSingle from '../UserTierSingle/UserTierSingle';
import tiers from '../../tiers';
import { useState } from 'react';

function UserTiers() {
  const tierTitles = ['Basis', 'VIP', 'Eksternt'];

  const [isActive, setIsActive] = useState(tierTitles[0]);

  const toggleActive = (type) => {
    setIsActive(type);
  };

  return (
    <section className="usertiers" data-scroll-section>
      <div
        className="usertiers__mobile"
        data-scroll
        data-scroll-speed="2"
        data-scroll-class="fade-in-element"
      >
        <div className="tabs">
          {tierTitles.map((type, i) => (
            <button
              className={`tabs__btn ${isActive === type && 'active'}`}
              key={i}
              onClick={() => toggleActive(type)}
            >
              {type}
            </button>
          ))}
        </div>
        {tiers.map(
          (tier, i) =>
            tier.title === isActive && (
              <UserTierSingle
                modifier={'singletier--active'}
                title={tier.title}
                slogan={tier.slogan}
                price={tier.price}
                description={tier.description}
                key={i}
              >
                {tier.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </UserTierSingle>
            )
        )}
      </div>
      <div
        className="usertiers__desktop"
        data-scroll
        data-scroll-speed="2"
        data-scroll-class="fade-in-element"
      >
        {tiers.map((tier, i) => (
          <UserTierSingle
            title={tier.title}
            slogan={tier.slogan}
            price={tier.price}
            description={tier.description}
            key={i}
          >
            {tier.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </UserTierSingle>
        ))}
      </div>
    </section>
  );
}

export default UserTiers;
