const Footer = () => {
  return (
    <footer className="w-full bg-background text-foreground relative default-padding overflow-hidden">
      <div className="h-10 text-center  flex items-center justify-center text-sm text-gray-400 border-t border-gray-600">
        &copy; {new Date().getFullYear()} AKOGBETO Donald. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
