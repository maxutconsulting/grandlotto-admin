import React, { useEffect, useState } from "react";

import ps_promo from "../../assets/images/ps_promo.png";
import { useSelector } from "react-redux";
import { addComma } from "../../global/customFunctions";

const AdminWalletOverview = () => {
  const adminCounts = useSelector((state) => state.wallet.adminCounts);

  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    if (adminCounts) {
      setWallet([
        {
          id: 1,
          img: ps_promo,
          title: "Total Game played",
          desc: adminCounts?.totalPlayed,
        },
        {
          id: 2,
          img: ps_promo,
          title: "Total Amount played",
          desc: addComma(adminCounts?.totalAmmountPlayed),
        },
        {
          id: 3,
          img: ps_promo,
          title: "Total Winnings",
          desc: addComma(adminCounts?.totalAmmountWon),
        },
        // {
        //   id: 4,
        //   img: ps_promo,
        //   title: "Total Users",
        //   desc: adminCounts?.bonusAccount
        //     ? addComma(adminCounts?.bonusAccount)
        //     : 20,
        // },
      ]);
    }
  }, [adminCounts]);

  return (
    <>
      <div className="homeWalletOverview">
        {wallet &&
          wallet?.map((item, index) => (
            <div key={index} className="homeWalletOverviewItem">
              <div className="homeWalletOverviewItemImage">
                <img src={item?.img} alt="grand-logo" />
              </div>
              <div>
                <h5>{item?.title}</h5>
                <h3>{item?.desc}</h3>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default AdminWalletOverview;
