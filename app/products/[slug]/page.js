import Image from "next/image";
import Link from "next/link";

const PRODUCTS = {
  "lms": {
    title: "LMS",
    img: "/Lms.png",
    desc: "Learning Management System for courses, quizzes, progress tracking, and certifications.",
    color: "#f56c53",
    features: [
      "Course builder with modules and quizzes",
      "Student progress tracking and certificates",
      "Instructor dashboards and analytics",
    ],
  },
  "smart-attendance": {
    title: "Smart Attendance",
    img: "/Smartattendance.png",
    desc: "Smart attendance with biometrics/QR, shift scheduling, leave, and real-time reports.",
    color: "#00448a",
    features: [
      "QR/Biometric check‑in and shifts",
      "Leave management and approvals",
      "Monthly timesheets and payroll exports",
    ],
  },
  "vehicle-tracking-system": {
    title: "Vehicle Tracking System",
    img: "/Vehicletracking.png",
    desc: "GPS-based fleet tracking with live maps, geofencing, and route optimization.",
    color: "#f56c53",
    features: [
      "Live map with trip history",
      "Geofencing alerts and notifications",
      "Route optimization and utilization",
    ],
  },
  "e-commerce-website": {
    title: "E‑commerce Website",
    img: "/E commerce.png",
    desc: "Modern storefront with product catalogs, checkout, payments, and analytics.",
    color: "#00448a",
    features: [
      "Catalog, variants, and inventory",
      "Cart, checkout, and payments",
      "Orders, refunds, and sales analytics",
    ],
  },
};

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = PRODUCTS[slug];
  if (!product) {
    return (
      <div className="pt-20 md:pt-28 w-full px-6 mt-4 md:mt-6">
        <div className="container mx-auto">
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Product not found</h1>
          <p className="mt-3 md:mt-4 text-sm lg:text-base xl:text-lg text-neutral-700">The product you are looking for does not exist.</p>
          <div className="mt-4 md:mt-6">
            <Link href="/products" className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs lg:text-sm xl:text-base font-semibold text-white" style={{ backgroundColor: 'var(--vawe-teal)' }}>Back to Products</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-28">
      <section className="w-full px-6 mt-4 md:mt-6">
        <div className="container mx-auto">
          <div className="rounded-2xl md:rounded-3xl overflow-hidden border-2 bg-white" style={{ borderColor: product.color }}>
            <div className="relative w-full h-48 md:h-96 bg-gray-50">
              <Image src={product.img} alt={`${product.title} image`} fill className="object-contain" priority unoptimized />
            </div>
            <div className="p-4 md:p-8 bg-white/90">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold" style={{ color: 'var(--vawe-navy)' }}>{product.title}</h1>
              <div className="mt-2 md:mt-3 h-1 w-20 lg:w-24 rounded-full" style={{ backgroundColor: product.color }}></div>
              <p className="mt-2 md:mt-3 text-sm lg:text-base xl:text-lg text-neutral-700 max-w-3xl">{product.desc}</p>
              {product.features && (
                <ul className="mt-4 md:mt-5 list-disc pl-4 md:pl-5 text-xs lg:text-sm xl:text-base text-neutral-800 space-y-1">
                  {product.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}

            {/* LMS long-form content */}
            {params && (await params).slug === "lms" && (
              <div className="mt-6 md:mt-10 space-y-4 md:space-y-6 text-neutral-800">
                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>What is an LMS?</h2>
                  <p className="mt-2 text-sm lg:text-base xl:text-lg">A Learning Management System (LMS) is a software platform that allows organizations, schools, or companies to create, deliver, manage, and track learning or training programs online. It&apos;s used by educational institutions, corporates, and training providers to streamline digital learning.</p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>How an LMS Works</h2>
                  <ol className="mt-2 text-sm lg:text-base xl:text-lg list-decimal pl-4 md:pl-5 space-y-1">
                    <li>Course Creation: Instructors or admins create online courses by uploading videos, PDFs, quizzes, and assignments.</li>
                    <li>User Enrollment: Learners (students or employees) are added manually or through self-registration links.</li>
                    <li>Learning Delivery: Users access courses anytime, anywhere via web or mobile.</li>
                    <li>Assessment: The system provides quizzes, tests, or assignments to evaluate learner progress.</li>
                    <li>Tracking & Reporting: Admins can track learner progress, completion rates, and scores in real time.</li>
                    <li>Certification: After completion, the LMS automatically issues digital certificates.</li>
                    <li>Feedback & Analytics: Dashboards display performance metrics for learners and instructors.</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Key Features of an LMS</h2>
                  <div className="mt-3 grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Learning Management</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Create, upload, and organize courses</li>
                        <li>Multimedia support (videos, docs, slides, SCORM packages)</li>
                        <li>Course scheduling and prerequisites</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>User & Role Management</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Admin, instructor, and student roles</li>
                        <li>Bulk user import and permissions</li>
                        <li>Group or department-based access</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Assessment & Evaluation</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Quizzes, assignments, and tests</li>
                        <li>Auto-grading and feedback</li>
                        <li>Randomized question banks</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Certification & Gamification</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Custom certificate templates</li>
                        <li>Badges, points, and leaderboards</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Tracking & Reporting</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Progress tracking dashboards</li>
                        <li>Course completion and time tracking</li>
                        <li>Analytics on performance and engagement</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Communication Tools</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Discussion forums and chat</li>
                        <li>Announcements and notifications</li>
                        <li>Email or app alerts for updates</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Security & Integration</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Secure login, data encryption</li>
                        <li>Integration with HR systems, CRMs, and payment gateways</li>
                        <li>API and SSO (Single Sign-On) support</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Uses of an LMS</h2>
                  <div className="mt-2 grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Education Sector</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Schools and universities use LMSs for online classes, assignments, and grading.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Corporate Training</h3>
                      <ul className="mt-1 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Employee onboarding and skill development</li>
                        <li>Compliance and safety training</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Healthcare / Manufacturing</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Continuous training and certification for staff.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Individual Instructors</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Selling online courses and workshops globally.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Advantages of an LMS</h2>
                  <div className="mt-2 grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Time & Cost Efficient</h3>
                      <ul className="mt-1 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Eliminates classroom costs, travel, and printed materials</li>
                        <li>Courses can be reused and updated easily</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Accessibility & Flexibility</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">24/7 access from any location and device.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Performance Tracking</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Real-time analytics on learning effectiveness and engagement.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Consistent Training</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Ensures uniform content delivery across teams or branches.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Customization</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Tailor course design, branding, and learning paths to your organization.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Scalability</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Can serve 10 to 10,000+ learners simultaneously.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Smart Attendance long-form content */}
            {params && (await params).slug === "smart-attendance" && (
              <div className="mt-6 md:mt-10 space-y-4 md:space-y-6 text-neutral-800">
                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>What is a Smart Attendance System?</h2>
                  <p className="mt-2 text-sm lg:text-base xl:text-lg">A Smart Attendance System is a digital solution that automates employee or student attendance using biometrics, QR codes, RFID, GPS, or facial recognition. It eliminates manual attendance, reduces errors, and provides real-time tracking and analytics for HR or administrators.</p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>How Smart Attendance Works</h2>
                  <ol className="mt-2 text-sm lg:text-base xl:text-lg list-decimal pl-4 md:pl-5 space-y-1">
                    <li>User Identification: Check-in/out via biometrics, face scan, mobile app, or QR code.</li>
                    <li>Data Capture: System records time, date, and location.</li>
                    <li>Centralized Storage: Data is securely stored in the cloud.</li>
                    <li>Processing & Validation: Validates against shifts, schedules, and leave records.</li>
                    <li>Reports & Integration: Real-time dashboards; sync with payroll or HR systems.</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Key Features</h2>
                  <div className="mt-3 grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Attendance Tracking</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Biometric / QR / GPS / RFID-based check-ins</li>
                        <li>Real-time cloud sync</li>
                        <li>Offline mode for remote worksites</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Shift & Schedule Management</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Auto-scheduling and rotation</li>
                        <li>Late-in and early-out tracking</li>
                        <li>Custom rules and grace periods</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Mobile & Web Access</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Mobile check-in with GPS verification</li>
                        <li>Push notifications for shifts or leaves</li>
                        <li>Admin/HR web dashboard</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Leave & Holiday Management</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Apply, approve, or reject leaves online</li>
                        <li>Auto-calculation of working days and holidays</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Reporting & Analytics</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Real-time summaries and dashboards</li>
                        <li>Department-wise views</li>
                        <li>Export to Excel, PDF, or payroll</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Integration & Security</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>ERP/HRMS/payroll integrations</li>
                        <li>Secure login and encrypted storage</li>
                        <li>Role-based access control</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Uses</h2>
                  <div className="mt-2 grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Corporates</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Automate employee attendance and link to payroll.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Educational Institutions</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Record student attendance automatically in classrooms.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Healthcare & Manufacturing</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Manage shift-based staff attendance.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Field Teams & Remote Work</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">GPS-based mobile check-in for off-site employees.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Advantages</h2>
                  <div className="mt-2 grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Accuracy & Reliability</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Eliminates manual entry errors and buddy punching.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Time-Saving</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Automated tracking reduces HR workload.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Real-Time Data</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Managers can view attendance from anywhere.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Cost Efficient</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Reduces administrative costs and paper usage.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Seamless Integration</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Works smoothly with payroll and HR systems.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Data-Driven Insights</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Reports help optimize productivity and workforce planning.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Vehicle Tracking System long-form content */}
            {params && (await params).slug === "vehicle-tracking-system" && (
              <div className="mt-6 md:mt-10 space-y-4 md:space-y-6 text-neutral-800">
                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>What is a Vehicle Tracking System?</h2>
                  <p className="mt-2 text-sm lg:text-base xl:text-lg">A Vehicle Tracking System (VTS) is a GPS-based solution that enables individuals or organizations to monitor and manage vehicles in real time. It collects live location, route, and performance data using GPS, GSM, and IoT technologies, helping optimize operations, reduce costs, and improve fleet safety.</p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>How It Works</h2>
                  <ol className="mt-2 text-sm lg:text-base xl:text-lg list-decimal pl-4 md:pl-5 space-y-1">
                    <li>GPS Device Installation: A GPS tracker is installed in each vehicle (car, bus, truck, etc.).</li>
                    <li>Data Collection: Device captures location, speed, engine status, fuel level, and route.</li>
                    <li>Data Transmission: Information is sent to a cloud server via GSM/satellite networks.</li>
                    <li>Dashboard Monitoring: Live map, travel history, and alerts for deviations/violations.</li>
                    <li>Analytics & Reporting: Reports on mileage, driver behavior, routes, and fuel efficiency.</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Key Features</h2>
                  <div className="mt-3 grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Real-Time Tracking</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Live vehicle location with map integration</li>
                        <li>Trip replay and travel history</li>
                        <li>Speed and route deviation alerts</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Geofencing</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Define zones and virtual boundaries</li>
                        <li>Alerts on zone entry/exit</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Fuel & Engine Monitoring</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Fuel consumption and refill tracking</li>
                        <li>Engine on/off status</li>
                        <li>Maintenance reminders</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Reports & Analytics</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Distance traveled, idle time, utilization</li>
                        <li>Custom fleet performance reports</li>
                        <li>Export to Excel/PDF</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Alerts & Notifications</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Over-speeding, harsh braking, idle time</li>
                        <li>Route deviation and maintenance reminders</li>
                        <li>SMS, app, or email notifications</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Integration</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>ERP, logistics, and delivery management</li>
                        <li>Support for IoT devices and mobile apps</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Uses</h2>
                  <div className="mt-2 grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Logistics & Transport</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Fleet tracking and route optimization for delivery vehicles.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Public Transport</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Real-time tracking of buses for passengers and operators.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Ride-Hailing Services</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Dispatch and tracking for ride-share systems.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Corporates</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Employee transportation monitoring and route safety.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Construction & Mining</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Asset and heavy equipment tracking.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Advantages</h2>
                  <div className="mt-2 grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Improved Fleet Efficiency</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Optimizes route planning and reduces idle time.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Real-Time Control</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Managers can monitor vehicles anywhere, anytime.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Cost Reduction</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Lowers fuel, maintenance, and unauthorized trips.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Data-Driven Decisions</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Analytics support better planning and accountability.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Enhanced Safety & Security</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Instant alerts for accidents, deviations, or misuse.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Customer Satisfaction</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Accurate ETAs and real-time delivery updates.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* E‑commerce Website long-form content */}
            {params && (await params).slug === "e-commerce-website" && (
              <div className="mt-6 md:mt-10 space-y-4 md:space-y-6 text-neutral-800">
                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>What is an E‑commerce Website?</h2>
                  <p className="mt-2 text-sm lg:text-base xl:text-lg">An E‑commerce website is an online platform that enables businesses or individuals to sell products and services over the internet. Customers can browse products, add them to a cart, make payments, and track their orders in a seamless digital experience. It serves as a virtual storefront for retail, wholesale, or digital goods.</p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>How It Works</h2>
                  <ol className="mt-2 text-sm lg:text-base xl:text-lg list-decimal pl-4 md:pl-5 space-y-1">
                    <li>Product Listing: Upload product details (name, images, price, description).</li>
                    <li>Customer Browsing: Explore via categories, search, and recommendations.</li>
                    <li>Cart & Checkout: Add items, review, and proceed to checkout.</li>
                    <li>Payment & Confirmation: Pay via UPI/cards/wallets/COD; receive order confirmation.</li>
                    <li>Inventory & Fulfillment: Adjust stock, package, and track delivery.</li>
                    <li>Analytics & Insights: Dashboards for sales, customers, and revenue trends.</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Key Features</h2>
                  <div className="mt-3 grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Product Management</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Add, edit, categorize products</li>
                        <li>Inventory tracking and stock alerts</li>
                        <li>Variants (size, color, etc.)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Secure Payments</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>UPI, cards, wallets, COD</li>
                        <li>SSL encryption and secure gateways</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Order & Inventory</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Automated stock updates</li>
                        <li>Order tracking and shipping integration</li>
                        <li>Returns and refunds</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>User Accounts</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Profiles, wishlists</li>
                        <li>Order history and tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Analytics & Reports</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Sales insights and customer analytics</li>
                        <li>Abandoned cart tracking</li>
                        <li>Conversion and traffic reports</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Customization & SEO</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Custom themes and branding</li>
                        <li>SEO-friendly URLs and metadata</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Customer Support</h3>
                      <ul className="mt-2 text-xs lg:text-sm xl:text-base list-disc pl-4 md:pl-5 space-y-1">
                        <li>Chatbots, helpdesk, and contact forms</li>
                        <li>Reviews and ratings</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Uses</h2>
                  <div className="mt-2 grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Retail & Wholesale</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Sell physical goods like fashion, electronics, or groceries.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Digital Products</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Sell eBooks, software, or online courses.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>B2B & B2C</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Connect manufacturers, distributors, and customers.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Service Businesses</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Appointments, subscriptions, or consultations.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Advantages</h2>
                  <div className="mt-2 grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>24/7 Availability</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Customers can shop anytime, anywhere.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Lower Operational Costs</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">No physical store required; easy scalability.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Global Reach</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Sell to customers across regions.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Real-Time Insights</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Analytics and dashboards for decisions.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Customer Engagement</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Personalized recommendations and loyalty programs.</p>
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>Automation</h3>
                      <p className="mt-1 text-xs lg:text-sm xl:text-base">Streamlined inventory, orders, and payments.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-4 md:mt-6">
              <Link href="/products" className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs lg:text-sm xl:text-base font-semibold text-white" style={{ backgroundColor: 'var(--vawe-coral)' }}>Back to Products</Link>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}


