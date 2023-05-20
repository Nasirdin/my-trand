import { useState } from "react";
import Close from "../../public/close.png";

const Checkout = ({ setOpenModal }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [address, setAddress] = useState();
  const [zipCode, setZipCode] = useState();

  const orderSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      firstName,
      lastName,
      email,
      phoneNumber,
      city,
      country,
      address,
      zipCode,
    };
    // POST запрос

    console.log(newOrder);

    // end POST запрос

    setOpenModal(false);
    alert("Ваш заказ успешно отправлен");
  };

  return (
    <div className="max-w-[600px] z-50 p-[20px] rounded-[6px] absolute bg-[#55555590] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
      <span
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <img
          className="w-[20px] absolute top-[20px] cursor-pointer right-[20px]"
          src={Close}
          alt="close"
        />
      </span>
      <h2 className="text-center text-white font text-[24px] font-bold mb-[20px]">
        Заказать
      </h2>
      <form
        onSubmit={orderSubmit}
        className="flex flex-col items-center gap-[15px]"
      >
        <div className=" w-[100%] flex content-between gap-[15px]">
          <label className="w-[100%] ">
            <input
              type="text"
              className="w-[100%] py-[10px] px-[20px] rounded-[6px] outline-none"
              required
              placeholder="Имя"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </label>
          <label className="w-[100%] ">
            <input
              type="text"
              className="w-[100%] py-[10px] px-[20px] rounded-[6px] outline-none"
              required
              placeholder="Фамилия"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </label>
        </div>
        <label className="w-[100%]">
          <input
            type="email"
            className="w-[100%] py-[10px] px-[20px] rounded-[6px] outline-none"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label className="w-[100%]">
          <input
            type="tel"
            className="w-[100%] py-[10px] px-[20px] rounded-[6px] outline-none"
            required
            placeholder="Телефон номер"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </label>
        <div className=" w-[100%] flex content-between gap-[15px]">
          <label className="w-[100%] ">
            <input
              type="text"
              className="w-[100%] py-[10px] px-[20px] rounded-[6px] outline-none"
              required
              placeholder="Город"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </label>
          <label className="w-[100%] ">
            <input
              type="text"
              className="w-[100%] py-[10px] px-[20px] rounded-[6px] outline-none"
              required
              placeholder="Страна"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </label>
          <label className="w-[100%] ">
            <input
              type="text"
              className="w-[100%] py-[10px] px-[20px] rounded-[6px] outline-none"
              required
              placeholder="Почтовый индекс"
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value);
              }}
            />
          </label>
        </div>
        <label className="w-[100%]">
          <input
            type="text"
            className="w-[100%] py-[10px] px-[20px] rounded-[6px] outline-none"
            required
            placeholder="Улица, дом, квартира"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </label>
        <div className="flex gap-[30px]">
          <button className="py-2 px-[50px] bg-[#f5f5f5] rounded">Назад</button>
          <button className="py-2 px-[50px] bg-[#1fc142] text-white  rounded">
            Заказать
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
