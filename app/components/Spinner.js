// components/SpinnerOverlay.js

export default function SpinnerOverlay({ isLoading }) {
  // Render the spinner overlay only when isLoading is true
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
    </div>
  );
}
