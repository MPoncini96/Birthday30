"use client";

export function LogoutButton() {
  return (
    <form
      className="logout-button"
      action="/api/logout"
      method="post"
      onSubmit={(event) => {
        if (!window.confirm("Sign out and lock the site again?")) {
          event.preventDefault();
        }
      }}
    >
      <button className="logout-button__trigger" type="submit" aria-label="Sign out">
        <svg
          aria-hidden="true"
          className="logout-button__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 1 1 8 0v3" />
        </svg>
      </button>
    </form>
  );
}
