import Header from "@/components/common/Header";


export default function Home() {
  
  return (
    <div className="flex-1">
      <Header />
      <div className="grid grid-rows-3 gap-5 justify-center text-center mt-5">
        <h1 className="text-3xl font-bold">
          Bem a vindo a casa pau dos ferros
        </h1>
        <div>
          Vendemos barato
        </div>
        <div>
          venha gastar seu dinheiro
        </div>
      </div>
    </div>
  );
}
