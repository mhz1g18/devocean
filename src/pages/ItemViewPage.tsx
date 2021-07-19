import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Banner from "../components/Banner";
import PageWrapper from "../components/PageWrapper";
import { State } from "../redux";
import { ApiData } from "../util/types";

const DetailViewPage: FC = () => {
  const { activeItem, items } = useSelector((state: State) => state.app);
  const [nearbyPlaces, setNearbyPlaces] = useState<ApiData[]>([]);

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    const nearby = items.filter(
      (item) =>
        item.address.city === activeItem?.address.city &&
        item.id !== activeItem.id
    );
    setNearbyPlaces(nearby);
  }, [activeItem, items]);

  if (!activeItem) {
    return <Redirect to="/" />;
  }

  return (
    <PageWrapper>
      <Banner image={activeItem.image} />
      <div className="info-wrapper">
        <div className="contacts">
          <div className="col">
            <h2>Address</h2>
            <p>
              {activeItem.address.number} {activeItem.address.street}
            </p>
            <p>
              {activeItem.address.city}, {activeItem.address.zip}
            </p>
          </div>
          <div className="col">
            <h2>Contacts</h2>
            <p>{activeItem.phone}</p>
            <p>{activeItem.email}</p>
          </div>
        </div>
        <div className="nearby">
          <h2>Nearby Places</h2>
          {nearbyPlaces.map((item, idx) => (
            <div key={`nearby-item-${idx}`} className="row grey">
              <div className="row-item">{item.name}</div>
              <div className="row-item">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default DetailViewPage;
