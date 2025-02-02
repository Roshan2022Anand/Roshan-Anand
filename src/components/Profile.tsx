const Profile = () => {
  return (
    <section className="profile-section flex flex-col items-center justify-center w-full h-1/2 ">
      <img
        className="border-4 border-text-color object-cover size-[120px] md:size-[10vw]"
        style={{
          padding: "0px",
          borderRadius: "50%",
        }}
        src="\profile.jpg"
        alt="profile"
      />
      <div className="text-text-color text-[20px]">
        <span className="text-[30px]">˗ˏˋ</span>
        <span className="font-font-head">ROSHAN ANAND</span>
        <span className="text-[30px]">ˎˊ</span>
      </div>
      <p className="text-accent-one text-[14px]">Full Stack Developer</p>
    </section>
  );
};
export default Profile;
