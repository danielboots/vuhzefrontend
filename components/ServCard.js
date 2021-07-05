const ServCard = () => {
  return (
    <div>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
        <h2 className="text-center font-black uppercase  text-gray-600">{}</h2>
        <p className="text-center font-medium text-gray-600 "></p>
        <img
          className="w-full h-32 sm:h-48 object-cover"
          src="https://images.unsplash.com/photo-1551710029-607e06bd45ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80"
          alt=""
        />
        <div className="m-4 text-center">
          <span className="font-bold text-gray-600 "></span>
          <span className="block text-gray-400 font-bold"></span>
        </div>
      </div>
    </div>
  );
};

export default ServCard;
