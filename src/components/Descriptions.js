import React, { useContext } from "react";
import SetupMessage from "./Descriptions/SetupMessage";
import { FormContext } from "./Form";

const insertSpacer = () => {
    return (
        <>
            <br />
            <br />
            [FLAVORTEXT]
            <br />
            <br />
        </>
    );
};

const Description1 = (props) => {
    const { formData, formOther } = useContext(FormContext);

    let formDataCopy = { ...formData };
    Object.keys(formDataCopy).forEach((label) => {
        if (formData[label] === "Other") {
            formDataCopy[label] = formOther[label];
        }
    });

    let {
        make,
        model,
        year,
        finish,
        bodyType,
        bodyWood,
        scaleLength,
        neckWood,
        fingerBoard,
        neckProfile,
        inlays,
        nut,
        frets,
        pickups,
        pickguard,
        controls,
        switches,
        hardware,
        tuningMachines,
        bridge,
        knobs,
        stringGauge,
        guitarCase,
    } = formDataCopy;

    return (
        <p className="mb-8">
            {make || "MAKE"} {model || "MODEL"} {finish || "FINISH"}{" "}
            {year || "YEAR"}
            {guitarCase ? ` with ${guitarCase || "CASE"}` : null}.
            <br />
            <br />
            This guitar features a {bodyType || "BODYTYPE"}{" "}
            {bodyWood || "BODYWOOD"} Body,{" "}
            {/**neckFinish?`${neckFinish || 'NECKFINISH'} `:null*/}
            {neckWood || "NECKWOOD"} neck and{" "}
            {neckWood.toUpperCase() !== fingerBoard.toUpperCase()
                ? `${fingerBoard || "FINGERBOARD"} `
                : null}
            fingerboard. Equipped with {pickups || "PICKUPS"}. Controlled by{" "}
            {controls || "CONTROLS"} knob
            {controls !== "One Master Volume" ? "s" : null} and{" "}
            {switches || "SWITCH"}. The {scaleLength || "SCALELENGTH"}" scale
            length neck has{" "}
            {inlays ? `${inlays || "INLAYS"} inlays and ` : null}
            {frets || "FRETS"} frets with a {neckProfile || "NECKPROFILE"} neck
            profile. The hardware is comprised of{" "}
            {(tuningMachines || "TUNINGMACHINES") + " tuning machines, "}a{" "}
            {nut || "NUT"} Nut,{!hardware ? ` and` : null} a{" "}
            {bridge || "BRIDGE"}
            {bridge.match("bridge") || bridge.match("Bridge")
                ? null
                : ` bridge`}
            ,{knobs ? ` with ${(knobs || "KNOBS") + " Knobs"}` : null}
            {pickguard ? ` on a ${pickguard || "PICKGUARD"} pickguard` : null}.
            <br />
            <br />
            <SetupMessage stringGauge={stringGauge} guitarCase={guitarCase} />
        </p>
    );
};

const Description2 = (props) => {
    const { formData, formOther } = useContext(FormContext);

    let formDataCopy = { ...formData };
    Object.keys(formDataCopy).forEach((label) => {
        if (formData[label] === "Other") {
            formDataCopy[label] = formOther[label];
        }
    });

    let {
        make,
        model,
        year,
        finish,
        bodyType,
        bodyWood,
        scaleLength,
        neckWood,
        fingerBoard,
        neckProfile,
        inlays,
        nut,
        frets,
        pickups,
        pickguard,
        controls,
        switches,
        hardware,
        tuningMachines,
        bridge,
        knobs,
        stringGauge,
        guitarCase,
    } = formDataCopy;

    return (
        <p className="mb-8">
            {make || "MAKE"} {model || "MODEL"} {finish || "FINISH"}{" "}
            {year || "YEAR"}
            {guitarCase ? ` with ${guitarCase || "CASE"}` : null}.
            {insertSpacer()}
            This guitar features a {bodyType || "BODYTYPE"}{" "}
            {bodyWood || "BODYWOOD"} Body,{" "}
            {/**neckFinish?`${neckFinish || 'NECKFINISH'} `:null*/}
            {neckWood || "NECKWOOD"} neck and{" "}
            {neckWood.toUpperCase() !== fingerBoard.toUpperCase()
                ? `${fingerBoard || "FINGERBOARD"} `
                : null}
            fingerboard. Equipped with {pickups || "PICKUPS"}. Controlled by{" "}
            {controls || "CONTROLS"} knobs and {switches || "SWITCH"}. The{" "}
            {scaleLength || "SCALELENGTH"}" scale length neck has{" "}
            {inlays ? `${inlays || "INLAYS"} inlays and ` : null}
            {frets || "FRETS"} frets with a {neckProfile || "NECKPROFILE"} neck
            profile. The hardware is comprised of{" "}
            {(tuningMachines || "TUNINGMACHINES") + " tuning machines, "}a{" "}
            {nut || "NUT"} Nut,{!hardware ? ` and` : null} a{" "}
            {bridge || "BRIDGE"}
            {bridge.match("bridge") || bridge.match("Bridge")
                ? null
                : ` bridge`}
            ,{knobs ? ` with ${(knobs || "KNOBS") + " Knobs"}` : null}
            {pickguard ? ` on a ${pickguard || "PICKGUARD"} pickguard` : null}.
            {insertSpacer()}
            <SetupMessage stringGauge={stringGauge} guitarCase={guitarCase} />
        </p>
    );
};

export { Description1, Description2 };
