import { LocalizedLink } from "@/components/localized-link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container card p-10">
        <p className="eyebrow">404</p>
        <h1 className="headline mt-3">This page is not available.</h1>
        <p className="lead mt-4">Use the navigation or return home to continue exploring Shramic Networks.</p>
        <LocalizedLink className="button button-primary mt-6" href="/">Return home</LocalizedLink>
      </div>
    </section>
  );
}
