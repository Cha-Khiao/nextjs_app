import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-white">NextApp</span>
            </div>
            <p className="text-gray-400 mb-4">
              สร้างสรรค์เทคโนโลยีเพื่ออนาคตที่ดีกว่า
            </p>
            <div className="flex gap-3">
              <SocialIcon icon="📘" />
              <SocialIcon icon="📸" />
              <SocialIcon icon="🐦" />
              <SocialIcon icon="💼" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="หน้าแรก" />
              <FooterLink href="/about" label="เกี่ยวกับเรา" />
              <FooterLink href="/services" label="บริการ" />
              <FooterLink href="/contact" label="ติดต่อ" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">บริการ</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span className="text-sm">123 ถนนสุขุมวิท กรุงเทพฯ 10110</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span className="text-sm">+66 (0) 2-123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span className="text-sm">info@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} NextApp. สงวนลิขสิทธิ์.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                นโยบายความเป็นส่วนตัว
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                เงื่อนไขการใช้งาน
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                คุกกี้
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  label: string;
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="hover:text-indigo-400 transition-colors">
        {label}
      </Link>
    </li>
  );
}

interface SocialIconProps {
  icon: string;
}

function SocialIcon({ icon }: SocialIconProps) {
  return (
    <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors text-lg">
      {icon}
    </button>
  );
}