import Image from "@atoms/Image";
import Button from "@atoms/Button";

export default function Header() {
  return(
    <div>
      <Image
        width="300px"
        height="200px"
        src="https://via.placeholder.com/300x200.png?text=SONGJOOWON"
        link="https://github.com/Disposable-Development-Team/yeah-yak-frontend"
      />
      <Button>예약현황</Button>
    </div>
  );
}