export default function GridComponent({ children }) {
    return (
      <div className="pattern-bg-1 w-full min-h-screen">
        <div className="pattern-bg-2 w-full min-h-screen">
          {children}
        </div>
      </div>
    );
  }