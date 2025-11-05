export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">บริการของเรา</h1>
            <p className="text-xl text-purple-100">
              โซลูชันที่ครบครันสำหรับทุกความต้องการของคุณ
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ServiceCard
              icon="💻"
              title="Web Development"
              description="พัฒนาเว็บไซต์และเว็บแอปพลิเคชันที่ทันสมัย รวดเร็ว และตอบสนองทุกอุปกรณ์"
              features={["Next.js & React", "TypeScript", "Responsive Design"]}
              price="เริ่มต้น ฿15,000"
              color="from-blue-500 to-cyan-500"
            />
            <ServiceCard
              icon="📱"
              title="Mobile App Development"
              description="สร้างแอปพลิเคชันมือถือที่ใช้งานง่ายและมีประสิทธิภาพสูง"
              features={["iOS & Android", "Cross-platform", "Native Performance"]}
              price="เริ่มต้น ฿30,000"
              color="from-purple-500 to-pink-500"
            />
            <ServiceCard
              icon="🎨"
              title="UI/UX Design"
              description="ออกแบบประสบการณ์ผู้ใช้ที่สวยงามและใช้งานง่าย"
              features={["User Research", "Wireframing", "Prototyping"]}
              price="เริ่มต้น ฿10,000"
              color="from-pink-500 to-rose-500"
            />
            <ServiceCard
              icon="☁️"
              title="Cloud Solutions"
              description="บริการคลาวด์ที่ปลอดภัย มั่นคง และปรับขนาดได้ง่าย"
              features={["AWS/Azure/GCP", "Auto-scaling", "High Availability"]}
              price="เริ่มต้น ฿8,000/เดือน"
              color="from-indigo-500 to-blue-500"
            />
            <ServiceCard
              icon="🔒"
              title="Security Consulting"
              description="ให้คำปรึกษาและตรวจสอบความปลอดภัยของระบบ"
              features={["Security Audit", "Penetration Testing", "Compliance"]}
              price="เริ่มต้น ฿25,000"
              color="from-green-500 to-emerald-500"
            />
            <ServiceCard
              icon="📊"
              title="Data Analytics"
              description="วิเคราะห์ข้อมูลและสร้าง Dashboard ที่เข้าใจง่าย"
              features={["Business Intelligence", "Data Visualization", "Reporting"]}
              price="เริ่มต้น ฿20,000"
              color="from-yellow-500 to-orange-500"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            กระบวนการทำงานของเรา
          </h2>
          <div className="max-w-4xl mx-auto">
            <ProcessStep
              number="1"
              title="วิเคราะห์ความต้องการ"
              description="รับฟังและทำความเข้าใจความต้องการของคุณอย่างละเอียด"
            />
            <ProcessStep
              number="2"
              title="วางแผนและออกแบบ"
              description="สร้าง Roadmap และออกแบบโซลูชันที่เหมาะสมที่สุด"
            />
            <ProcessStep
              number="3"
              title="พัฒนาและทест"
              description="เขียนโค้ดคุณภาพสูงและทดสอบอย่างละเอียด"
            />
            <ProcessStep
              number="4"
              title="ส่งมอบและดูแล"
              description="Deploy และให้การสนับสนุนอย่างต่อเนื่อง"
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">พร้อมเริ่มโปรเจคของคุณแล้ว?</h2>
          <p className="text-xl mb-8 text-purple-100">
            ปรึกษาฟรี! เราพร้อมช่วยคุณทำให้ไอเดียเป็นจริง
          </p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-xl">
            ขอใบเสนอราคา
          </button>
        </div>
      </section>
    </main>
  );
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  color: string;
}

function ServiceCard({ icon, title, description, features, price, color }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <div className={`bg-gradient-to-r ${color} p-6 text-center`}>
        <div className="text-6xl mb-2">{icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="border-t pt-4">
          <p className="text-indigo-600 font-bold text-lg">{price}</p>
        </div>
      </div>
    </div>
  );
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="flex items-start mb-8">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {number}
          </div>
        </div>
        <div className="ml-6 flex-grow">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
      </div>
      {!isLast && (
        <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 to-purple-300"></div>
      )}
    </div>
  );
}