const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-bold text-purple-600">SKTOYSHOP</h2>
          <p className="mt-2 text-sm">
            A fun place to explore your favorite toys! Build your dream collection with ease.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-purple-600">Home</a></li>
            <li><a href="/my-profile" className="hover:text-purple-600">My Profile</a></li>
            <li><a href="/extra" className="hover:text-purple-600">Extra Page</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-3 text-purple-600">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className="text-center py-3 border-t border-gray-300 text-sm">
        © {new Date().getFullYear()} SKTOYSHOP. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
