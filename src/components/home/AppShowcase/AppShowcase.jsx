import appScreen from "../../../assets/images/app/app-screens.png";

function AppShowcase() {
  return (
    <section className="mt-8">
      <div className="w-full flex justify-center">
        <img
          src={appScreen}
          alt="Omnivixo App"
          className="w-full h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}

export default AppShowcase;