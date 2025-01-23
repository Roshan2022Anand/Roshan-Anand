const Profile = () => {
  return (
    <section className="profile-section">
      <img
        className="border-2 size-[100px] object-cover rounded-full"
        src="\public\profile.jpg"
        alt="profile"
      />
      <article>
        <h1 className="font-head text-accent-one font-bold text-[20px]">
          Roshan Anand
        </h1>
        <p className="text-accent-two text-[14px]">Full Stack Developer.</p>
      </article>
    </section>
  );
};

export default Profile;
