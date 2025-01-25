const Profile = () => {
  return (
    <section className="profile-section flex flex-col items-center">
      <img
        className="border-4 border-text-color size-[100px] object-cover rounded-full"
        src="\public\profile.jpg"
        alt="profile"
      />
      <h2 className="text-text-color text-[20px]">
        <span className="text-[30px]">˗ˏˋ</span>
        <span className="font-font-head">ROSHAN ANAND</span>
        <span className="text-[30px]">ˎˊ</span>
      </h2>
      <h3 className="text-accent-one text-[14px]">Full Stack Developer</h3>
    </section>
  );
};
export default Profile;
