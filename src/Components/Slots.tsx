import Slot from "./Slot";

const Slots = ({
  slots,
  handlingFunction,
}: {
  slots: any[];
  handlingFunction: any;
}) => {
  return (
    <div>
      <div className="flex justify-between flex-wrap mx-8">
        {slots.map((slot, idx) => (
          <Slot
            id={idx}
            {...slot}
            handlingFunction={() => handlingFunction(slot._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slots;
