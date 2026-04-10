export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-blue-700 text-white py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Built with <span className="font-bold">The Data Prophet</span>
      </p>
    </footer>
  )
}
