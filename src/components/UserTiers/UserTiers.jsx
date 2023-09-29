import UserTierSingle from '../UserTierSingle/UserTierSingle';
import tiers from '../../tiers';

function UserTiers() {
  return (
    <section className="usertiers">
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
    </section>
  );
}

export default UserTiers;
