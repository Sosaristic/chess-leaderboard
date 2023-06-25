export default function PopOver({ children }) {
  return (
    <div className="popover px-4 fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center ">
      {children}
    </div>
  );
}
