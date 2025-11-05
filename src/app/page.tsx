export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in">
              NEXT.JS
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              แพลตฟอร์มที่ทรงพลังสำหรับการพัฒนาเว็บแอปพลิเคชันสมัยใหม่
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105">
                เริ่มต้นใช้งาน
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all">
                เรียนรู้เพิ่มเติม
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              ฟีเจอร์เด่นของเรา
            </h2>
            <p className="text-gray-600 text-lg">
              เครื่องมือและเทคโนโลยีที่คุณต้องการ
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon="⚡"
              title="ประสิทธิภาพสูง"
              description="โหลดเร็ว ตอบสนองทันใจ ด้วย Next.js และ Server Components"
              color="bg-yellow-500"
            />
            <FeatureCard
              icon="🔒"
              title="ความปลอดภัย"
              description="TypeScript ช่วยป้องกันข้อผิดพลาดและเพิ่มความมั่นคง"
              color="bg-green-500"
            />
            <FeatureCard
              icon="🎨"
              title="ออกแบบสวยงาม"
              description="UI/UX ที่ทันสมัยด้วย Tailwind CSS"
              color="bg-pink-500"
            />
            <FeatureCard
              icon="📱"
              title="Responsive Design"
              description="ใช้งานได้ลื่นไหลบนทุกอุปกรณ์"
              color="bg-blue-500"
            />
            <FeatureCard
              icon="🚀"
              title="SEO Friendly"
              description="ออกแบบมาเพื่อการค้นหาที่ดีที่สุด"
              color="bg-purple-500"
            />
            <FeatureCard
              icon="🛠️"
              title="ง่ายต่อการพัฒนา"
              description="เครื่องมือครบครัน ใช้งานง่าย"
              color="bg-indigo-500"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <StatCard number="10K+" label="ผู้ใช้งาน" />
            <StatCard number="500+" label="โปรเจค" />
            <StatCard number="99.9%" label="Uptime" />
            <StatCard number="24/7" label="การสนับสนุน" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            พร้อมที่จะเริ่มต้นแล้วหรือยัง?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            เข้าร่วมกับผู้พัฒนาหลายพันคนที่ไว้วางใจเรา
          </p>
          <button className="bg-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg">
            เริ่มใช้งานฟรี
          </button>
        </div>
      </section>
    </main>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="transform hover:scale-110 transition-transform">
      <div className="text-5xl font-bold mb-2">{number}</div>
      <div className="text-indigo-200 text-lg">{label}</div>
    </div>
  );
}