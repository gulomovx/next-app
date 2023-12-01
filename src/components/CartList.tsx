import React from "react";
import Cart from "./Cart";
import main from "../../public/main-font.png";
import userAvatar from "../../public/Ellipse 3.svg";
import nft from "../../images/Bitcoin Logo.jpg";
import nft1 from "../../images/youzi-lin-bcBNBdzcq2k-unsplash.jpg";

const CartList = () => {
  return (
    <div className="my-24 w-full mx-auto mb-16      ">
      <h1 className="text-3xl font-semibold mb-4">Live Auctions</h1>
      <div className="mb-8 ">
        <Cart />
      </div>
      {/* <div className="grid grid-cols-4 gap-4 ">
              <Cart img={main} time='01:12:30 left' title='3D Soft Curves' actorImg={userAvatar} actor='Easter Howard' price={12} />
              <Cart img={nft} time='01:12:30 left' title='3D Soft Curves' actorImg={userAvatar} actor='Easter Howard' price={12} />
              <Cart img={nft1} time='01:12:30 left' title='3D Soft Curves' actorImg={userAvatar} actor='Easter Howard' price={12} />
              <Cart img={main} time='01:12:30 left' title='3D Soft Curves' actorImg={userAvatar} actor='Easter Howard' price={12} />
              <Cart img={main} time='01:12:30 left' title='3D Soft Curves' actorImg={userAvatar} actor='Easter Howard' price={12} />
              
              
          </div> */}
    </div>
  );
};

export default CartList;
