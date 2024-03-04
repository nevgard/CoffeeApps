import Header from "../molecul/Header";

export default function EditProfile() {
  return (
    <div className="w-full h-screen ">
      <Header url="/profile" text="Edit Profile"></Header>
      <div className="w-full p-6">
        <form action="">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col">
              <label htmlFor="name">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-slate-300 bg-white-200 rounded-md p-4 focus:outline-[#556052] "
                placeholder="Nama"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name">Jenis Kelamin</label>
              <input
                type="text"
                id="gender"
                name="gender"
                className="border border-slate-300 bg-white-200 rounded-md p-4 focus:outline-[#556052] "
                placeholder="Jenis Kelamin"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name">Tanggal Lahir</label>
              <input
                type="date"
                id="date"
                name="date"
                className="border border-slate-300 bg-white-200 rounded-md p-4 focus:outline-[#556052] "
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name">Email Address</label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-slate-300 bg-white-200 rounded-md p-4 focus:outline-[#556052] "
                placeholder="Email Address"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name">Nomor Ponsel</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="border border-slate-300 bg-white-200 rounded-md p-4 focus:outline-[#556052] "
                placeholder="Nomor"
              />
            </div>

            <div className="w-full flex justify-center items-center text-center">
              <button className="text-white bg-primary rounded-full p-4 w-full">
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
