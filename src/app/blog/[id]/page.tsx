
import Image from "next/image";


async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/post${1}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


const PageId = async () => {
    
const data = await getData()
console.log(data)
  }
  return (
    <div className=" flex justify-center gap-40 ">
      <div className="relative">
        <h1 className="text-3xl">1</h1>
        <p className="text-2x mt-10">2</p>
        <div className="flex items-center gap-2 mt-10">
          <Image
            src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1686056951~exp=1686057551~hmac=5da557bfff0192720a1dfa7608b353322afcbfc038886c891ba296fd8fa7e97b"
            alt=""
            width={40}
            height={40}
            className="object-cover rounded-[100%]"
          />
          <span className="text-3xl ">Makar user Name</span>
        </div>
        <div className="mt-12 text-[20px] font-[300] text-dark">
          <p className="text-2x">Another text</p>
        </div>
      </div>
      <div className="relative">
        <Image
          src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1686056951~exp=1686057551~hmac=5da557bfff0192720a1dfa7608b353322afcbfc038886c891ba296fd8fa7e97b"
          alt="full image"
          width={400}
          height={500}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default PageId;
