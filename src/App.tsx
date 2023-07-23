function App() {
  return (
    <>
      <div className="mx-auto bg-light-gray py-[85px] desktop:py-[138px]">
        <div className="mx-auto h-[495px] w-[320px] rounded-2xl bg-white shadow-xl shadow-gray-300">
          <div className="flex h-full flex-col items-center p-4 text-center font-sans">
            <img className="rounded-xl" src="/qr.png" alt="QR Code" />
            <div className="flex h-full flex-col items-center justify-center p-4 align-middle">
              <div className="mb-4 text-[20px] font-bold text-dark-blue">
                Improve your front-end skills by building projects
              </div>
              <div className="text-grayish-blue">
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
