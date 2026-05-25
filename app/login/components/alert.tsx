export default function Alert({
  message,
  active,
  setActive,
}: {
  message: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setActive(false);
  }
  if (active) {
    return (
      <div className="fixed flex justify-center top-0 items-center  left-0 bg-black opacity-95 w-full h-full z-50">
        <div className="bg-white h-1/2 flex items-center rounded-md flex-col justify-center p-4">
          <h3 className="text-center text-red-500 bold font-bold text-lg mb-4">
            Ocurrio un error
          </h3>
          <p className="text-xs text-red-500"> {message} </p>
          <button
            className="bg-blue-500 rounded-md text-white w-40 mt-20"
            onClick={onClick}
          >
            Continuar
          </button>
        </div>
      </div>
    );
  }
  return null;
}
