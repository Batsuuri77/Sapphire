import MainWrapper from "@/app/components/mian/MainWrapper";

export default function Dashboard() {
  return (
    <>
      <MainWrapper>
        <section className="h-screen w-screen py-20 flex flex-col items-center justify-center bg-gray-100">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="bg-gray-400 flex flex-col h-full w-1/8">
              <ul>
                <li>Home</li>
                <li>Statistic</li>
                <li>Product</li>
                <li>Order</li>
                <li>Transaction</li>
                <li>Settings</li>
              </ul>
            </div>
            <div>Order</div>
          </div>
        </section>
      </MainWrapper>
    </>
  );
}
