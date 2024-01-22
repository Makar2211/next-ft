import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

interface PropsCatedoryParams {
  params: {
    id: string;
  };
}

const categoryPageId = ({ params }: PropsCatedoryParams) => {
  return (
    <div>
      <h1 className="text-[#53c28b] text-4xl ">{params.id}</h1>

      <div className="flex gap-12 mt-12 mb-24 flex-wrap odd:flex-row-reverse">
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="text-5xl">test</h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            dolorum id deserunt quibusdam voluptatibus libero hic eos
            consequuntur, saepe, quis architecto, ipsam beatae. Eligendi
            reprehenderit quis rem assumenda. Eius, voluptate?
          </p>
          <Link href="#">
            <Button
              style="p-[20px] rounded bg-[#53c28b] color-white cursor-pointer br-[5px] font-bold"
              text="See More"
            />
          </Link>
        </div>
        <div className="flex-1 h-[500px] relative">
          <Image
            className="object-cover"
            fill={true}
            src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1686056951~exp=1686057551~hmac=5da557bfff0192720a1dfa7608b353322afcbfc038886c891ba296fd8fa7e97b"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default categoryPageId;
