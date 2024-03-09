
export default function Home() {
  return (
      <>
          <main className="flex min-h-screen flex-col items-center justify-between bg-[#111827]">
              <div className={"p-8"}>
                  <div className={"flex flex-row"}>
                      <div className={"w-1/2 px-16 pt-4"}>
                          <div className={"text-white"}>
                              <h1 className={"text-3xl pb-4"}>About this project</h1>
                              <div className={"ps-1"}>
                                  <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                      Lorem Ipsum has been the industry's standard dummy text ever since the
                                      1500s, when an unknown printer took a galley of type and scrambled it to make
                                      specimen book. It has survived not only five centuries, but also the leap into
                                  </h2>
                                  <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                      Lorem Ipsum has been the industry's standard dummy text ever since the
                                      1500s, when an unknown printer took a galley of type and scrambled it to make
                                      specimen book. It has survived not only five centuries, but also the leap into
                                  </h2>

                                  <h1 className={"text-3xl pb-4 pt-8"}>How can this help you?</h1>
                                  <div className={"ps-1"}>
                                      <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's standard dummy text ever since the
                                          1500s, when an unknown printer took a galley of type and scrambled it to make
                                          specimen book. It has survived not only five centuries, but also the leap into
                                      </h2>
                                      <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's standard dummy text ever since the
                                          1500s, when an unknown printer took a galley of type and scrambled it to make
                                          specimen book. It has survived not only five centuries, but also the leap into
                                      </h2>
                                </div>
                              </div>
                          </div>
                      </div>
                      <div className="flex items-center justify-center h-screen w-1/2">
                          <div className="text-white text-center">
                              <button
                                  className="bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 border border-black rounded">
                                  DASHBOARD
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      </>
  );
}
