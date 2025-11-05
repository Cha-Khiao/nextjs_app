export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">เกี่ยวกับเรา</h1>
            <p className="text-xl text-indigo-100">
              เรามุ่งมั่นสร้างสรรค์เทคโนโลยีที่ทำให้โลกดีขึ้น
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">พันธกิจของเรา</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                เราเชื่อว่าเทคโนโลยีควรเข้าถึงได้ง่าย มีประสิทธิภาพ และช่วยให้ทุกคนสามารถสร้างสรรค์สิ่งที่ยอดเยี่ยมได้
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                ด้วยประสบการณ์กว่า 10 ปี เรามอบเครื่องมือและแพลตฟอร์มที่ช่วยให้นักพัฒนาและธุรกิจทั่วโลกประสบความสำเร็จ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            ทีมงานของเรา
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TeamMember
              name="สมชาย ใจดี"
              role="CEO & Founder"
              image="👨‍💼"
              description="ผู้นำด้วยวิสัยทัศน์และประสบการณ์ 15 ปี"
            />
            <TeamMember
              name="สมหญิง รักงาน"
              role="CTO"
              image="👩‍💻"
              description="ผู้เชี่ยวชาญด้านสถาปัตยกรรมระบบ"
            />
            <TeamMember
              name="สมศักดิ์ คิดสร้างสรรค์"
              role="Lead Designer"
              image="👨‍🎨"
              description="นักออกแบบมากประสบการณ์"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            คุณค่าของเรา
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ValueCard
              icon="💡"
              title="นวัตกรรม"
              description="เราไม่หยุดพัฒนาและปรับปรุงเทคโนโลยีของเราอยู่เสมอ"
            />
            <ValueCard
              icon="🤝"
              title="ความไว้วางใจ"
              description="สร้างความเชื่อมั่นและความปลอดภัยให้กับลูกค้า"
            />
            <ValueCard
              icon="🌟"
              title="คุณภาพ"
              description="มุ่งมั่นสร้างผลิตภัณฑ์คุณภาพสูงในทุกแง่มุม"
            />
            <ValueCard
              icon="🚀"
              title="การเติบโต"
              description="ช่วยให้ธุรกิจของคุณเติบโตไปพร้อมกับเรา"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">ต้องการรู้จักเราให้มากขึ้น?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            ติดต่อเราได้ตลอดเวลา เรายินดีตอบทุกคำถาม
          </p>
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-all transform hover:scale-105">
            ติดต่อเรา
          </button>
        </div>
      </section>
    </main>
  );
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

function TeamMember({ name, role, image, description }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <div className="text-6xl mb-4">{image}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-indigo-600 font-semibold mb-3">{role}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}