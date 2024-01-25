import Card from "./card";

const Cardcoll = () => {
  const data = [
    {
      url:"https://password-game-pi.vercel.app/",
      imgsource: "./images/img1.webp",
      imgalt: "img1",
      gamename: "Name",
      gamdis: "something",
    },
    {
      url:"https://game-folder.vercel.app/",
      imgsource: "./images/img2.webp",
      imgalt: "img2",
      gamename: "Name2",
      gamdis: "something2",
    },
    {
      url:"https://pandaai.itch.io/dino-run",
      imgsource: "./images/img3.webp",
      imgalt: "img3",
      gamename: "Name3",
      gamdis: "something3",
    },
    {
      url:"https://rock-paper-scissor-henna-alpha.vercel.app/",
      imgsource: "./images/img4.webp",
      imgalt: "img4",
      gamename: "Name4",
      gamdis: "something4",
    },
    {
      url:"https://quiz-game-gamma-silk.vercel.app/",
      imgsource: "./images/img5.webp",
      imgalt: "img5",
      gamename: "Name5",
      gamdis: "something5",
    },
    {
      url:"https://pandaai.itch.io/runner",
      imgsource: "./images/img6.webp",
      imgalt: "img6",
      gamename: "Name6",
      gamdis: "something6",
    },
  ];

  return (
    <div className="bg-sky-100 rounded-xl grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 justify-center gap-6 w-full p-4 mt-10">
      {data.map((data, index) => (
        <Card
          key={index}
          url={data.url}
          imgsource={data.imgsource}
          imgalt={data.imgalt}
          gamename={data.gamename}
          gamedis={data.gamdis}
        />
      ))}
    </div>
  );
};

export default Cardcoll;
