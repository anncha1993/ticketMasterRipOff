export default function Dashboard({ loggedIn }) {
  return loggedIn ? (
    <section>
      <h1>Min side</h1>
    </section>
  ) : (
    <section>
      <form>
        <label>
          e-post
          <input type="email" placeholder="ackarlse@hiof.no" />
        </label>
        <label>
          passord
          <input type="password" placeholder="*******" />
        </label>
      </form>
    </section>
  );
}
