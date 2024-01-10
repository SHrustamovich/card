import { FC, useState } from "react";
import { IData } from "../data/data";
import Savatcha from "./icons";
import ModalContext from "./modal";

interface PropsCard {
    item: IData;
}
const CardContext: FC<PropsCard> = ({ item }) => {

    const [open,setOpen] = useState(false)

    const handlyOpenModal = () => {
        setOpen(true)
    }
    return (
        <>
            <div className='w-96 p-3 rounded-xl'>
                <div className='w-96 h-96'>
                    <img
                        src={item.img}
                        alt={item.text.slice(0, 10)}
                        className='w-full h-full object-cover rounded-lg'
                    />
                </div>
                <div className=''>
                    <p>{item.text}</p>
                    <p className=''>
                        <del>{item.type[0].price}</del>
                    </p>
                    <div className="flex justify-between">
                        <p>
                            {Number(item.type[0].price) -
                                (Number(item.type[0].price) *
                                    item.type[0].aksiya) /
                                    100}
                        </p>
                        <button onClick={handlyOpenModal}>
                            <Savatcha />
                        </button>
                    </div>
                </div>
            </div>

            {
                open && <ModalContext/>
            }
        </>
    );
};

export default CardContext;
