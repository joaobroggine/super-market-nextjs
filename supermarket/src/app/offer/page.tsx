export default function offer() {
  return (
    <div className="mb-20">
      <aside>
        <h1 className="text-center text-3xl font-extrabold p-3 animate-textChange">OFFER OF THE MONTH</h1>
      </aside>
      <main className="flex justify-center">
        <img className="max-w-md mr-5 hover:scale-110 duration-700 cursor-pointer" src="https://caloi.com/wp-content/uploads/2022/02/Zigbim-14-Vermelho-MY23_Angulada.png" alt="Kid Bike" />
        <section className="mt-2 max-w-72">
        <h1 className="text-3xl font-bold text-green-500">Kid Biclycle!</h1>
        <h2 className="text-2xl pt-6">$62,00</h2>
        <p className="pt-2">Caloi's 14" bikes offer comfort, safety, and performance with an aluminum frame, disc brakes, and free-rolling wheels. Adjustable training wheels help kids develop balance and independence during learning.
        Você chegou ao</p>
        <div className="mt-6 flex justify-center">
        <button className=" border border-green-400 bg-green-400 text-white w-48 h-10 rounded hover:scale-110 duration-500 hover:bg-green-700 hover:border-green-700">Buy Now!</button>
        </div>
        </section>
      </main>
    </div>
  )
}
