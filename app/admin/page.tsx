import Link from "next/link";

const adminSections = [
  {
    href: "/admin/invitees",
    label: "Invitees",
    description: "Add, remove, or update attendees, bios, and photos",
    icon: "👥"
  },
  {
    href: "/admin/activities",
    label: "Activities & Food",
    description: "Edit activities, meals, and the weekend schedule",
    icon: "🏕️"
  },
  {
    href: "/admin/reservation",
    label: "Reservation Details",
    description: "Update campsite info, dates, and booking details",
    icon: "📋"
  },
  {
    href: "/admin/faq",
    label: "FAQ & Footer",
    description: "Manage frequently asked questions and footer content",
    icon: "❓"
  },
  {
    href: "/admin/slideshow",
    label: "Slideshow & Photos",
    description: "Reorder or swap photos in the hero and bottom slideshows",
    icon: "🖼️"
  }
];

export default function AdminPage() {
  return (
    <main className="admin-shell">
      <div className="admin-header">
        <p className="eyebrow">Site Management</p>
        <h1>Admin</h1>
        <p className="admin-header__sub">Select a section to manage.</p>
      </div>

      <div className="admin-grid">
        {adminSections.map((section) => (
          <Link key={section.href} href={section.href} className="admin-card">
            <span className="admin-card__icon">{section.icon}</span>
            <div className="admin-card__body">
              <h2 className="admin-card__label">{section.label}</h2>
              <p className="admin-card__desc">{section.description}</p>
            </div>
            <span className="admin-card__arrow" aria-hidden>→</span>
          </Link>
        ))}
      </div>

      <div className="admin-footer">
        <Link href="/" className="admin-back">← Back to site</Link>
      </div>
    </main>
  );
}
