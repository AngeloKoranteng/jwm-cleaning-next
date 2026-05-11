export default function Logo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img 
      src="/Professional%20cleaning%20service%20logo.png" 
      alt="J.W.M Cleaning Services Logo" 
      className={className}
    />
  );
}