import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import Card from "../../../../components/Card/Card";
import { BsPhoneFill } from "react-icons/bs";
import { AiOutlineCaretRight } from "react-icons/ai";
import TextInput from "../../../../components/TextInput/TextInput";
import styles from "../StepPhone.module.css";
import api, { sendOtp } from "../../../../http/index";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../../features/user/authSlice";


const Phone = ({ onNext }) => {
    const [phoneNumber, setphoneNumber] = useState("");
    const dispatch = useDispatch();

    const getPhoneNumber = (e) => {
        setphoneNumber(e.target.value);
    };

    const submit = async () => {
        //http request

        const {data}= await sendOtp({ phone: phoneNumber });
        console.log(data);

        dispatch(setOtp({hash:data.hash,phone:data.phone}))

        onNext();
    };

    return (
        <>
            <Card title="Enter Your Phone!" icon={<BsPhoneFill />}>
                <div>
                    <TextInput value={phoneNumber} onChange={getPhoneNumber} />
                    <div className={styles.actionButtonWrap}>
                        <Button
                            text="Get Started"
                            icon={<AiOutlineCaretRight />}
                            onClick={submit}
                        />
                    </div>
                    <p className={styles.bottomParagraph}>
                        By Entring your Phone Number You Must Accept our Privacy Policy!
                    </p>
                </div>
            </Card>
        </>
    );
};

export default Phone;
