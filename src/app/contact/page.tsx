'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">ติดต่อเรา</h1>
            <p className="text-xl text-blue-100">
              เรายินดีรับฟังและตอบทุกคำถามของคุณ
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                ข้อมูลการติดต่อ
              </h2>
              
              <div className="space-y-6 mb-12">
                <ContactInfo
                  icon="📍"
                  title="ที่อยู่"
                  content="123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110"
                />
                <ContactInfo
                  icon="📞"
                  title="โทรศัพท์"
                  content="+66 (0) 2-123-4567"
                />
                <ContactInfo
                  icon="📧"
                  title="อีเมล"
                  content="info@example.com"
                />
                <ContactInfo
                  icon="⏰"
                  title="เวลาทำการ"
                  content="จันทร์ - ศุกร์: 9:00 - 18:00 น."
                />
              </div>

              {/* Social Media */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  ติดตามเราบน Social Media
                </h3>
                <div className="flex gap-4">
                  <SocialButton icon="📘" label="Facebook" />
                  <SocialButton icon="📸" label="Instagram" />
                  <SocialButton icon="🐦" label="Twitter" />
                  <SocialButton icon="💼" label="LinkedIn" />
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center overflow-hidden">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="font-medium">แผนที่ตำแหน่งสำนักงาน</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 h-fit">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ส่งข้อความถึงเรา
              </h2>
              
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    ส่งข้อความสำเร็จ!
                  </h3>
                  <p className="text-green-600">
                    เราจะติดต่อกลับไปโดยเร็วที่สุด
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      ชื่อ-นามสกุล *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="กรอกชื่อของคุณ"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      อีเมล *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      เบอร์โทรศัพท์
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      placeholder="0XX-XXX-XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      หัวข้อ *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="">เลือกหัวข้อ</option>
                      <option value="general">สอบถามทั่วไป</option>
                      <option value="service">สอบถามบริการ</option>
                      <option value="support">ขอความช่วยเหลือ</option>
                      <option value="partnership">ความร่วมมือทางธุรกิจ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      ข้อความ *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="พิมพ์ข้อความของคุณที่นี่..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    ส่งข้อความ
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            คำถามที่พบบ่อย
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem
              question="ระยะเวลาในการพัฒนาเว็บไซต์ใช้เวลานานแค่ไหน?"
              answer="โดยปกติใช้เวลา 4-8 สัปดาห์ ขึ้นอยู่กับความซับซ้อนและฟีเจอร์ที่ต้องการ"
            />
            <FAQItem
              question="มีบริการดูแลหลังการส่งมอบหรือไม่?"
              answer="มีครับ เรามีแพ็คเกจดูแลรักษาระบบ รวมถึงการอัปเดตและแก้ไขปัญหา"
            />
            <FAQItem
              question="สามารถขอปรับแก้ไขหลังส่งมอบงานได้หรือไม่?"
              answer="ได้ครับ เรามีช่วงเวลา warranty และสามารถปรับแก้ได้ตามแพ็คเกจที่เลือก"
            />
            <FAQItem
              question="รับทำงานนอกเวลาทำการหรือไม่?"
              answer="สำหรับงาน urgent เราสามารถจัดทีมให้ได้ กรุณาติดต่อล่วงหน้าอย่างน้อย 3 วัน"
            />
          </div>
        </div>
      </section>
    </>
  );
}

interface ContactInfoProps {
  icon: string;
  title: string;
  content: string;
}

function ContactInfo({ icon, title, content }: ContactInfoProps) {
  return (
    <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-gray-800 text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

interface SocialButtonProps {
  icon: string;
  label: string;
}

function SocialButton({ icon, label }: SocialButtonProps) {
  return (
    <button 
      className="w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-110 flex items-center justify-center text-2xl"
      aria-label={label}
    >
      {icon}
    </button>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800 pr-4">{question}</span>
        <span className="text-2xl text-indigo-600 flex-shrink-0">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pt-2">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}