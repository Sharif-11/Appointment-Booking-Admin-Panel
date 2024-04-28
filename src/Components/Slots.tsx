import Slot from "./Slot";

const Slots = ({ slots }: { slots: any[] }) => {
  return (
    <div>
      <div className="flex justify-around flex-wrap mx-8">
        {slots.map((slot, idx) => (
          <Slot id={idx} {...slot} />
        ))}
      </div>
    </div>
  );
};

export default Slots;
