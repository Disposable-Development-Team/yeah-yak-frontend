const Image = (props) => {
  // props에서 필요한 값들을 가져오기
  const { width, height, src, link } = props;

  return (
    <div>
      {/* 이미지 및 링크 표시 */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt="이미지"
          style={{ width: width, height: height }}
        />
      </a>
    </div>
  );
};

export default Image;
