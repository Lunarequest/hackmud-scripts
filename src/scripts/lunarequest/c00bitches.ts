// You can optionally declare the seclevel of this script
// @seclevel FULLSEC

// @autocomplete s: #s.trust.me c: {"arg":"here"}
// This is how you declare the autocomplete of a TypeScript script (also optional)

// You can import functions from other modules
import { isRecord } from "/lib/isRecord";
import { isScriptor } from "/lib/isScriptor";

const colors = [
    "green",
    "lime",
    "yellow",
    "orange",
    "red",
    "purple",
    "blue",
    "cyan",
];
const complements: Record<string, string> = {
    green: "red",
    lime: "purple",
    yellow: "blue",
    orange: "cyan",
    red: "green",
    purple: "lime",
    blue: "yellow",
    cyan: "orange",
};
const triads: Record<string, Record<string, string>> = {
    green: { c003_triad_1: "orange", c003_triad_2: "purple" },
    lime: { c003_triad_1: "red", c003_triad_2: "blue" },
    yellow: { c003_triad_1: "purple", c003_triad_2: "cyan" },
    orange: { c003_triad_1: "blue", c003_triad_2: "green" },
    red: { c003_triad_1: "cyan", c003_triad_2: "lime" },
    purple: { c003_triad_1: "green", c003_triad_2: "yellow" },
    blue: { c003_triad_1: "lime", c003_triad_2: "orange" },
    cyan: { c003_triad_1: "yellow", c003_triad_2: "red" },
};

// This is a pretty standard signature for a hackmud script
export default (context: Context, args?: unknown) => {
    // We check if `args` is an object and if it is, it will be treated like a `Record<string, unknown>`
    if (context.caller !== "lunarequest") {
        return { e: "who tf are you?" };
    }
    if (!isRecord(args)) {
        return `This script is a badly written brutefroce ez series locks and l0cket. don't use it e\`S.\`g.\n${_FULL_SCRIPT_NAME} { s: #s.trust.me, c: {"throw known args"} }`;
    }
    if (!isRecord(args.c)) {
        return `This script is a badly written brutefroce ez series locks and l0cket. don't use it e\`S.\`g.\n${_FULL_SCRIPT_NAME} { s: #s.trust.me, c: {"throw known args"} }`;
    }
    if (!isScriptor(args.s)) {
        return `This script is a badly written brutefroce ez series locks and l0cket. don't use it e\`S.\`g.\n${_FULL_SCRIPT_NAME} { s: #s.trust.me, c: {"throw known args"} }`;
    }

    var s_args: Record<string, unknown> = args.c;
    let found = false;
    while (found !== true) {
        let out = args.s.call(s_args) as string;
        let lock = /(\S+)(?=\s+lock)/.exec(out);
        if (lock) {
            let l = lock[0].match(/(\d\d\d)/);
            if (l) {
                let n = parseInt(l[0]);
                switch (n) {
                    case 1: {
                        for (const c of colors) {
                            s_args["c001"] = c;
                            let ret = args.s.call(s_args) as string;
                            if (ret.includes("digit")) {
                                s_args["color_digit"] = c.length;
                                args.s.call(s_args);
                                return s_args;
                            }
                        }
                    }
                    case 2: {
                        for (const c of colors) {
                            s_args["c002"] = c;
                            let ret = args.s.call(s_args) as string;
                            if (!ret.includes("not")) {
                                s_args["c002_complement"] = complements[c];
                                args.s.call(s_args);
                                return s_args;
                            }
                        }
                    }
                    case 3: {
                        for (const c of colors) {
                            s_args["c003"] = c;
                            let ret = args.s.call(s_args) as string;
                            if (ret.includes("c003_triad_1")) {
                                s_args["c003_triad_1"] = triads[c].c003_triad_1;
                                s_args["c003_triad_2"] = triads[c].c003_triad_2;
                                args.s.call(s_args);
                                return s_args;
                            }
                        }
                    }
                    default: {
                        if (l.includes("EZ") || l.includes("l0cket")) {
                            s_args = #s.lunarequest.ezbitches.call({ s: args.s, c: s_args });
                        } else {
                            found = true;
                        }
                    }
                }
            }
        } else {
            return { e: "Are there no locks?" };
        }
    }
    return s_args;
};
