import GuestLayout from "../Layouts/GuestLayout";


export default function Home() {
  return (
    <GuestLayout>
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Benvenuto su Sergio Di Murro</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime velit incidunt.</p>
        <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, adipisci suscipit. Libero, numquam?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus deleniti corrupti beatae facere vitae.</p>
      </div>
    </GuestLayout>
  );
}