const FeatureGrid = () => {
  return (
    <div className=" container mx-auto text-lg text-gray-500 text-justify grid  grid-cols-1 p-4 m-10 sm:grid-cols-2">
      <div className="p-4  ">
        <img
          src="/images/hero.webp"
          className="hover:shadow-2xl transition duration-300 ease-in-out relative border-1"
          alt=""
        />
      </div>
      <div className=" px-4">
        <div className=" pt-4">
          <div className="text-3xl font-bold pb-4 tracking-wide text-gray-700 text-s">
            Heading 1
          </div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venen
        </div>
      </div>
      <div className="px-4">
        <div className=" pt-4">
          <div className="text-3xl font-bold pb-4 tracking-wide text-gray-700">
            Heading 2
          </div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venen
        </div>
      </div>
      <div className="px-4">
        <img
          src="/images/hero.webp"
          className="hover:shadow-2xl transition duration-300 ease-in-out relative border-1"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureGrid;
