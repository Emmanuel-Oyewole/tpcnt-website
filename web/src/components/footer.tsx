
export default function Footer() {
  const getCurrentYear = new Date().getFullYear();
  return (
    <>
      <footer className="flex flex-row justify-center p-2 border">
        <p>© {getCurrentYear} TPCNT. All rights reserved.</p>
      </footer>
    </>
  );
}
