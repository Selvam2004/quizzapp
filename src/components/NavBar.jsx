function Navbar() {
    return (
      <>

        <nav class="bg-white py-4 shadow-lg">
            
          <div class="container mx-auto">
            
            {/* Title */}
            <h1 class="text-black  text-3xl font-bold animate-slideIn">
              Quiz App
            </h1>
          </div>
        </nav>
  
        {/* Animations with TailwindCSS */}
        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
  
          .animate-slideIn {
            animation: slideIn 0.8s ease-out both;
          }
        `}</style>
      </>
    );
  }
  
  export default Navbar;
  