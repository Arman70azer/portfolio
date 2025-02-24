import Image from "next/image";

const LogoArman = () => {
    return (
      <Image
        id="image"
        src="/assets/logo.png"
        alt="Arman"
        width={200} 
        height={200}
      />
    );
};

export { LogoArman };
