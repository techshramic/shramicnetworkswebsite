import { metrics } from "@/lib/site";

export default function DashboardPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Admin</p>
        <h1 className="headline mt-3">Dashboard foundation</h1>
        <p className="lead mt-4">Authentication, CMS CRUD, lead exports, and analytics integrations are ready to be layered onto this protected area.</p>
        <div className="mt-10 grid grid-2">
          {metrics.map((metric) => (
            <div className="card p-6" key={metric.label}>
              <p className="text-4xl font-black text-[#b94717]">{metric.value}</p>
              <h2 className="mt-3 font-black">{metric.label}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
