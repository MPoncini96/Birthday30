import Image from "next/image";

const treeIconSrc =
  "/BackgroundTrees/182-1826674_evergreen-tree-clipart-pine-tree-clipart-black-and-white.png";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
    from?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const hasError = params.error === "1";
  const from = params.from?.startsWith("/") ? params.from : "/";

  return (
    <main className="login-screen">
      <div className="login-shell">
        <div className="login-card__trees" aria-hidden="true">
          <Image className="login-card__tree login-card__tree--left" src={treeIconSrc} alt="" width={80} height={80} />
          <Image className="login-card__tree login-card__tree--center" src={treeIconSrc} alt="" width={108} height={108} />
          <Image className="login-card__tree login-card__tree--right" src={treeIconSrc} alt="" width={80} height={80} />
        </div>

        <p className="login-card__eyebrow">Private campsite page</p>
        <h1>Enter the password</h1>
        <p className="login-card__copy">
          A simple password is in place so only friends with the link and password can get in.
        </p>

        <form className="login-card__form" action="/api/unlock" method="post">
          <input type="hidden" name="from" value={from} />
          <label className="login-card__label" htmlFor="password">
            Password
          </label>
          <input
            className="login-card__input"
            id="password"
            name="password"
            type="text"
            autoComplete="off"
            spellCheck={false}
            required
          />
          {hasError ? <p className="login-card__error">That password was not correct.</p> : null}
          <button className="login-card__button" type="submit">
            Enter site
          </button>
        </form>
      </div>
    </main>
  );
}
