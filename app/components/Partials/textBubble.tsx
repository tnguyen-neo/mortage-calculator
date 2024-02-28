export default function TextBubble({ children, className }: any) {
  return (
    children && (
      <div
        className={`max-w-xs rounded-full bg-white border border-gray-200 
        shadow-md hover:shadow-xl p-4 cursor-pointer text-sm text-primary-500
        ${className} `}
      >
        {children}
      </div>
    )
  );
}
