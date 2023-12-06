import LottieContainer from "./ui/lotticontainer";

const Loading = () => {
  return (
    <div className="w-[250px] h-[250px]">
      <LottieContainer path="/painting.json" />
    </div>
  );
};

export default Loading;
