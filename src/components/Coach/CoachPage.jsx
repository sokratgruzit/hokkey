import { useParams } from "react-router-dom";

import Coach from "../3D/Coach";

import styles from "./CoachPage.module.css";

export const CoachPage = () => {
    const { id } = useParams();

    const teamData = [
        {
            src: "/covers/boy1.webp",
            name: "Никитин Александр",
            number: 3,
            data: {
                birth: "30.10.2018",
                position: "Защитник",
                height: 170,
                weight: 50,
                hand: "Правый"
            },
            id: "zaharov"
        },
        {
            src: "/covers/boy1.webp",
            name: "Гречанников Матвей",
            number: 71,
            data: {
                birth: "30.10.2018",
                position: "Защитник",
                height: 170,
                weight: 50,
                hand: "Правый"
            },
            id: "zaharov2"
        },
        {
            src: "/covers/boy1.webp",
            name: "Скляров Артем",
            number: 28,
            data: {
                birth: "30.10.2018",
                position: "Защитник",
                height: 170,
                weight: 50,
                hand: "Правый"
            },
            id: "zaharov3"
        },
        // {
        //     src: "/covers/boy1.webp",
        //     name: "Никитин Александр",
        //     number: 3,
        //     data: {
        //         birth: "30.10.2018",
        //         position: "Защитник",
        //         height: 170,
        //         weight: 50,
        //         hand: "Правый"
        //     }
        // },
        // {
        //     src: "/covers/boy1.webp",
        //     name: "Никитин Александр",
        //     number: 3,
        //     data: {
        //         birth: "30.10.2018",
        //         position: "Защитник",
        //         height: 170,
        //         weight: 50,
        //         hand: "Правый"
        //     }
        // },
        // {
        //     src: "/covers/boy1.webp",
        //     name: "Никитин Александр",
        //     number: 3,
        //     data: {
        //         birth: "30.10.2018",
        //         position: "Защитник",
        //         height: 170,
        //         weight: 50,
        //         hand: "Правый"
        //     }
        // },
        // {
        //     src: "/covers/boy1.webp",
        //     name: "Никитин Александр",
        //     number: 3,
        //     data: {
        //         birth: "30.10.2018",
        //         position: "Защитник",
        //         height: 170,
        //         weight: 50,
        //         hand: "Правый"
        //     }
        // },
        // {
        //     src: "/covers/boy1.webp",
        //     name: "Никитин Александр",
        //     number: 3,
        //     data: {
        //         birth: "30.10.2018",
        //         position: "Защитник",
        //         height: 170,
        //         weight: 50,
        //         hand: "Правый"
        //     }
        // }
    ];

    const coachData = teamData.find(item => item.id === id);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p>{coachData.name}</p>
                <p>{coachData.data.birth}</p>
                <p>{coachData.data.position}</p>
                <p>{coachData.data.hand}</p>
            </div>
            <Coach coachId={id} />
        </div>
    );
};
