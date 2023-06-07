import { useTranslation } from "react-i18next";
import { TeamConst } from "../../../../constants/TeamConst";
import scss from "./Team.module.scss";
import TeamCard from "./TeamCard/TeamCard";
import Button from "../../../../components/Button/Button";

function Team() {
  const { t } = useTranslation()

  return (
    <div className="container">
      <div className={scss.team}>
        <div className={scss.team__title}>
          <h2>Meet Our Teachers</h2>
          <p className="secondary_mid_text">
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in cases
          </p>
        </div>
        <div className={scss.team__cards}>
          {
            TeamConst.map((item) => <TeamCard key={item.id} {...item} />)
          } 
        </div>
        <a href="/AboutUs"><Button type="white" text="View All Teachers" /></a>
      </div>
    </div>
  );
}

export default Team;
